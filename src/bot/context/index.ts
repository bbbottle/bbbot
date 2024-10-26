import {type Context, Scenes} from "telegraf";
import type { Update } from "telegraf/types";
import {BBSession} from "../middlewares";
import {updateMovieSession} from "../stage/updateMovieScene";

export interface BBContext<U extends Update = Update> extends Context<U> {
  session: BBSession,
  wizard: Scenes.WizardContextWizard<BBContext>;
  scene: Scenes.SceneContextScene<BBContext, updateMovieSession>;
};
