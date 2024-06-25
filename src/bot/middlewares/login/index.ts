import {DataBase} from "../../utils/DataBase";
import {Context, Middleware} from "telegraf";
import * as tt from "telegraf/src/telegram-types";

interface StartContextExtn extends tt.CommandContextExtn {
  payload: string
}

export const Login: Middleware<StartContextExtn & Context> = async(ctx) => {
    if (ctx.payload == "") {
      return ctx.reply("Welcome.")
    }

    const db = DataBase.getInstance();

    db
      .ExchangeCode(ctx.payload)
      .then((res) => {
        if (res.error) {
          console.error(res.error)
          ctx.reply("Hi.")
          return;
        }

        const data = res.data;

        ctx.reply("Hi, " + data.user.email);
      })
      .catch((e) => {
        console.error(e.message);
        ctx.reply("Hi.")
      })
}
