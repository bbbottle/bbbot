import { HandlerFn } from "./types";
import { getEnv } from "../runtime";
import { askCocMaster, type CocMasterConfig } from "../coc-master/chat";
import { MemoryKV, type SimpleKV } from "../coc-master/coc-wiki-importer";
import { getBindings } from "../runtime";

// Match #<player-tag> followed by optional whitespace and content
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

  const config: CocMasterConfig = {
    kimiApiKey: getEnv('KIMI_API_KEY') || '',
    cocToken: getEnv('COC_TOKEN') || '',
    proxyKey: getEnv('PROXY_KEY') || 'nshzpldjbm_L',
    kv: getKV(),
  };

  try {
    const response = await askCocMaster(playerTag, question, config);
    return `<pre>${escapeHtml(response)}</pre>`;
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : 'Unknown error';
    return `COC 查询失败: ${escapeHtml(errMsg)}`;
  }
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
