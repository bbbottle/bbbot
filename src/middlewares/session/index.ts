import {Composer, Scenes, session, SessionStore} from "telegraf";
import { Postgres } from "@telegraf/session/pg";
import {Session, User } from "@supabase/supabase-js";
import {HasLogin} from "../login";
import {DataBase} from "../../utils/DataBase";
import {updateMovieSession} from "../../stage/updateMovieScene";
import {BBContext} from "../../context";

export interface BBSession extends Scenes.WizardSession<updateMovieSession> {
  SupabaseSession?: Session,
  SupabaseUser?: User,
}

const store = Postgres<BBSession>({
  host: process.env.PSQL_HOST as string,
  database: process.env.PSQL_DB as string,
  user: process.env.PSQL_USER as string,
  password: process.env.PSQL_PASS as string,
  config: {
    ssl: true
  }
});

export const PSessionMiddleware = session<BBSession, BBContext, "session">({
  store: store as SessionStore<BBSession>,
});

export const SessionMiddleware = session();

export const SessionRestore = Composer.optional(HasLogin, async (ctx, next) => {
  await DataBase.getInstance().SetSess(ctx.session.SupabaseSession)
  return next();
})
