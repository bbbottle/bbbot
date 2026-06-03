import { tool } from 'ai';
import { z } from 'zod';
import { cocService } from '../coc-service';

export const getPlayerInfoTool = (defaultPlayerTag: string, token: string, proxyKey: string) =>
  tool({
    description: '获取玩家个人信息、村庄、英雄、兵种等级、法术等级、成就等详细数据',
    inputSchema: z.object({
      playerTag: z
        .string()
        .optional()
        .describe('玩家标签，如 #2P0J9PY8G。如果未提供，使用当前配置的玩家标签'),
    }),
    execute: async (args: { playerTag?: string }) => {
      const tag = args.playerTag || defaultPlayerTag;
      if (!tag) {
        return JSON.stringify({ error: '缺少玩家标签' });
      }
      try {
        const data = await cocService.getPlayer(tag, token, proxyKey);
        return JSON.stringify(data);
      } catch (error: unknown) {
        return JSON.stringify({
          error: (error as Error).message || 'Failed to fetch player info',
        });
      }
    },
  });
