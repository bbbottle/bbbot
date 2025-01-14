import {FmtString} from "telegraf/format";

// @ts-ignore
import pkgJson from "../../package.json";

// @ts-ignore
import showdown from "showdown";
import {Markup} from "telegraf";
import {Commands} from "../commands";
import {MessageEntity} from "@telegraf/types";
showdown.setFlavor('github');
const converter = new showdown.Converter();

export class MsgHelper {
  public static GetInitSuccessMessage(format?: boolean) {
    const originMessage = `Bot ${pkgJson.version} is ready.`

    const entities= [{
      type: 'bold',
      offset: 4,
      length: pkgJson.version.length,
    } as MessageEntity.CommonMessageEntity];

    return new FmtString(originMessage, entities).toString();
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
    return Commands.map(c => `${c.command} - ${c.description}`).join("\n");
  }
}
