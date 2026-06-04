import { Converter } from 'showdown';
import { HandlerFn } from "./types";
import { askCocMaster, type AIProvider } from "../coc-master/chat";
import { MemoryKV, type SimpleKV } from "../coc-master/coc-wiki-importer";

const COC_TAG_PATTERN = /^#([A-Z0-9]{6,12})\s*(.*)$/i;

const kv: SimpleKV = new MemoryKV();
const md = new Converter({
  tables: true,
  strikethrough: true,
  tasklists: true,
  ghCompatibleHeaderId: true,
  simpleLineBreaks: true,
  ghMentions: false,
});

export function isCocQuery(text: string): boolean {
  return COC_TAG_PATTERN.test(text.trim());
}

export const cocMaster: HandlerFn = async (payload) => {
  const text = payload.message.body.plain.trim();
  const match = text.match(COC_TAG_PATTERN);

  if (!match) {
    return "Invalid COC query format.";
  }

  const playerTag = `#${match[1].toUpperCase()}`;
  const question = match[2].trim() || '查看我的村庄信息';

  // Gather config from process.env
  const aiProvider: AIProvider = (process.env.COC_AI_PROVIDER as AIProvider) || 'kimi';
  const kimiApiKey = process.env.KIMI_API_KEY;
  const deepseekApiKey = process.env.DEEPSEEK_API_KEY;
  const cocToken = process.env.COC_TOKEN;
  const proxyKey = process.env.PROXY_KEY;

  const missing: string[] = [];
  if (!cocToken) missing.push('COC_TOKEN');
  if (!proxyKey) missing.push('PROXY_KEY');
  if (aiProvider === 'kimi' && !kimiApiKey) missing.push('KIMI_API_KEY');
  if (aiProvider === 'deepseek' && !deepseekApiKey) missing.push('DEEPSEEK_API_KEY');

  if (missing.length > 0) {
    return `缺少环境变量: ${missing.join(', ')}。请在 .env 文件中设置。`;
  }

  console.log(
    `[coc-master] query player=${playerTag} question=${question.slice(0, 50)} ` +
    `provider=${aiProvider} coc=${cocToken!.slice(0, 20)}... proxy=${proxyKey!.slice(0, 6)}...`
  );

  if (!cocToken || !proxyKey) {
    return `Configuration error: ${missing.join(', ')} is required.`;
  }

  try {
    const response = await askCocMaster(playerTag, question, {
      provider: aiProvider,
      kimiApiKey,
      deepseekApiKey,
      cocToken,
      proxyKey,
      kv,
    });
    return md.makeHtml(response);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : 'Unknown error';
    console.error('[coc-master] error:', errMsg);
    return `COC 查询失败: ${errMsg}`;
  }
};
