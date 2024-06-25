import {type Context } from "telegraf";
import type { Update } from "telegraf/types";
import {BBSession} from "../middlewares";

export interface BBContext<U extends Update = Update> extends Context<U> {
  session: BBSession
};
