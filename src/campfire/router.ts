import { CampfireMessage, HandlerFn } from "./types";
import { KVNamespace } from "../runtime";
import { restoreSession } from "./session";
import * as handlers from "./handlers";

const COMMANDS: Record<string, HandlerFn> = {
  login:   handlers.login,
  logout:  handlers.logout,
  whoami:  handlers.whoami,
  help:    handlers.help,
  avatar:  handlers.avatar,
  version: handlers.version,
};

export async function routeMessage(
  payload: CampfireMessage,
  kv: KVNamespace,
  request: Request,
): Promise<string> {
  const text = payload.message.body.plain.trim();
  const lower = text.toLowerCase();

  // Restore Supabase session if exists
  await restoreSession(kv, payload.user.id);

  // Check for explicit commands (case-insensitive keyword match)
  if (COMMANDS[lower]) {
    return COMMANDS[lower](payload, kv, request);
  }

  // Route by content structure
  return handlers.content(payload, kv, request);
}
