import type { Update } from "telegraf/types";
import { Bot } from "./bbbot";
import { createKvSessionStore } from "./middlewares";
import { KVNamespace, requireEnv, setRuntimeBindings, setRuntimeEnv } from "./runtime";
import { routeMessage } from "./campfire";

interface WorkerEnv {
  BOT_TOKEN: string;
  ADMIN_ID: string;
  ADMIN_EMAIL: string;
  SUPABASE_URL: string;
  SUPABASE_ANNO_KEY: string;
  SITE_URL: string;
  WEBHOOK_SECRET: string;
  SESSION_KV: KVNamespace;
  NODE_ENV?: string;
  STREAM_API_KEY: string;
  API_CF_ENDPOINT: string;
}

export default {
  async fetch(request: Request, env: WorkerEnv): Promise<Response> {
    const { SESSION_KV, ...stringEnv } = env;
    setRuntimeEnv(stringEnv);
    setRuntimeBindings({ SESSION_KV });

    Bot.init({
      sessionStore: env.SESSION_KV ? createKvSessionStore(env.SESSION_KV) : undefined,
      notifyOnStart: false,
    });

    const url = new URL(request.url);
    const webhookPath = `/telegram/${requireEnv("WEBHOOK_SECRET")}`;

    // Existing Telegram webhook route
    if (request.method === "POST" && url.pathname === webhookPath) {
      const update = (await request.json()) as Update;
      await Bot.handleUpdate(update);
      return new Response("OK");
    }

    // Campfire message webhook
    if (request.method === "POST" && url.pathname === "/campfire/message") {
      try {
        const payload = await request.json() as import("./campfire/types").CampfireMessage;
        const response = await routeMessage(payload);
        return new Response(response, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        });
      } catch (err) {
        console.error("Campfire message error:", err);
        return new Response(
          `Error: ${err instanceof Error ? err.message : "Unknown error"}`,
          { status: 500 },
        );
      }
    }

    // Health check
    if (request.method === "GET" && url.pathname === "/") {
      return new Response("OK");
    }

    return new Response("Not Found", { status: 404 });
  },
};
