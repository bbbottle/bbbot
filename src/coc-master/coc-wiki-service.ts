import {
  cocWikiDataImporter,
  type RefinedGameData,
  type SimpleKV,
  type WikiGuide,
} from './coc-wiki-importer';

export interface DevelopmentGuideResult {
  topic: string;
  townHallLevel?: number;
  advice: string;
}

const GENERIC_ADVICE =
  '这是一个很好的问题。作为 COC 顾问，我建议你：\n' +
  '1. 明确当前大本等级和目标\n' +
  '2. 优先升级进攻类建筑（实验室、兵营、训练营）\n' +
  '3. 保持英雄持续升级\n' +
  '4. 多观察高本玩家的阵型和打法\n' +
  '5. 积极参与部落战和部落竞赛获取奖励\n\n' +
  '你可以告诉我更具体的需求，比如兵种搭配、防御布局、资源管理等。';

const DATA_UNAVAILABLE_ADVICE =
  '数据暂时不可用，正在从外部数据源同步最新信息。请稍后再试，或询问其他问题。';

export class CocWikiService {
  async query(
    kv: SimpleKV,
    topic: string | undefined | null,
    townHallLevel?: number
  ): Promise<DevelopmentGuideResult> {
    const safeTopic = topic?.toLowerCase?.() ?? '';

    if (!safeTopic) {
      return {
        topic: topic || '',
        townHallLevel,
        advice: GENERIC_ADVICE,
      };
    }

    const guide = await cocWikiDataImporter.getGuideFromKV(kv);

    if (!guide) {
      return {
        topic: topic || '',
        townHallLevel,
        advice: DATA_UNAVAILABLE_ADVICE,
      };
    }

    const matchedKey = this.findMatchingTopic(guide, safeTopic);

    if (matchedKey) {
      const topicData = guide.topics[matchedKey];
      let advice = topicData.template;

      if (townHallLevel) {
        const gameData = await cocWikiDataImporter.getGameDataFromKV(kv);
        advice = this.enrichAdvice(advice, townHallLevel, gameData);
      }

      return {
        topic: matchedKey,
        townHallLevel,
        advice,
      };
    }

    return {
      topic: topic || '',
      townHallLevel,
      advice: GENERIC_ADVICE,
    };
  }

  private findMatchingTopic(guide: WikiGuide, lowerTopic: string): string | null {
    for (const [key, topicData] of Object.entries(guide.topics)) {
      const lowerKey = key.toLowerCase();
      if (lowerTopic.includes(lowerKey) || lowerKey.includes(lowerTopic)) {
        return key;
      }
      if (topicData.keywords) {
        for (const kw of topicData.keywords) {
          const lowerKw = kw.toLowerCase();
          if (lowerTopic.includes(lowerKw) || lowerKw.includes(lowerTopic)) {
            return key;
          }
        }
      }
    }
    return null;
  }

  private enrichAdvice(
    template: string,
    thLevel: number,
    gameData: RefinedGameData | null
  ): string {
    if (!gameData) return template;

    const lines: string[] = [template];
    lines.push('');
    lines.push(`（针对 ${thLevel} 本玩家的数据补充：）`);

    const thBuilding = gameData.buildings.find(b => b.name === 'Town Hall');
    const thMaxLevel = thBuilding?.levels?.length || 0;
    if (thLevel <= thMaxLevel) {
      lines.push(`- 当前大本最高等级为 ${thMaxLevel} 级`);
    }

    const availableBuildings = gameData.buildings.filter(b => {
      const minTh = b.levels[0]?.required_townhall ?? 999;
      return b.name !== 'Town Hall' && minTh <= thLevel;
    });
    if (availableBuildings.length > 0) {
      lines.push(`- 当前大本已解锁 ${availableBuildings.length} 种建筑`);
    }

    const availableHeroes = gameData.heroes.filter(h => {
      const minTh = h.levels[0]?.required_townhall ?? 999;
      return minTh <= thLevel;
    });
    if (availableHeroes.length > 0) {
      const heroNames = availableHeroes.map(h => h.name).join('、');
      lines.push(`- 已解锁英雄：${heroNames}`);
    }

    const availableTroops = gameData.troops.filter(t => {
      const minTh = t.levels[0]?.required_townhall ?? 999;
      return t.village === 'home' && minTh <= thLevel;
    });
    if (availableTroops.length > 0) {
      lines.push(`- 已解锁家乡兵种：${availableTroops.length} 种`);
    }

    lines.push('');
    lines.push('数据来源：coc.py 社区维护数据集');

    return lines.join('\n');
  }
}

export const cocWikiService = new CocWikiService();
