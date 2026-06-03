import { HandlerFn } from "./types";
import * as handlers from "./handlers";
import { isCocQuery, cocMaster } from "./coc-master";

export { isCocQuery };

const COMMANDS: Record<string, HandlerFn> = {
  help:    handlers.help,
  avatar:  handlers.avatar,
  version: handlers.version,
};

export async function routeMessage(payload: import("./types").CampfireMessage): Promise<string> {
  const plain = payload.message.body.plain.trim();
  const lower = plain.toLowerCase();

  if (COMMANDS[lower]) {
    return COMMANDS[lower](payload);
  }

  if (isCocQuery(plain)) {
    return cocMaster(payload);
  }

  return handlers.content(payload);
}
