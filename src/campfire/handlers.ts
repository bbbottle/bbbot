import { HandlerFn } from "./types";
import { getEnv } from "../runtime";
import { createPost, createStreamReq } from "../utils/api";

// @ts-ignore JSON import
import pkg from "../../package.json";

function isAdmin(userId: number): boolean {
  const ids = (getEnv("ADMIN_IDS") ?? "").split(",").map(Number);
  return ids.includes(userId);
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// --- Command handlers ---

export const help: HandlerFn = async () => {
  return [
    "<strong>Available commands:</strong>",
    "",
    "<strong>help</strong> - Show this help message",
    "<strong>avatar</strong> - Get bbki.ng logo",
    "<strong>version</strong> - Show bot version",
    "",
    "<strong>Creating content (admin only):</strong>",
    "Single-line message = Stream (appears in real-time feed)",
    "Multi-line message = Blog post (first line = title, rest = body)",
  ].join("<br>\n");
};

export const avatar: HandlerFn = async () => {
  return `<img src="https://bbki.ng/pwa-512x512.png" alt="bbki.ng logo" width="256" height="256">`;
};

export const version: HandlerFn = async () => {
  return `bbbot v${(pkg as any).version} running on Campfire.`;
};

// --- Content handler ---

export const content: HandlerFn = async (payload) => {
  const text = payload.message.body.plain;
  const lines = text.split("\n");

  if (!isAdmin(payload.user.id)) {
    return `You are not authorized to create content.`;
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
