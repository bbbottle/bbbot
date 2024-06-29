import {Composer, Context, Middleware, MiddlewareFn, session, Telegraf} from "telegraf";

import {Login, TextMsgMiddleware, SessionMiddleware, SessionRestore} from "./middlewares";
import {MsgHelper} from "./utils/MsgHelper";
import {Commands} from "./commands";
import {FmtString} from "telegraf/format";
import {BBContext} from "./context";


class BBBot {
  bot: Telegraf<BBContext>;

  private static instance: BBBot;

  constructor() {
    this.bot = new Telegraf<BBContext>(process.env.BOT_TOKEN as string);
    this.Init().then(this.Noop);
  }

  static GetInstance() {
    if (!BBBot.instance) {
      BBBot.instance = new BBBot();
    }

    return BBBot.instance;
  }

  public config() {
    process.once('SIGINT', () => Bot.Stop('SIGINT'));
    process.once('SIGTERM', () => Bot.Stop('SIGTERM'))
  }

  private Init() {
    this.bot.use(
      SessionMiddleware as Middleware<BBContext>,
      SessionRestore as Middleware<BBContext>,
    );

    this.bot.start(Login);

    Commands.forEach(c => {
      this.bot.command(c.command, c.handler);
    });

    const notText= (ctx: BBContext) => !(ctx.message && "text" in ctx.message);

    this.bot.use(Composer.drop(notText), ...TextMsgMiddleware);

    this.bot.hears("hi", (ctx) => ctx.reply("Hey there!"));

    this.TellAdmin(MsgHelper.GetInitSuccessMessage());

    return this.bot.launch();
  }

  private TellAdmin(msg: FmtString<string>) {
    console.log(msg.text);
    this.bot.telegram.sendMessage(process.env.ADMIN_ID as string, msg).then(this.Noop).catch(console.error);
  }

  private Noop() {}

  private  Stop(sigint: string) {
    this.bot.stop(sigint);
  }
}

export const Bot= BBBot.GetInstance();
