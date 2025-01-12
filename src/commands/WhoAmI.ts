import {BBCmd} from "./types";
import {Middleware} from "telegraf";
import {BBContext} from "../context";
import {DataBase} from "../utils/DataBase";

export class WhoAmI implements BBCmd {
  command: string;
  description: string;

  constructor() {
    this.command = "whoami";
    this.description = "Get user's email.";
  }

  handler: Middleware<BBContext> = async (ctx, next) => {
    if (!ctx.session.SupabaseUser) {
      return ctx.reply("You are not logged in.")
    }

    try {
      const res = await DataBase.getInstance().UpdateCOCStats();
      return ctx.reply(`Updated COC stats. ${res}`);
    } catch (e) {
      return ctx.reply(`Failed to update COC stats. ${e}`);
    }

    return ctx.reply(
      ctx.session.SupabaseUser?.email ??
      ctx.session.SupabaseUser?.id ??
      "Unknown email address."
    );
  }
}
