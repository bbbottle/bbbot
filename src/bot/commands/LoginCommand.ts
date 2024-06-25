import {BBCmd} from "./types";
import {DataBase} from "../utils/DataBase";
import {Context, Middleware} from "telegraf";
import * as tt from "telegraf/src/telegram-types";

export class LoginCommand implements BBCmd {
  command: string;
  description: string;
  constructor() {
    this.command = "login";
    this.description = "login https://bbki.ng with GitHub OAuth App";
  }

  handler: Middleware<Context & tt.CommandContextExtn> = (ctx) => {
    DataBase.getInstance()
      .SignIn()
      .then((res) => {
        if (res.error) {
          console.error(res.error);
          return;
        }

        return ctx.reply(res.data.url);
      }).catch(console.error);
  };
}
