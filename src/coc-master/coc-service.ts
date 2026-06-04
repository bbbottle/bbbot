import type { Clan, ClanWar, Player } from './types';

function getCocApiBase(): string {
  return process.env.COC_API_BASE || 'http://100.96.0.5:3000/v1';
}

function maskToken(token: string): string {
  if (!token) return '(empty)';
  if (token.length <= 8) return token.slice(0, 2) + '***';
  return token.slice(0, 4) + '***' + token.slice(-4);
}

export class CocService {
  private async fetchCoc<T>(endpoint: string, token: string, proxyKey: string): Promise<T> {
    const base = getCocApiBase();
    const url = `${base}${endpoint}`;
    const startTime = Date.now();

    console.log(
      `[coc-api] -> ${url} ` +
      `token=${maskToken(token)} proxyKey=${maskToken(proxyKey)}`
    );

    let response: Response;
    try {
      response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          'X-Proxy-Key': proxyKey,
          Accept: 'application/json',
        },
      });
    } catch (fetchErr) {
      const ms = Date.now() - startTime;
      console.error(`[coc-api] <- fetch threw after ${ms}ms:`, fetchErr);
      throw fetchErr;
    }

    const ms = Date.now() - startTime;
    const respHeaders: Record<string, string> = {};
    response.headers.forEach((v, k) => { respHeaders[k] = v; });

    if (!response.ok) {
      const errorBody = await response.text().catch(() => '(failed to read body)');
      console.error(
        `[coc-api] <- ${response.status} ${response.statusText} (${ms}ms)\n` +
        `  url: ${url}\n` +
        `  request: token=${maskToken(token)} proxyKey=${maskToken(proxyKey)}\n` +
        `  response headers: ${JSON.stringify(respHeaders)}\n` +
        `  response body: ${errorBody}`
      );
      throw new Error(
        `COC API ${response.status}: ${errorBody.slice(0, 500)} (proxy: ${url})`
      );
    }

    const body = await response.json() as T;
    const bodyPreview = JSON.stringify(body).slice(0, 200);
    console.log(
      `[coc-api] <- ${response.status} (${ms}ms) body preview: ${bodyPreview}`
    );

    return body;
  }

  private normalizeTag(tag: string): string {
    const withHash = tag.startsWith('#') ? tag : `#${tag}`;
    return encodeURIComponent(withHash);
  }

  async getPlayer(playerTag: string, token: string, proxyKey: string): Promise<Player> {
    return this.fetchCoc<Player>(`/players/${this.normalizeTag(playerTag)}`, token, proxyKey);
  }

  async getClan(clanTag: string, token: string, proxyKey: string): Promise<Clan> {
    return this.fetchCoc<Clan>(`/clans/${this.normalizeTag(clanTag)}`, token, proxyKey);
  }

  async getCurrentWar(clanTag: string, token: string, proxyKey: string): Promise<ClanWar> {
    return this.fetchCoc<ClanWar>(`/clans/${this.normalizeTag(clanTag)}/currentwar`, token, proxyKey);
  }
}

export const cocService = new CocService();
