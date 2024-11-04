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
          ctx.reply("Login Failed. " + res.error)
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
        return ctx.reply("Login Failed. " + e.message);
      })
}
const Anonymous: (t: BBContext) => boolean = ctx => !ctx.session?.SupabaseSession || !ctx.session?.SupabaseUser;

export const HasLogin: (t: BBContext) => boolean = ctx => !Anonymous(ctx);

export const AdminRequired: (t: BBContext) => boolean = ctx => {
  if (Anonymous(ctx)) {
    return false;
  }

  console.log(ctx.session.SupabaseUser.email, process.env.ADMIN_EMAIL)

  return !!(ctx.session.SupabaseUser && ctx.session.SupabaseUser.email === process.env.ADMIN_EMAIL as string);
}

