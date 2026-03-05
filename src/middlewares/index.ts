import { CreatePost } from "./post";
import { CreateStream } from "./stream";
import {Middleware} from "telegraf";
import {BBContext} from "../context";

type NonemptyReadonlyArray<T> = ReadonlyArray<T> & { 0: T };

export const TextMsgMiddleware = [
  CreateStream,
  CreatePost,
] as NonemptyReadonlyArray<Middleware<BBContext>>

export * from "./login";

export * from "./session"
