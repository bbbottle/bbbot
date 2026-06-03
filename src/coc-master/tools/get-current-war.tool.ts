import { tool } from 'ai';
import { z } from 'zod';
import { cocService } from '../coc-service';

export const getCurrentWarTool = (token: string, proxyKey: string) =>
  tool({
    description: '获取部落当前战争信息',
    inputSchema: z.object({
      clanTag: z.string().describe('部落标签'),
    }),
    execute: async (args: { clanTag: string }) => {
      try {
        const data = await cocService.getCurrentWar(args.clanTag, token, proxyKey);
        return JSON.stringify(data);
      } catch (error: unknown) {
        return JSON.stringify({
          error: (error as Error).message || 'Failed to fetch war info',
        });
      }
    },
  });
