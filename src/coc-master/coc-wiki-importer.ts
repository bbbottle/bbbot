const COC_PY_STATIC_DATA_URL =
  'https://raw.githubusercontent.com/mathsman5133/coc.py/master/coc/static/static_data.json';

const DEFAULT_GUIDE_URL =
  'https://raw.githubusercontent.com/bbbottle/bottle/main/apps/backend/data/coc-wiki-guide.json';

const KV_KEY_GUIDE = 'coc-wiki:guide:v1';
const KV_KEY_GAME_DATA = 'coc-wiki:game-data:v1';
const DEFAULT_CACHE_TTL_SECONDS = 86400 * 7; // 7 days

// Minimal KV-like interface that both Cloudflare KV and MemoryKV satisfy
export interface SimpleKV {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
}

/** In-memory KV fallback for Node.js mode */
export class MemoryKV implements SimpleKV {
  private store = new Map<string, { value: string; expiresAt: number | null }>();

  async get(key: string): Promise<string | null> {
    const entry = this.store.get(key);
    if (!entry) return null;
    if (entry.expiresAt && Date.now() > entry.expiresAt) {
      this.store.delete(key);
      return null;
    }
    return entry.value;
  }

  async put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void> {
    const expiresAt = options?.expirationTtl ? Date.now() + options.expirationTtl * 1000 : null;
    this.store.set(key, { value, expiresAt });
  }
}

export interface GameUnit {
  name: string;
  type: string;
  village: string;
  levels: Array<{
    level: number;
    build_cost?: number;
    build_time?: number;
    required_townhall?: number;
    hitpoints?: number;
    dps?: number;
    housing_space?: number;
    training_time?: number;
  }>;
}

export interface RefinedGameData {
  buildings: GameUnit[];
  troops: GameUnit[];
  heroes: GameUnit[];
  spells: GameUnit[];
  traps: GameUnit[];
  lastUpdated: string;
}

export interface GuideTopic {
  keywords: string[];
  template: string;
}

export interface WikiGuide {
  _meta: {
    source: string;
    version: string;
    lastUpdated: string;
  };
  topics: Record<string, GuideTopic>;
}

export interface SyncResult {
  success: boolean;
  guideLoaded: boolean;
  gameDataLoaded: boolean;
  guideTopicsCount: number;
  gameDataUnitsCount: number;
  errors: string[];
  timestamp: string;
}

export class CocWikiDataImporter {
  private readonly guideUrl: string;

  constructor(guideUrl?: string) {
    this.guideUrl = guideUrl || DEFAULT_GUIDE_URL;
  }

  async sync(kv: SimpleKV): Promise<SyncResult> {
    const errors: string[] = [];
    let guideLoaded = false;
    let gameDataLoaded = false;
    let guideTopicsCount = 0;
    let gameDataUnitsCount = 0;

    try {
      const guide = await this.fetchGuide();
      guideTopicsCount = Object.keys(guide.topics).length;
      await kv.put(KV_KEY_GUIDE, JSON.stringify(guide), {
        expirationTtl: DEFAULT_CACHE_TTL_SECONDS,
      });
      guideLoaded = true;
    } catch (err) {
      errors.push(`Guide fetch failed: ${err instanceof Error ? err.message : String(err)}`);
    }

    try {
      const gameData = await this.fetchAndRefineGameData();
      gameDataUnitsCount =
        gameData.buildings.length +
        gameData.troops.length +
        gameData.heroes.length +
        gameData.spells.length +
        gameData.traps.length;
      await kv.put(KV_KEY_GAME_DATA, JSON.stringify(gameData), {
        expirationTtl: DEFAULT_CACHE_TTL_SECONDS,
      });
      gameDataLoaded = true;
    } catch (err) {
      errors.push(`Game data fetch failed: ${err instanceof Error ? err.message : String(err)}`);
    }

    return {
      success: guideLoaded || gameDataLoaded,
      guideLoaded,
      gameDataLoaded,
      guideTopicsCount,
      gameDataUnitsCount,
      errors,
      timestamp: new Date().toISOString(),
    };
  }

  async fetchGuide(): Promise<WikiGuide> {
    const response = await fetch(this.guideUrl, {
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`Guide HTTP ${response.status}: ${response.statusText}`);
    }

    const data = (await response.json()) as WikiGuide;

    if (!data.topics || typeof data.topics !== 'object') {
      throw new Error('Invalid guide format: missing topics object');
    }

    return data;
  }

  async fetchAndRefineGameData(): Promise<RefinedGameData> {
    const response = await fetch(COC_PY_STATIC_DATA_URL, {
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`Game data HTTP ${response.status}: ${response.statusText}`);
    }

    interface RawLevel {
      level?: number;
      build_cost?: number;
      build_time?: number;
      required_townhall?: number;
      hitpoints?: number;
      dps?: number;
      housing_space?: number;
      training_time?: number;
    }

    interface RawUnit {
      name?: string;
      type?: string;
      village?: string;
      levels?: RawLevel[];
    }

    const raw = (await response.json()) as Record<string, RawUnit[]>;

    const pickFields = (arr: RawUnit[]): GameUnit[] =>
      (arr || [])
        .filter(item => item && typeof item === 'object')
        .map(item => ({
          name: String(item.name || ''),
          type: String(item.type || ''),
          village: String(item.village || 'home'),
          levels: (item.levels || []).map((lv: RawLevel) => ({
            level: Number(lv.level || 0),
            build_cost: lv.build_cost != null ? Number(lv.build_cost) : undefined,
            build_time: lv.build_time != null ? Number(lv.build_time) : undefined,
            required_townhall:
              lv.required_townhall != null ? Number(lv.required_townhall) : undefined,
            hitpoints: lv.hitpoints != null ? Number(lv.hitpoints) : undefined,
            dps: lv.dps != null ? Number(lv.dps) : undefined,
            housing_space: lv.housing_space != null ? Number(lv.housing_space) : undefined,
            training_time: lv.training_time != null ? Number(lv.training_time) : undefined,
          })),
        }))
        .filter(u => u.name);

    return {
      buildings: pickFields(raw.buildings),
      troops: pickFields(raw.troops),
      heroes: pickFields(raw.heroes),
      spells: pickFields(raw.spells),
      traps: pickFields(raw.traps),
      lastUpdated: new Date().toISOString(),
    };
  }

  async getGuideFromKV(kv: SimpleKV): Promise<WikiGuide | null> {
    const cached = await kv.get(KV_KEY_GUIDE);
    if (cached) {
      try { return JSON.parse(cached) as WikiGuide; } catch { /* fall through */ }
    }

    try {
      const fresh = await this.fetchGuide();
      await kv.put(KV_KEY_GUIDE, JSON.stringify(fresh), {
        expirationTtl: DEFAULT_CACHE_TTL_SECONDS,
      });
      return fresh;
    } catch {
      return null;
    }
  }

  async getGameDataFromKV(kv: SimpleKV): Promise<RefinedGameData | null> {
    const cached = await kv.get(KV_KEY_GAME_DATA);
    if (cached) {
      try { return JSON.parse(cached) as RefinedGameData; } catch { /* fall through */ }
    }

    try {
      const fresh = await this.fetchAndRefineGameData();
      await kv.put(KV_KEY_GAME_DATA, JSON.stringify(fresh), {
        expirationTtl: DEFAULT_CACHE_TTL_SECONDS,
      });
      return fresh;
    } catch {
      return null;
    }
  }
}

export const cocWikiDataImporter = new CocWikiDataImporter();
