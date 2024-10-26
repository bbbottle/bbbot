import {createClient, Session, SupabaseClient, User} from "@supabase/supabase-js";
import * as process from "process";
import {MsgHelper} from "./MsgHelper";

enum OauthProvider {
  GITHUB = "github",
  Twitter = "twitter",
  Spotify = "spotify",
}

export class DataBase {
  private static instance: DataBase;
  private supabase: SupabaseClient;

  private constructor() {
    // init

    const sbUrl = process.env.SUPABASE_URL as string;
    const sbAnno = process.env.SUPABASE_ANNO_KEY as string;

    this.supabase = createClient(sbUrl, sbAnno, {
      auth: {
        flowType: "pkce"
      }
    });
  }

  public async SignIn() {
    const client = this.supabase.auth;

    // @ts-ignore
    return await client.signInWithOAuth({
      provider: OauthProvider.GITHUB,
      options: {
        redirectTo: process.env.SITE_URL as string,
      }
    })
  }

  public SetSess(s: Session | undefined) {
    if (!s) {
      return;
    }
    return this.supabase.auth.setSession({
      access_token: s.access_token,
      refresh_token: s.refresh_token
    });
  }

  public async CreatePost(title: string, body: string) {
    return this.supabase.from("post").upsert({
      title: title,
      content: MsgHelper.Md2Html(body),
    });
  }

  public async UpdateMovieList(name: string, link: string) {
    return this.supabase.from("movie").upsert({
      name,
      link,
      visible: 1,
    });
  }

  public async ExchangeCode(code: string) {
    return await this.supabase.auth.exchangeCodeForSession(code);
  }

  public static getInstance() {
    if (!DataBase.instance) {
      DataBase.instance = new DataBase();
    }
    return DataBase.instance;
  }
}
