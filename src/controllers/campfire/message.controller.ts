import type { Context } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { routeMessage, isCocQuery } from '../../campfire/index.js';
import { cocMaster } from '../../campfire/coc-master.js';
import type { CampfireMessage } from '../../campfire/types.js';

export const messageController = async (c: Context): Promise<Response> => {
  try {
    const payload = await c.req.json<CampfireMessage>();
    const plain = payload.message.body.plain.trim();

    // COC queries: return loading immediately, process in background
    if (isCocQuery(plain)) {
      console.log(
        `[controller:coc] dispatching background user=${payload.user.name} ` +
        `room=${payload.room.id} text="${plain.slice(0, 80)}"`
      );

      // Fire-and-forget: Node.js event loop keeps the process alive
      cocMaster(payload)
        .then(async (result) => {
          console.log(
            `[controller:coc] background complete room=${payload.room.id} ` +
            `resultLen=${result.length}`
          );
          const replyUrl = `https://base.bbki.ng/rooms/${payload.room.id}/3-a6E7EFNFxxZv/messages`;
          const postResp = await fetch(replyUrl, {
            method: 'POST',
            // headers: { 'Content-Type': 'application/json' },
            headers: { 'Content-Type': 'text/html; charset=utf-8' },
            body: result,
          });
          console.log(
            `[controller:coc] reply posted status=${postResp.status} ` +
            `room=${payload.room.id}`
          );
        })
        .catch((err: unknown) => {
          console.error(
            '[controller:coc] background failed:',
            err instanceof Error ? err.message : String(err),
            'stack:',
            err instanceof Error ? err.stack?.slice(0, 500) : '(no stack)'
          );
        });

      return new Response('正在查询中...', {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }

    // Synchronous command/content handling
    const response = await routeMessage(payload);
    return new Response(response, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  } catch (err) {
    console.error('[controller:message] error:', err);
    throw new HTTPException(500, {
      message: err instanceof Error ? err.message : 'Unknown error',
    });
  }
};
