import {Composer, Middleware} from "telegraf";
import {BBContext} from "../../context";
import {AdminRequired} from "../login";
import {MsgConst} from "../../consts/MsgConst";
import { createPost } from "../../utils/api";

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

  try {
    const res = await createPost(title, body);
    console.log(res);
  } catch (error) {
    return ctx.reply(error instanceof Error ? error.message : String(error));
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

const notText= (ctx: BBContext) => !(ctx.message && "text" in ctx.message);

export const CreateTextPost = Composer.compose([Composer.drop(notText), CreatePost]);
