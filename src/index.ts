import * as Dotenv from "dotenv";
Dotenv.config({ path: `.${process.env.NODE_ENV}.env` });

import {Network} from "./bot/utils/Network";
Network.config();

import { Bot } from "./bot/bbbot";
Bot.config();

