import {BBCmd} from "./types";
import {BBContext} from "../context";
import {DataBase} from "../utils/DataBase";

export class LoginCommand implements BBCmd {
  command: string;
  description: string;
  constructor() {
    this.command = "login";
    this.description = "login https://bbki.ng with GitHub OAuth App";
  }

  handler = (ctx: BBContext) => {
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
