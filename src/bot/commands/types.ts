import {BotCommand} from "@telegraf/types";
import {Context, Middleware} from "telegraf";
import * as tt from "telegraf/src/telegram-types";


export interface BBCmd extends BotCommand {
  handler: Middleware<Context & tt.CommandContextExtn>
}
