import { HandlerFn } from "./types";
import * as handlers from "./handlers";

const COMMANDS: Record<string, HandlerFn> = {
  help:    handlers.help,
  avatar:  handlers.avatar,
  version: handlers.version,
};

export async function routeMessage(payload: import("./types").CampfireMessage): Promise<string> {
  const lower = payload.message.body.plain.trim().toLowerCase();

  if (COMMANDS[lower]) {
    return COMMANDS[lower](payload);
  }

  return handlers.content(payload);
}
