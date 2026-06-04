import { routeMessage, isCocQuery } from "./campfire";
import { cocMaster } from "./campfire/coc-master";
import { type KVNamespace, setRuntimeBindings, setRuntimeEnv } from "./runtime";

interface WorkerEnv {
  ADMIN_IDS: string;
  STREAM_API_KEY: string;
  API_CF_ENDPOINT: string;
  SESSION_KV: KVNamespace;
  KIMI_API_KEY: string;
  DEEPSEEK_API_KEY: string;
  COC_AI_PROVIDER?: string;
  COC_TOKEN: string;
  PROXY_KEY?: string;
}

export default {
  async fetch(request: Request, env: WorkerEnv, ctx: ExecutionContext): Promise<Response> {
    const { SESSION_KV, ...stringEnv } = env;
    setRuntimeEnv(stringEnv);
    setRuntimeBindings({ SESSION_KV });

    const url = new URL(request.url);

    // Campfire message webhook
    if (request.method === "POST" && url.pathname === "/campfire/message") {
      try {
        const payload = await request.json() as import("./campfire/types").CampfireMessage;
        const plain = payload.message.body.plain.trim();

        // COC queries: return loading immediately, process in background
        if (isCocQuery(plain)) {
          ctx.waitUntil((async () => {
            try {
              console.log(
                `[worker:coc] background start room=${payload.room.id} ` +
                `user=${payload.user.name} text="${plain.slice(0, 80)}"`
              );
              const result = await cocMaster(payload);
              const replyUrl = `https://base.bbki.ng/rooms/${payload.room.id}/3-a6E7EFNFxxZv/messages`;
              console.log(
                `[worker:coc] posting reply room=${payload.room.id} ` +
                `resultLen=${result.length}`
              );
              const postResp = await fetch(replyUrl, {
                method: "POST",
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: result,
              });
              console.log(
                `[worker:coc] reply posted status=${postResp.status} ` +
                `room=${payload.room.id}`
              );
            } catch (err) {
              console.error(
                "[worker:coc] background failed:",
                err instanceof Error ? err.message : err,
                "stack:",
                err instanceof Error ? err.stack?.slice(0, 500) : '(no stack)'
              );
            }
          })());
          return new Response("正在查询中...", {
            headers: { "Content-Type": "text/html; charset=utf-8" },
          });
        }

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
