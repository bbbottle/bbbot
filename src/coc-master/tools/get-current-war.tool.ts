import { tool } from 'ai';
import { z } from 'zod';
import { cocService } from '../coc-service';

export const getCurrentWarTool = (defaultToken: string) =>
  tool({
    description: '获取部落当前战争信息',
    parameters: z.object({
      clanTag: z.string().describe('部落标签'),
      token: z
        .string()
        .optional()
        .describe('COC Developer API Token。如果未提供，使用 defaultToken'),
    }),
    execute: async (args: { clanTag: string; token?: string }) => {
      const tok = args.token || defaultToken;
      if (!tok) {
        return JSON.stringify({ error: '缺少 Token，请先在配置中填写' });
      }
      try {
        const data = await cocService.getCurrentWar(args.clanTag, tok);
        return JSON.stringify(data);
      } catch (error: unknown) {
        return JSON.stringify({
          error: (error as Error).message || 'Failed to fetch war info',
        });
      }
    },
  });
