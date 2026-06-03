import { generateText, stepCountIs, type LanguageModel } from 'ai';
import { createAnthropic } from '@ai-sdk/anthropic';
import { createDeepSeek } from '@ai-sdk/deepseek';

import {
  getPlayerInfoTool,
  getClanInfoTool,
  getCurrentWarTool,
  getDevelopmentGuideTool,
} from './tools';
import type { SimpleKV } from './coc-wiki-importer';

export type AIProvider = 'kimi' | 'deepseek';

const SYSTEM_PROMPT = `你是资深《部落冲突》(Clash of Clans) 游戏策略专家。

你的职责是为玩家提供全方位的发展建议，包括但不限于：
- 村庄升级优先级规划
- 兵种搭配与流派推荐
- 防御布局优化建议
- 部落战策略指导
- 资源管理与英雄升级规划
- 根据玩家实际数据给出个性化建议

风格要求：
- 以资深专家口吻回复，语气严肃、科学、专业
- 用中文回复
- 必要时使用列表和分段让建议更易读
- 如果玩家数据不足，主动询问所需信息
- 严禁在回复中使用任何 emoji 或表情符号
- 避免口语化表达，保持学术性与权威性
- 严禁滥用分割线，避免在任何情况下使用
- 严禁滥用表格，仅在确实有助于表达时使用表格，并且必须使用 Markdown 格式，且表格内容必须简洁明了，避免冗长复杂的表格设计

其他要求：
1. 你没有名字，自我介绍时，避免使用第一人称，直接进入主题。
2. 除了 coc 相关内容，其他任何内容，避免讨论。
3. 永远不要询问玩家隐私信息，如姓名、年龄、性别等。
4. 不需要询问玩家的游戏账号信息（如玩家标签），因为工具会自动获取。
5. 不要询问玩家 TOKEN

你可以使用以下工具获取数据：
1. getPlayerInfo: 获取玩家个人信息、村庄、英雄、兵种等级等
2. getClanInfo: 获取部落信息、成员、战争日志
3. getCurrentWar: 获取当前部落战信息
4. getDevelopmentGuide: 查询权威发展建议（升级优先级、兵种搭配、防御策略等）
`;

export interface CocMasterConfig {
  provider: AIProvider;
  kimiApiKey?: string;
  deepseekApiKey?: string;
  cocToken: string;
  proxyKey: string;
  kv: SimpleKV;
}

function createModel(config: CocMasterConfig): LanguageModel {
  switch (config.provider) {
    case 'kimi': {
      const kimi = createAnthropic({
        baseURL: 'https://api.kimi.com/coding/v1/',
        apiKey: config.kimiApiKey,
      });
      return kimi('kimi-for-coding');
    }
    case 'deepseek': {
      const ds = createDeepSeek({
        apiKey: config.deepseekApiKey,
      });
      return ds('deepseek-v4-pro');
    }
    default:
      throw new Error(`Unknown AI provider: ${config.provider}`);
  }
}

export async function askCocMaster(
  playerTag: string,
  question: string,
  config: CocMasterConfig
): Promise<string> {
  let system = SYSTEM_PROMPT;
  if (playerTag) {
    system += `\n\n当前服务玩家标签: ${playerTag}`;
  }

  const model = createModel(config);

  try {
    const result = await generateText({
      model,
      system,
      messages: [{ role: 'user', content: question }],
      tools: {
        getPlayerInfo: getPlayerInfoTool(playerTag, config.cocToken, config.proxyKey),
        getClanInfo: getClanInfoTool(config.cocToken, config.proxyKey),
        getCurrentWar: getCurrentWarTool(config.cocToken, config.proxyKey),
        getDevelopmentGuide: getDevelopmentGuideTool(config.kv),
      },
      stopWhen: stepCountIs(10),
    });

    return result.text;
  } catch (error) {
    const err = error as Error;
    const providerLabel = config.provider === 'kimi' ? 'Kimi' : 'DeepSeek';
    const apiKeyEnv = config.provider === 'kimi' ? 'KIMI_API_KEY' : 'DEEPSEEK_API_KEY';
    console.error(
      '[chat] generateText failed:',
      err.message,
      'cause:', (err as any).cause,
      'stack:', err.stack?.slice(0, 300)
    );
    throw new Error(
      `${providerLabel} API 调用失败: ${err.message}。请检查 ${apiKeyEnv} 配置。`
    );
  }
}
