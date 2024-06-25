import {BotCommand} from "@telegraf/types";
import {Middleware} from "telegraf";
import * as tt from "telegraf/src/telegram-types";
import {BBContext} from "../context";


export interface BBCmd extends BotCommand {
  handler: Middleware<BBContext & tt.CommandContextExtn>
}
