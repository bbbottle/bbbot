import { CreatePost } from "./post";
import {Context, Middleware} from "telegraf";
import {NonemptyReadonlyArray} from "telegraf/typings/core/helpers/util";

export const MsgMiddleware = [
  CreatePost,
] as NonemptyReadonlyArray<Middleware<Context>>
