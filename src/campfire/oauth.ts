import { KVNamespace } from "../runtime";
import { DataBase } from "../utils/DataBase";
import { saveSession } from "./session";

const OAUTH_STATE_PREFIX = "campfire:oauth:state:";
const STATE_TTL_SECONDS = 60 * 10; // 10 minutes

export async function generateAuthUrl(
  requestUrl: string,
  userId: number,
  kv: KVNamespace,
): Promise<string> {
  const state = crypto.randomUUID();
  const origin = new URL(requestUrl).origin;
  const redirectTo = `${origin}/campfire/oauth/callback?state=${state}`;

  // Store state → userId mapping temporarily
  await kv.put(`${OAUTH_STATE_PREFIX}${state}`, String(userId), {
    expirationTtl: STATE_TTL_SECONDS,
  });

  const result = await DataBase.getInstance().SignIn(redirectTo);
  if (result.error) {
    throw new Error(`OAuth error: ${result.error.message}`);
  }
  return result.data.url;
}

export async function handleOAuthCallback(
  request: Request,
  kv: KVNamespace,
): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  if (!code || !state) {
    return new Response("Missing code or state parameter.", { status: 400 });
  }

  // Look up userId from state mapping
  const userIdStr = await kv.get(`${OAUTH_STATE_PREFIX}${state}`);
  if (!userIdStr) {
    return new Response(
      "Login session expired. Please send <strong>login</strong> in Campfire to try again.",
      { status: 400, headers: { "Content-Type": "text/html" } },
    );
  }

  // Clean up state mapping
  await kv.delete(`${OAUTH_STATE_PREFIX}${state}`);

  const userId = parseInt(userIdStr, 10);
  const result = await DataBase.getInstance().ExchangeCode(code);

  if (result.error) {
    return new Response(
      `Login failed: ${result.error.message}`,
      { status: 400, headers: { "Content-Type": "text/html" } },
    );
  }

  await saveSession(kv, userId, {
    session: result.data.session,
    user: result.data.user,
  });

  return new Response(
    `<!DOCTYPE html><html><head><title>Login Successful</title>` +
    `<meta name="viewport" content="width=device-width, initial-scale=1">` +
    `<style>body{font-family:system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#f5f5f5}` +
    `.card{background:#fff;padding:2rem;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,.1);text-align:center}` +
    `h1{color:#333}strong{color:#111}</style></head>` +
    `<body><div class="card"><h1>Login Successful</h1>` +
    `<p>You are logged in as <strong>${result.data.user.email}</strong>.</p>` +
    `<p>You can close this window and return to Campfire.</p></div></body></html>`,
    { headers: { "Content-Type": "text/html; charset=utf-8" } },
  );
}
