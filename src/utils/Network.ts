import { getEnv } from "../runtime";

export class Network {
  public static async config() {
    if (getEnv("NODE_ENV") !== "dev") {
      return;
    }

    try {
      const mod = await import("global-agent");
      mod.bootstrap();
    } catch {
      // noop: global-agent is only needed in local dev with proxy
    }
  }
}
