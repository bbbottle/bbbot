import {Context, Middleware} from "telegraf";
import {Message} from "@telegraf/types/message";
import TextMessage = Message.TextMessage;

export const CreatePost:Middleware<Context> = async (ctx, next) => {
  if (ctx.chat === undefined) {
    return next();
  }

  if (ctx.chat.id !== parseInt(process.env.ADMIN_ID as string)) {
    return next();
  }

  const message = ctx.message as TextMessage;
  if (!message.text) {
    return next();
  }

  // TODO: create post
  return ctx.reply("TODO: create post")
}
