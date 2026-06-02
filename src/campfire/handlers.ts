import { CampfireMessage, HandlerFn } from "./types";
import { KVNamespace, getEnv } from "../runtime";
import { DataBase } from "../utils/DataBase";
import { createPost, createStreamReq } from "../utils/api";
import { loadSession, deleteSession } from "./session";
import { generateAuthUrl } from "./oauth";

// @ts-ignore JSON import
import pkg from "../../package.json";

async function isAdmin(userId: number, kv: KVNamespace): Promise<boolean> {
  const sess = await loadSession(kv, userId);
  if (!sess) return false;
  return sess.user.email === getEnv("ADMIN_EMAIL");
}

function helpText(): string {
  return [
    "<strong>Available commands:</strong>",
    "",
    "<strong>login</strong> - Login with GitHub to manage content",
    "<strong>logout</strong> - Logout from bbki.ng",
    "<strong>whoami</strong> - Show your login status",
    "<strong>help</strong> - Show this help message",
    "<strong>avatar</strong> - Get bbki.ng logo",
    "<strong>version</strong> - Show bot version",
    "",
    "<strong>Creating content (admin only):</strong>",
    "Single-line message = Stream (appears in real-time feed)",
    "Multi-line message = Blog post (first line = title, rest = body)",
  ].join("<br>\n");
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// --- Command handlers ---

export const login: HandlerFn = async (payload, kv, request) => {
  const authUrl = await generateAuthUrl(request.url, payload.user.id, kv);
  return `Click here to login with GitHub:<br><a href="${authUrl}">${authUrl}</a>`;
};

export const logout: HandlerFn = async (payload, kv) => {
  await deleteSession(kv, payload.user.id);
  return "You have been logged out.";
};

export const whoami: HandlerFn = async (payload, kv) => {
  const sess = await loadSession(kv, payload.user.id);
  if (!sess) {
    return "You are not logged in. Send <strong>login</strong> to authenticate.";
  }
  return `You are logged in as <strong>${escapeHtml(sess.user.email ?? String(sess.user.id))}</strong>.`;
};

export const help: HandlerFn = async () => {
  return helpText();
};

export const avatar: HandlerFn = async () => {
  return `<img src="https://bbki.ng/pwa-512x512.png" alt="bbki.ng logo" width="256" height="256">`;
};

export const version: HandlerFn = async () => {
  return `bbbot v${(pkg as any).version} running on Campfire.`;
};

// --- Content handler ---

export const content: HandlerFn = async (payload, kv) => {
  const text = payload.message.body.plain;
  const lines = text.split("\n");

  const admin = await isAdmin(payload.user.id, kv);
  if (!admin) {
    return "You need to be logged in as an admin to create content. Send <strong>login</strong> to authenticate.";
  }

  if (lines.length < 2) {
    return handleStream(lines[0].trim());
  }
  return handlePost(lines[0].trim(), lines.slice(1).join("\n").trim());
};

async function handleStream(content: string): Promise<string> {
  if (!content) return "Cannot create empty stream.";
  const result = await createStreamReq(content);
  return `Stream created: <strong>${escapeHtml(result.data.id)}</strong>`;
}

async function handlePost(title: string, body: string): Promise<string> {
  if (!title) return "Post title cannot be empty.";
  const post = await createPost(title, body);
  return `Post created: <a href="https://bbki.ng/blog/${escapeHtml(post.id)}">${escapeHtml(title)}</a>`;
}
