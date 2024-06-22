import {Telegraf} from "telegraf";
import * as dotenv from "dotenv";
import {FmtString} from "telegraf/format";
import {content as manual} from "./manual";

// @ts-ignore
import pkgJson from "../../package.json";

dotenv.config();

class BBBot {
  bot: Telegraf;

  private static instance: BBBot;

  constructor() {
    this.bot = new Telegraf(process.env.BOT_TOKEN as string);
    this.Init().then(this.Noop);
  }

  private Init() {
    this.bot.start((ctx) => ctx.reply('Welcome'));

    this.bot.help((ctx) => ctx.reply(manual));

    this.bot.hears('纸巾盒', (ctx) => ctx.reply('小乌鸦'));

    this.TellAdmin(this.InitSuccessMessage());

    return this.Launch();
  }

  private InitSuccessMessage() {
    const originMessage = `Bot ${pkgJson.version} Initialized.`
    return new FmtString(originMessage, [{
      type: 'bold',
      offset: 4,
      length: pkgJson.version.length,
    }]);
  }

  private TellAdmin(msg: FmtString<string>) {
    this.bot.telegram.sendMessage(process.env.ADMIN_ID as string, msg).then(this.Noop).catch(console.error);
  }

  private Noop() {}

  private Launch() {
    return this.bot.launch();
  }

  static GetInstance() {
    if (!BBBot.instance) {
      BBBot.instance = new BBBot();
    }

    return BBBot.instance;
  }

  Stop(sigint: string) {
    this.bot.stop(sigint);
  }
}

export const Bot= BBBot.GetInstance();
