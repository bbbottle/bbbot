import { Composer, Middleware } from "telegraf";
import { BBContext } from "../../context";
import { createStreamReq } from "../../utils/api";
import { AdminRequired } from "../login";

const Stream: Middleware<BBContext> = async (ctx, next) => {
  // Do not handle notText message
  if (!ctx.message) {
    return next();
  }

  if (!("text" in ctx.message)) {
    return next();
  }

  // When text message only has one line, treat it as stream content
  const lines = ctx.message.text.split("\n");
  if (lines.length !== 1) {
    return next();
  }

  const content = lines[0].trim();
  if (!content) {
    return next();
  }

  const author = ctx.session.SupabaseUser?.email || "anonymous";

  try {
    const result = await createStreamReq(content);
    return ctx.reply(`Stream created: ${result.data.id}`);
  } catch (error) {
    console.error("Failed to create stream:", error);
    return ctx.reply(`Failed to create stream: ${error}`);
  }
};

export const CreateStream = Composer.optional(AdminRequired, Stream);

const notText = (ctx: BBContext) => !(ctx.message && "text" in ctx.message);

export const CreateTextStream = Composer.compose([
  Composer.drop(notText),
  CreateStream,
]);
