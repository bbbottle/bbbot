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
        console.log(`[tool:getCurrentWar] fetching clanTag=${args.clanTag}`);
        const data = await cocService.getCurrentWar(args.clanTag, token, proxyKey);
        console.log(`[tool:getCurrentWar] success clanTag=${args.clanTag} state=${(data as any).state || '?'}`);
        return JSON.stringify(data);
      } catch (error: unknown) {
        const msg = (error as Error).message || 'Failed to fetch war info';
        console.error(`[tool:getCurrentWar] FAILED clanTag=${args.clanTag}:`, msg);
        return JSON.stringify({ error: msg });
      }
    },
  });
