import * as Dotenv from "dotenv";
Dotenv.config({ path: `.${process.env.NODE_ENV}.env` });

import {Network} from "./utils/Network";
Network.config();

import { Bot } from "./bbbot";
Bot.config();

