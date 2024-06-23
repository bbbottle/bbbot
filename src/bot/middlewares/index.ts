import { CreatePost } from "./post";
import {MiddlewareFn} from "telegraf";
import {NonemptyReadonlyArray} from "telegraf/typings/core/helpers/util";
import {BBContext} from "../context";

export const MsgMiddleware = [
  CreatePost,
] as NonemptyReadonlyArray<MiddlewareFn<BBContext>>

export * from "./login";
