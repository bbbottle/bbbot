import {bootstrap} from 'global-agent';
import * as process from "process";
import fetch from 'node-fetch';

export class Network {
  public static config() {
    if (process.env.NODE_ENV as string !== "dev") {
      return;
    }

    bootstrap();
  }
}

export const fetchCOCPlayerInfo = async (playerTag: string) => {
  const url = `https://api.clashofclans.com/v1/players/${playerTag.replace("#", "%23")}`;

  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${process.env.COC_TOKEN}`
    }
  });

  return response.json();
}

const pick = (target: any, keys: string[]) => {
  return keys.reduce((acc: any, key) => {
    if (target[key]) {
      acc[key] = target[key];
    }

    return acc;
  }, {});
}

export const fetchMyCOCStats = async () => {
  const info = await fetchCOCPlayerInfo("#GQ9YC2LJ8");
  const keys = ["name", "tag", "townHallLevel", "expLevel", "trophies", "bestTrophies", "warStars", "attackWins", "defenseWins"];
  return {
    ...pick(info, keys),
    id: info.league.id,
    leagueName: info.league.name,
    leagueIcon: info.league.iconUrls.small
  };
}
