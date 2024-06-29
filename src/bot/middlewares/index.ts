import { CreatePost } from "./post";
import {Middleware} from "telegraf";
import {NonemptyReadonlyArray} from "telegraf/typings/core/helpers/util";
import {BBContext} from "../context";

export const SayHi: Middleware<BBContext> = async (ctx) => {
  return ctx.reply("Hi.")
}

export const TextMsgMiddleware = [
  CreatePost,
  SayHi
] as NonemptyReadonlyArray<Middleware<BBContext>>

export * from "./login";

export * from "./session"
