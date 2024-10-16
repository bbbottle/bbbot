import {Composer, session } from "telegraf";
import {Session, User } from "@supabase/supabase-js";
import {HasLogin} from "../login";
import {DataBase} from "../../utils/DataBase";

export interface BBSession {
  SupabaseSession?: Session,
  SupabaseUser?: User,
}

export const SessionMiddleware = session();

export const SessionRestore = Composer.optional(HasLogin, async (ctx, next) => {
  await DataBase.getInstance().SetSess(ctx.session.SupabaseSession)
  return next();
})
