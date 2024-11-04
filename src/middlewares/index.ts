import { CreatePost } from "./post";
import {Middleware} from "telegraf";
import {NonemptyReadonlyArray} from "telegraf/typings/core/helpers/util";
import {BBContext} from "../context";

export const TextMsgMiddleware = [
  CreatePost,
] as NonemptyReadonlyArray<Middleware<BBContext>>

export * from "./login";

export * from "./session"
