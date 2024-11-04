import {BBCmd, CmdContext} from "./types";
import {UpdateMovieListSceneId} from "../stage/updateMovieScene";

export class Now implements BBCmd {
  command: string = "now";
  description: string = "Update the page content of https://bbki.ng/now";
  needAdmin = true;

  async handler(ctx: CmdContext) {
    return ctx.scene.enter(UpdateMovieListSceneId);
  }
}
