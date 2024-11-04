// @ts-ignore
import { bootstrap } from 'global-agent';
import * as process from "process";

export class Network {
  public static config() {
    if (process.env.NODE_ENV as string !== "dev") {
      return;
    }

    bootstrap();
  }
}
