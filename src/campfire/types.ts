import type { Session, User } from "@supabase/supabase-js";

export interface CampfireMessage {
  room: { id: number; name: string };
  user: { id: number; name: string };
  message: {
    id: number;
    body: { html: string; plain: string };
  };
}

export interface CampfireSession {
  session: Session;
  user: User;
}

export type HandlerFn = (
  payload: CampfireMessage,
  kv: import("../runtime").KVNamespace,
  request: Request,
) => Promise<string>;
