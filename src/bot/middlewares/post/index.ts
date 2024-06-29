import {Composer, Middleware} from "telegraf";
import {BBContext} from "../../context";
import {DataBase} from "../../utils/DataBase";
import {AdminRequired} from "../login";

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
  if (lines.length < 2) {
    return next();
  }


  const title = lines[0];
  const body = lines.slice(1).join("\n");

  const res = await DataBase.getInstance().CreatePost(title, body);
  console.log(res);
  if (res.error) {
    return ctx.reply(res.error.message);
  }

  return ctx.reply("Post is ready: https://bbki.ng/blog/" + title)
}

export const CreatePost = Composer.optional(AdminRequired, Post)
