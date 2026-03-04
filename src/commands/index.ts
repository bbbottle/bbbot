import {LoginCommand} from "./LoginCommand";
import {BBCmd} from "./types";
import {WhoAmI} from "./WhoAmI";
import {Logout} from "./Logout";
import {Avatar} from "./Avatar";
import {Help} from "./Help";

export const Commands = [
  new LoginCommand(),
  new Logout(),
  new WhoAmI(),
  new Avatar(),
  new Help(),
] as BBCmd[]
