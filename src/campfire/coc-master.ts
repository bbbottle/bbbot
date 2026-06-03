import { HandlerFn } from "./types";
import { getEnv, getBindings } from "../runtime";
import { askCocMaster } from "../coc-master/chat";
import { MemoryKV, type SimpleKV } from "../coc-master/coc-wiki-importer";

const COC_TAG_PATTERN = /^#([A-Z0-9]{6,12})\s*(.*)$/i;

function getKV(): SimpleKV {
  const bindings = getBindings();
  if (bindings.SESSION_KV) {
    return bindings.SESSION_KV as unknown as SimpleKV;
  }
  return new MemoryKV();
}

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

  // Gather config — all must come from env, no hardcoded fallbacks
  const kimiApiKey = getEnv('KIMI_API_KEY');
  const cocToken = getEnv('COC_TOKEN');
  const proxyKey = getEnv('PROXY_KEY');

  const missing: string[] = [];
  if (!kimiApiKey) missing.push('KIMI_API_KEY');
  if (!cocToken) missing.push('COC_TOKEN');
  if (!proxyKey) missing.push('PROXY_KEY');

  if (missing.length > 0) {
    return `缺少环境变量: ${missing.join(', ')}。请用 wrangler secret put 设置。`;
  }

  console.log(
    `[coc-master] query player=${playerTag} question=${question.slice(0, 50)} ` +
    `kimi=${kimiApiKey!.slice(0, 8)}... coc=${cocToken!.slice(0, 20)}... proxy=${proxyKey!.slice(0, 6)}...`
  );

  if (!kimiApiKey || !cocToken || !proxyKey) {
    return `Configuration error: ${missing.join(', ')} is required.`;
  }

  try {
    const response = await askCocMaster(playerTag, question, {
      kimiApiKey,
      cocToken,
      proxyKey,
      kv: getKV(),
    });
    return `<pre>${escapeHtml(response)}</pre>`;
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : 'Unknown error';
    console.error('[coc-master] error:', errMsg);
    return `COC 查询失败: ${escapeHtml(errMsg)}`;
  }
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
