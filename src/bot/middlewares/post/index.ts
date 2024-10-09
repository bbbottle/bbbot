import {Composer, Middleware} from "telegraf";
import {BBContext} from "../../context";
import {DataBase} from "../../utils/DataBase";
import {AdminRequired} from "../login";
import {MsgConst} from "../../consts/MsgConst";

const Post:Middleware<BBContext> = async (ctx, next) => {
  if(!ctx.message) {
    return next();
  }

  if (!("text" in ctx.message)) {
    return next();
  }

  if (!ctx.session.SupabaseSession) {
    return ctx.reply(MsgConst.LoginTips);
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

  // delete incoming message
  try {
    await ctx.telegram.deleteMessage(ctx.chat?.id as number, ctx.message.message_id);
  } catch {
    await ctx.reply(MsgConst.DeleteMsgFailed);
  }

  return ctx.reply(MsgConst.PostLinkPrefix + title)
}

export const CreatePost = Composer.optional(AdminRequired, Post)
