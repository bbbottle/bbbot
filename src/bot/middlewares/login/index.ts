import {DataBase} from "../../utils/DataBase";
import {BBContext} from "../../context";
import {Middleware} from "telegraf";

export const Login: Middleware<BBContext> = async(ctx) => {
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
        db.SetSess(data.session);

        ctx.Session = data.session;
        ctx.User = data.user;

        ctx.reply("Hi, " + data.user.email);
      })
      .catch((e) => {
        console.error(e.message);
        ctx.reply("Hi.")
      })
}
