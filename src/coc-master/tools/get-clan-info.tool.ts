import { tool } from 'ai';
import { z } from 'zod';
import { cocService } from '../coc-service';

export const getClanInfoTool = (token: string, proxyKey: string) =>
  tool({
    description: '获取部落详细信息，包括部落等级、成员列表、战争日志、部落描述等',
    parameters: z.object({
      clanTag: z.string().describe('部落标签，如 #2YJ8QR2Q'),
    }),
    execute: async (args: { clanTag: string }) => {
      try {
        const data = await cocService.getClan(args.clanTag, token, proxyKey);
        return JSON.stringify(data);
      } catch (error: unknown) {
        return JSON.stringify({
          error: (error as Error).message || 'Failed to fetch clan info',
        });
      }
    },
  });
