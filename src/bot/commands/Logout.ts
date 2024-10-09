import {BBCmd} from "./types";
import * as tt from "telegraf/src/telegram-types";
import {BBContext} from "../context";

export class Logout implements BBCmd {
  command: string;
  description: string;
  constructor() {
    this.command = "logout";
    this.description = "Logout from https://bbki.ng";
  }

  handler = async (ctx: BBContext & tt.CommandContextExtn) => {
    ctx.session.SupabaseSession = undefined;
    ctx.session.SupabaseUser = undefined;

    return ctx.reply("You are logged out.");
  };
}
