import { Composer, Scenes, session, SessionStore } from "telegraf";
import { Session, User } from "@supabase/supabase-js";
import {HasLogin} from "../login";
import {DataBase} from "../../utils/DataBase";
import {updateMovieSession} from "../../stage/updateMovieScene";
import {BBContext} from "../../context";
import { KVNamespace } from "../../runtime";

export interface BBSession extends Scenes.WizardSession<updateMovieSession> {
  SupabaseSession?: Session,
  SupabaseUser?: User,
}

export const createKvSessionStore = (
  kv: KVNamespace,
  ttlSeconds = 60 * 60 * 24 * 30,
): SessionStore<BBSession> => ({
  async get(key) {
    const value = await kv.get(key);
    return value ? (JSON.parse(value) as BBSession) : undefined;
  },
  async set(key, value) {
    await kv.put(key, JSON.stringify(value), { expirationTtl: ttlSeconds });
  },
  async delete(key) {
    await kv.delete(key);
  },
});

export const createSessionMiddleware = (
  store?: SessionStore<BBSession>,
) => session<BBSession, BBContext, "session">({ store });

export const SessionRestore = Composer.optional(HasLogin, async (ctx, next) => {
  await DataBase.getInstance().SetSess(ctx.session.SupabaseSession)
  return next();
})
