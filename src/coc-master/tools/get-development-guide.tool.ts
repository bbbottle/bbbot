import { tool } from 'ai';
import { z } from 'zod';
import { cocWikiService } from '../coc-wiki-service';
import type { SimpleKV } from '../coc-wiki-importer';

export const getDevelopmentGuideTool = (kv: SimpleKV) =>
  tool({
    description:
      '查询权威发展建议，包括升级优先级、兵种搭配、防御策略、资源管理、部落战技巧、英雄升级规划等',
    inputSchema: z.object({
      topic: z
        .string()
        .describe(
          '查询主题，如"升级优先级"、"兵种搭配"、"防御布局"、"资源管理"、"部落战"、"英雄升级"'
        ),
      townHallLevel: z.number().optional().describe('当前大本等级，用于提供针对性建议'),
    }),
    execute: async (args: { topic: string; townHallLevel?: number }) => {
      const result = await cocWikiService.query(kv, args.topic, args.townHallLevel);
      return JSON.stringify(result);
    },
  });
