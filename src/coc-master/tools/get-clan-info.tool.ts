import { tool } from 'ai';
import { z } from 'zod';
import { cocService } from '../coc-service';

export const getClanInfoTool = (defaultToken: string) =>
  tool({
    description: '获取部落详细信息，包括部落等级、成员列表、战争日志、部落描述等',
    parameters: z.object({
      clanTag: z.string().describe('部落标签，如 #2YJ8QR2Q'),
      token: z.string().optional().describe('COC Developer API Token。使用当前配置的 Token'),
    }),
    execute: async (args: { clanTag: string; token?: string }) => {
      const tok = args.token || defaultToken;
      if (!tok) {
        return JSON.stringify({ error: '缺少 Token，请先在配置中填写' });
      }
      try {
        const data = await cocService.getClan(args.clanTag, tok);
        return JSON.stringify(data);
      } catch (error: unknown) {
        return JSON.stringify({
          error: (error as Error).message || 'Failed to fetch clan info',
        });
      }
    },
  });
