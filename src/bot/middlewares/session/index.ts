import { Postgres } from "@telegraf/session/pg";
import {session, SessionStore} from "telegraf";
import {Session, User } from "@supabase/supabase-js";
import {BBContext} from "../../context";

export interface BBSession {
  SupabaseSession?: Session,
  SupabaseUser?: User,
}

const store = Postgres<BBSession>({
  host: process.env.PSQL_HOST as string,
  database: process.env.PSQL_DB as string,
  user: process.env.PSQL_USER as string,
  password: process.env.PSQL_PASS as string,
});

export const SessionMiddleware = session<BBSession, BBContext, "session">({
  store: store as SessionStore<BBSession>,
});

