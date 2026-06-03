import type { Clan, ClanWar, Player } from './types';

const COC_API_BASE = 'http://47.106.33.249:3000/v1';

export class CocService {
  private async fetchCoc<T>(endpoint: string, token: string): Promise<T> {
    const [t, k] = token.split(':');
    const response = await fetch(`${COC_API_BASE}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${t}`,
        'X-Proxy-Key': k,
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unknown error');
      throw new Error(
        `COC API ${response.status} ${response.statusText}: ${errorText} ` +
        `(endpoint: ${endpoint}, ip: 47.106.33.249:3000)`
      );
    }

    return response.json() as Promise<T>;
  }

  private normalizeTag(tag: string): string {
    const withHash = tag.startsWith('#') ? tag : `#${tag}`;
    return encodeURIComponent(withHash);
  }

  async getPlayer(playerTag: string, token: string): Promise<Player> {
    return this.fetchCoc<Player>(`/players/${this.normalizeTag(playerTag)}`, token);
  }

  async getClan(clanTag: string, token: string): Promise<Clan> {
    return this.fetchCoc<Clan>(`/clans/${this.normalizeTag(clanTag)}`, token);
  }

  async getCurrentWar(clanTag: string, token: string): Promise<ClanWar> {
    return this.fetchCoc<ClanWar>(`/clans/${this.normalizeTag(clanTag)}/currentwar`, token);
  }
}

export const cocService = new CocService();
