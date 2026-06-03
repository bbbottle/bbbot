import type { Clan, ClanWar, Player } from './types';

const COC_API_BASE = 'http://47.106.33.249:3000/v1';

export class CocService {
  private async fetchCoc<T>(endpoint: string, token: string, proxyKey: string): Promise<T> {
    const response = await fetch(`${COC_API_BASE}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Proxy-Key': proxyKey,
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unknown error');
      throw new Error(
        `COC API ${response.status}: ${errorText} (proxy: ${COC_API_BASE}${endpoint})`
      );
    }

    return response.json() as Promise<T>;
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
