import {Telegraf} from "telegraf";
import {message} from "telegraf/filters";
import * as dotenv from "dotenv";

import { MsgMidWareList } from "./midware";
import {FmtString} from "telegraf/format";
import {MsgHelper} from "./utils/MsgHelper";

dotenv.config();

class BBBot {
  bot: Telegraf;

  private static instance: BBBot;

  constructor() {
    this.bot = new Telegraf(process.env.BOT_TOKEN as string);
    this.Init().then(this.Noop);
  }

  private Init() {
    this.bot.on(message(), ...MsgMidWareList);

    this.TellAdmin(MsgHelper.GetInitSuccessMessage());

    return this.bot.launch();
  }

  private TellAdmin(msg: FmtString<string>) {
    this.bot.telegram.sendMessage(process.env.ADMIN_ID as string, msg).then(this.Noop).catch(console.error);
  }

  private Noop() {}

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
