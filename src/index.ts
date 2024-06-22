import { Bot } from "./bbbot";


// Enable graceful stop
process.once('SIGINT', () => Bot.Stop('SIGINT'));
process.once('SIGTERM', () => Bot.Stop('SIGTERM'))
