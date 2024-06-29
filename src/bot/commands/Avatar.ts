import {BBCmd, CmdContext} from "./types";

export class Avatar implements BBCmd {
  command: string;
  description: string;
  constructor() {
    this.command = "avatar";
    this.description = "Get the avatar of bbki.ng";
  }

  handler = (ctx: CmdContext) => {
    return ctx.replyWithPhoto("https://bbki.ng/pwa-512x512.png");
  };
}
