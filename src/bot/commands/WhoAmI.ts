import {BBCmd} from "./types";
import {Middleware} from "telegraf";
import {BBContext} from "../context";

export class WhoAmI implements BBCmd {
  command: string;
  description: string;

  constructor() {
    this.command = "whoami";
    this.description = "Show your email address.";
  }

  handler: Middleware<BBContext> = async (ctx, next) => {
    if (!ctx.User?.email) {
      return ctx.reply("You are not logged in.")
    }

    return ctx.reply(ctx.User.email);
  }
}
