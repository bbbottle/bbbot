import {BBCmd} from "./types";
import {DataBase} from "../utils/DataBase";
import {Context, Middleware} from "telegraf";
import * as tt from "telegraf/src/telegram-types";
import {MsgHelper} from "../utils/MsgHelper";
import {MsgConst} from "../consts/MsgConst";

export class LoginCommand implements BBCmd {
  command: string;
  description: string;
  constructor() {
    this.command = "login";
    this.description = "Login to https://bbki.ng";
  }

  handler: Middleware<Context & tt.CommandContextExtn> = (ctx) => {
    DataBase.getInstance()
      .SignIn()
      .then((res) => {
        if (res.error) {
          console.error(res.error);
          return;
        }

        return ctx.reply(MsgConst.LoginMethods, MsgHelper.UrlBtn("Github", res.data.url));
      }).catch(console.error);
  };
}
