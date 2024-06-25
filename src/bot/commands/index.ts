import {LoginCommand} from "./LoginCommand";
import {BBCmd} from "./types";
import {WhoAmI} from "./WhoAmI";
import {Logout} from "./Logout";

export const Commands = [
  new LoginCommand(),
  new Logout(),
  new WhoAmI(),
] as BBCmd[]
