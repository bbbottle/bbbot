import { Context } from 'telegraf'
import { Session, User } from "@supabase/supabase-js";

export interface BBContext extends Context {
  Session: Session
  User: User
  payload: string
}
