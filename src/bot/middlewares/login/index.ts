import {DataBase} from "../../utils/DataBase";
import {Composer, Middleware} from "telegraf";
import * as tt from "telegraf/src/telegram-types";
import {BBContext} from "../../context";

interface StartContextExtn extends tt.CommandContextExtn {
  payload: string
}

export const Login: Middleware<StartContextExtn & BBContext> = async(ctx) => {
    if (ctx.payload == "") {
      return ctx.reply("Welcome.")
    }

    const db = DataBase.getInstance();

    console.log("code", ctx.payload)

    return db
      .ExchangeCode(ctx.payload)
      .then((res) => {
        if (res.error) {
          console.error(res.error)
          ctx.reply("Hi.")
          return;
        }

        const data = res.data;

        ctx.session.SupabaseSession = data.session;
        ctx.session.SupabaseUser = data.user;

        DataBase.getInstance().SetSess(data.session);

        return ctx.reply("Hi, " + data.user.email);
      })
      .catch((e) => {
        console.error(e.message);
        return ctx.reply("Hi.")
      })
}
const Anonymous: (t: BBContext) => boolean = ctx => !ctx.session.SupabaseSession || !ctx.session.SupabaseUser;

export const LoginRequired = Composer.drop<BBContext>(Anonymous);

