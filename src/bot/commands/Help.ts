import {BBCmd, CmdContext} from "./types";
import {MsgHelper} from "../utils/MsgHelper";

export class Help implements BBCmd {
  command: string;
  description: string;
  constructor() {
    this.command = "help";
    this.description = "Get all commands name and description";
  }

  handler = (ctx: CmdContext) => {
    return ctx.reply(MsgHelper.GetCommandsDescription());
  };
}
