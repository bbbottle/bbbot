import {BotCommand} from "@telegraf/types";
import {BBContext} from "../context";
import {Middleware} from "telegraf";

export interface BBCmd extends BotCommand {
  handler: Middleware<BBContext>
}
