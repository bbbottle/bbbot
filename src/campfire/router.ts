import { HandlerFn, MatchFn } from "./types";
import * as handlers from "./handlers";
import { cocMaster } from "./coc-master";

export { isCocQuery } from "./coc-master";

interface CommandEntry {
  handler: HandlerFn;
  match: MatchFn;
}

const ROOM_SIX: MatchFn = (payload) => payload.room.id === 6;

const COMMANDS: Record<string, CommandEntry> = {
  help:    { handler: handlers.help,    match: ROOM_SIX },
  avatar:  { handler: handlers.avatar,  match: ROOM_SIX },
  version: { handler: handlers.version, match: ROOM_SIX },
};

export async function routeMessage(payload: import("./types").CampfireMessage): Promise<string> {
  const plain = payload.message.body.plain.trim();
  const lower = plain.toLowerCase();

  const entry = COMMANDS[lower];
  if (entry && entry.match(payload)) {
    return entry.handler(payload);
  }

  if (payload.room.id === 6) {
    return handlers.content(payload);
  }

  return cocMaster(payload);
}
