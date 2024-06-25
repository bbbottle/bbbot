import { CreatePost } from "./post";
import {Context, MiddlewareFn} from "telegraf";
import {NonemptyReadonlyArray} from "telegraf/typings/core/helpers/util";

export const MsgMiddleware = [
  CreatePost,
] as NonemptyReadonlyArray<MiddlewareFn<Context>>

export * from "./login";

export * from "./session"
