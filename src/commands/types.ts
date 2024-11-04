import {BotCommand} from "@telegraf/types";
import {Middleware} from "telegraf";
import * as tt from "telegraf/src/telegram-types";
import {BBContext} from "../context";

export type CmdContext = tt.CommandContextExtn & BBContext;

export interface BBCmd extends BotCommand {
  handler: Middleware<CmdContext>
  needAdmin?: boolean
}
