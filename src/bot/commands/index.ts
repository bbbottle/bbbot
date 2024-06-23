import {LoginCommand} from "./LoginCommand";
import {BBCmd} from "./types";
import {WhoAmI} from "./WhoAmI";

export const Commands = [
  new LoginCommand(),
  new WhoAmI(),
] as BBCmd[]
