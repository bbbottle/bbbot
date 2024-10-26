import {UpdateMovieListScene} from "./updateMovieScene";
import {Scenes} from "telegraf";
import {BBContext} from "../context";

export const stage = new Scenes.Stage<BBContext>([UpdateMovieListScene]);
