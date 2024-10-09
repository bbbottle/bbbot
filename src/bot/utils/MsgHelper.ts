import {FmtString} from "telegraf/format";

// @ts-ignore
import pkgJson from "../../../package.json";

import showdown from "showdown";
import {Markup} from "telegraf";
import {Commands} from "../commands";
showdown.setFlavor('github');
const converter = new showdown.Converter();

export class MsgHelper {
  public static GetInitSuccessMessage(format?: boolean) {
    const originMessage = `Bot ${pkgJson.version} Initialized.`

    const entities= [{
      type: 'bold',
      offset: 4,
      length: pkgJson.version.length,
    }];

    // @ts-ignore
    return new FmtString(originMessage, entities);
  }

  public static Md2Html(msg: string) {
    return converter.makeHtml(msg);
  }

  public static UrlBtn(text: string ,url: string) {
    return Markup.inlineKeyboard([
      Markup.button.url(text, url)
    ])
  }

  public static GetCommandsDescription() {
    return Commands.map(c => `/${c.command} - ${c.description}`).join("\n");
  }
}
