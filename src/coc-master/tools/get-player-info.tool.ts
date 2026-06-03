import { tool } from 'ai';
import { z } from 'zod';
import { cocService } from '../coc-service';

export const getPlayerInfoTool = (defaultPlayerTag: string, defaultToken: string) =>
  tool({
    description: '获取玩家个人信息、村庄、英雄、兵种等级、法术等级、成就等详细数据',
    parameters: z.object({
      playerTag: z
        .string()
        .optional()
        .describe('玩家标签，如 #2P0J9PY8G。如果未提供，使用当前配置的玩家标签'),
      token: z
        .string()
        .optional()
        .describe('COC Developer API Token。如果未提供，使用 defaultToken'),
    }),
    execute: async (args: { playerTag?: string; token?: string }) => {
      const tag = args.playerTag || defaultPlayerTag;
      const tok = args.token || defaultToken;
      if (!tag || !tok) {
        return JSON.stringify({ error: '缺少玩家标签或 Token，请先在配置中填写' });
      }
      try {
        const data = await cocService.getPlayer(tag, tok);
        return JSON.stringify(data);
      } catch (error: unknown) {
        return JSON.stringify({
          error: (error as Error).message || 'Failed to fetch player info',
        });
      }
    },
  });
