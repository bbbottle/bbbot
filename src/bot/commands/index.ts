import {LoginCommand} from "./LoginCommand";
import {BBCmd} from "./types";
import {WhoAmI} from "./WhoAmI";
import {Logout} from "./Logout";
import {Avatar} from "./Avatar";

export const Commands = [
  new LoginCommand(),
  new Logout(),
  new WhoAmI(),
  new Avatar(),
] as BBCmd[]
