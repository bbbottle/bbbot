import { Bot } from "./bot/bbbot";


// Enable graceful stop
process.once('SIGINT', () => Bot.Stop('SIGINT'));
process.once('SIGTERM', () => Bot.Stop('SIGTERM'))
