import {Telegraf} from "telegraf";
import * as dotenv from "dotenv";

import {content as manual} from "./manual";

dotenv.config();

class BBBot {
  bot: Telegraf;

  private static instance: BBBot;

  constructor() {
    this.bot = new Telegraf(process.env.BOT_TOKEN as string);
    this.Init().then(() => {
      return this.bot.telegram.sendMessage(process.env.ADMIN_ID as string, 'Bot started');
    });
  }

  private Init() {
    this.bot.start((ctx) => ctx.reply('Welcome'));
    this.bot.help((ctx) => ctx.reply(manual));
    this.bot.hears('纸巾盒', (ctx) => ctx.reply('小乌鸦'));
    this.bot.command('/cid', (ctx) => ctx.reply(ctx.chat.id));
    return this.Launch();
  }

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
