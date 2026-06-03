import { routeMessage } from "./campfire";
import { type KVNamespace, setRuntimeBindings, setRuntimeEnv } from "./runtime";

interface WorkerEnv {
  ADMIN_IDS: string;
  STREAM_API_KEY: string;
  API_CF_ENDPOINT: string;
  SESSION_KV: KVNamespace;
  KIMI_API_KEY: string;
  COC_TOKEN: string;
  PROXY_KEY?: string;
}

export default {
  async fetch(request: Request, env: WorkerEnv): Promise<Response> {
    const { SESSION_KV, ...stringEnv } = env;
    setRuntimeEnv(stringEnv);
    setRuntimeBindings({ SESSION_KV });

    const url = new URL(request.url);

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
