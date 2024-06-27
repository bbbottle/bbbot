import {Composer, Middleware} from "telegraf";
import {BBContext} from "../../context";
import {DataBase} from "../../utils/DataBase";
import {LoginRequired} from "../login";

const Post:Middleware<BBContext> = async (ctx, next) => {
  if(!ctx.message) {
    return next();
  }

  if (!("text" in ctx.message)) {
    return next();
  }

  if (!ctx.session.SupabaseSession) {
    return ctx.reply("You need to login to create a post");
  }

  const lines = ctx.message.text.split("\n");
  const title = lines[0];
  const body = lines.slice(1).join("\n");
  await ctx.reply("Creating post...")

  const res = await DataBase.getInstance().CreatePost(title, body);
  console.log(res);
  if (res.error) {
    return ctx.reply(res.error.message);
  }

  return ctx.reply("Post created successfully! https://bbki.ng/blog/" + title)
}

export const CreatePost = Composer.compose([LoginRequired, Post])
