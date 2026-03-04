import type { Update } from "telegraf/types";
import { Bot } from "./bbbot";
import { createKvSessionStore } from "./middlewares";
import { KVNamespace, requireEnv, setRuntimeBindings, setRuntimeEnv } from "./runtime";

interface WorkerEnv {
  BOT_TOKEN: string;
  ADMIN_ID: string;
  ADMIN_EMAIL: string;
  SUPABASE_URL: string;
  SUPABASE_ANNO_KEY: string;
  SITE_URL: string;
  GOOGLE_SEARCH_API_KEY: string;
  GOOGLE_SEARCH_ENGINE_ID: string;
  COC_TOKEN: string;
  WEBHOOK_SECRET: string;
  SESSION_KV: KVNamespace;
  NODE_ENV?: string;
}

export default {
  async fetch(request: Request, env: WorkerEnv): Promise<Response> {
    setRuntimeEnv(env);
    setRuntimeBindings({ SESSION_KV: env.SESSION_KV });

    Bot.init({
      sessionStore: env.SESSION_KV ? createKvSessionStore(env.SESSION_KV) : undefined,
      notifyOnStart: false,
    });

    const url = new URL(request.url);
    const webhookPath = `/telegram/${requireEnv("WEBHOOK_SECRET")}`;

    if (request.method === "POST" && url.pathname === webhookPath) {
      const update = (await request.json()) as Update;
      await Bot.handleUpdate(update);
      return new Response("OK");
    }

    if (request.method === "GET" && url.pathname === "/") {
      return new Response("OK");
    }

    return new Response("Not Found", { status: 404 });
  },
};
