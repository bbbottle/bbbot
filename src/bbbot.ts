import { Composer, Telegraf, SessionStore } from "telegraf";

import {
  Login,
  AdminRequired,
  LoginTips,
  SessionRestore,
  createSessionMiddleware,
} from "./middlewares";
import { MsgHelper } from "./utils/MsgHelper";
import { Commands } from "./commands";
import { FmtString } from "telegraf/format";
import { BBContext } from "./context";
import { stage } from "./stage";
import { CreateTextPost } from "./middlewares/post";
import { BBSession } from "./middlewares";
import { requireEnv } from "./runtime";

interface InitOptions {
  sessionStore?: SessionStore<BBSession>;
  notifyOnStart?: boolean;
}

class BBBot {
  bot: Telegraf<BBContext>;
  private initialized = false;

  private static instance: BBBot;

  constructor() {
    this.bot = new Telegraf<BBContext>(requireEnv("BOT_TOKEN"));
  }

  static GetInstance() {
    if (!BBBot.instance) {
      BBBot.instance = new BBBot();
    }

    return BBBot.instance;
  }

  public config() {
    if ((globalThis as any)?.process) {
      process.once("SIGINT", () => Bot.Stop("SIGINT"));
      process.once("SIGTERM", () => Bot.Stop("SIGTERM"));
    }
  }

  public init(options: InitOptions = {}) {
    if (this.initialized) {
      return;
    }

    this.bot.use(createSessionMiddleware(options.sessionStore), SessionRestore);

    this.bot.start(Login);

    this.InitCommands();

    this.bot.use(CreateTextPost);

    if (options.notifyOnStart !== false) {
      this.TellAdmin(MsgHelper.GetInitSuccessMessage());
    }

    this.initialized = true;
  }

  public launchPolling() {
    this.init();
    return this.bot.launch();
  }

  public handleUpdate(update: unknown) {
    return this.bot.handleUpdate(update as any);
  }

  private InitCommands() {
    this.bot.use(stage.middleware());
    Commands.forEach((c) => {
      const handler = c.needAdmin
        ? Composer.branch(AdminRequired, c.handler, LoginTips)
        : c.handler;

      this.bot.command(c.command, handler);
    });
  }

  private TellAdmin(msg: FmtString<string>) {
    console.log(msg.text);
    this.bot.telegram
      .sendMessage(requireEnv("ADMIN_ID"), msg)
      .then(this.Noop)
      .catch(console.error);
  }

  public SendMsgToAdmin(msg: string) {
    this.bot.telegram
      .sendMessage(requireEnv("ADMIN_ID"), msg)
      .then(this.Noop)
      .catch(console.error);
  }

  private Noop() {}

  private Stop(sigint: string) {
    this.bot.stop(sigint);
  }
}

export const Bot = BBBot.GetInstance();
