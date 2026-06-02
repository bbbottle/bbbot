import { KVNamespace } from "../runtime";
import { CampfireSession } from "./types";
import { DataBase } from "../utils/DataBase";

const SESSION_PREFIX = "campfire:session:";
const TTL_SECONDS = 60 * 60 * 24 * 30; // 30 days

function sessionKey(userId: number): string {
  return `${SESSION_PREFIX}${userId}`;
}

export async function loadSession(
  kv: KVNamespace,
  userId: number,
): Promise<CampfireSession | null> {
  const raw = await kv.get(sessionKey(userId));
  if (!raw) return null;
  return JSON.parse(raw) as CampfireSession;
}

export async function saveSession(
  kv: KVNamespace,
  userId: number,
  session: CampfireSession,
): Promise<void> {
  await kv.put(sessionKey(userId), JSON.stringify(session), {
    expirationTtl: TTL_SECONDS,
  });
}

export async function deleteSession(
  kv: KVNamespace,
  userId: number,
): Promise<void> {
  await kv.delete(sessionKey(userId));
}

export async function restoreSession(
  kv: KVNamespace,
  userId: number,
): Promise<boolean> {
  const sess = await loadSession(kv, userId);
  if (!sess) return false;
  await DataBase.getInstance().SetSess(sess.session);
  return true;
}
