import { tool } from 'ai';
import { z } from 'zod';
import { cocService } from '../coc-service';

export const getClanInfoTool = (token: string, proxyKey: string) =>
  tool({
    description: '获取部落详细信息，包括部落等级、成员列表、战争日志、部落描述等',
    inputSchema: z.object({
      clanTag: z.string().describe('部落标签，如 #2YJ8QR2Q'),
    }),
    execute: async (args: { clanTag: string }) => {
      try {
        console.log(`[tool:getClanInfo] fetching clanTag=${args.clanTag}`);
        const data = await cocService.getClan(args.clanTag, token, proxyKey);
        console.log(`[tool:getClanInfo] success clanTag=${args.clanTag} name=${(data as any).name || '?'}`);
        return JSON.stringify(data);
      } catch (error: unknown) {
        const msg = (error as Error).message || 'Failed to fetch clan info';
        console.error(`[tool:getClanInfo] FAILED clanTag=${args.clanTag}:`, msg);
        return JSON.stringify({ error: msg });
      }
    },
  });
