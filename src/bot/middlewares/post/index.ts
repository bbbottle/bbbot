import {Context, Middleware} from "telegraf";

export const CreatePost:Middleware<Context> = async (ctx, next) => {
  // TODO: create post
  return ctx.reply("TODO: create post")
}
