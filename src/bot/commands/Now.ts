import {BBCmd} from "./types";
import {UpdateMovieListSceneId} from "../stage/updateMovieScene";

export class Now implements BBCmd {
  command: string;
  description: string;

  constructor() {
    this.command = "now";
    this.description = "Update the page content of https://bbki.ng/now";

  }

  async handler(ctx) {
    ctx.scene.enter(UpdateMovieListSceneId);
  }
}
