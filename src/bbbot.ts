import {Composer, Context, Middleware, MiddlewareFn, session, Telegraf} from "telegraf";

import {Login, AdminRequired, LoginTips, PSessionMiddleware, SessionRestore} from "./middlewares";
import {MsgHelper} from "./utils/MsgHelper";
import {Commands} from "./commands";
import {FmtString} from "telegraf/format";
import {BBContext} from "./context";
import {stage} from "./stage";
import {CreatePost, CreateTextPost} from "./middlewares/post";


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
    this.bot.use(PSessionMiddleware, SessionRestore);

    this.bot.start(Login);

    this.InitCommands();

    this.bot.use(CreateTextPost);

    this.TellAdmin(MsgHelper.GetInitSuccessMessage());

    return this.bot.launch();
  }

  private InitCommands() {
    this.bot.use(stage.middleware());
    Commands.forEach(c => {
      const handler = c.needAdmin
        ? Composer.branch(AdminRequired, c.handler, LoginTips)
        : c.handler;

      this.bot.command(c.command, handler);
    });
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
