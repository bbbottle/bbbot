import {Composer, Markup, Scenes} from 'telegraf';
import {SearchEngine} from "../../utils/SearchEngine";
import {BBContext} from "../../context";
import {AdminRequired} from "../../middlewares";
import {DataBase} from "../../utils/DataBase";

export const UpdateMovieListSceneId= 'update_move_list_of_now_page';

export interface updateMovieSession extends Scenes.WizardSessionData {
  movieName: string;
  movieUrl: string;
}

export type updateMovieContext = Scenes.WizardContext<updateMovieSession>;

const confirmStepHandler = new Composer<BBContext>();

confirmStepHandler.command("cancel", async ctx => {
  await ctx.reply("bye.");
  return ctx.scene.leave();
});

confirmStepHandler.command("publish", Composer.optional(AdminRequired, async ctx => {

  try {
    const res = await DataBase.getInstance().UpdateMovieList(
      ctx.scene.session.movieName, ctx.scene.session.movieUrl
    );

    if (res.error) {
      await ctx.reply("failed.");
      await ctx.reply(res.error.message);
      return ctx.scene.leave();
    }

  } catch (e) {
    await ctx.reply(e.message);
    await ctx.reply("failed.");
    return ctx.scene.leave();
  }

  await ctx.reply("https://bbki.ng/now updated.");
  return ctx.scene.leave();
}), async (ctx) => {
  await ctx.reply(`/login first.`);
  return ctx.scene.leave();
});

export const UpdateMovieListScene = new Scenes.WizardScene<updateMovieContext>(
  UpdateMovieListSceneId,
  async (ctx) => {
    await ctx.reply('Enter movie name.');
    ctx.scene.session.movieName = '';

    ctx.wizard.next();
  },
  async (ctx) => {
    if(!ctx.message) {
      await ctx.reply('message error');
      return ctx.scene.leave();
    }

    if (!("text" in ctx?.message)) {
      await ctx.reply('message error');
      return ctx.scene.leave();
    }

    ctx.scene.session.movieName = ctx.message.text;

    try {
      const res = await ctx.reply('searching...');
      let result = await SearchEngine.searchMovie(ctx.message.text);
      ctx.scene.session.movieUrl = result;
      await ctx.reply(result);
      ctx.wizard.next();
      await ctx.reply("/publish or /cancel?")
      await ctx.telegram.deleteMessage(ctx.chat?.id as number, res.message_id);
    } catch (e) {
      await ctx.reply(e.message);
      await ctx.reply('search engine error');
      return ctx.scene.leave();
    }
  },
  confirmStepHandler,
);
