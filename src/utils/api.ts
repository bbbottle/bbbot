import { requireEnv } from "../runtime";

export interface Stream {
  id: string;
  content: string;
  type: string;
  author: string;
  created_at: string;
}

interface ApiResponse<T> {
  status: string;
  data: T;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

export async function createStreamReq(
  content: string,
): Promise<{ data: Stream }> {
  const API_CF_ENDPOINT = requireEnv("API_CF_ENDPOINT");
  const STREAM_API_KEY = requireEnv("STREAM_API_KEY");

  const response = await fetch(`${API_CF_ENDPOINT}/streaming`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": STREAM_API_KEY,
    },
    body: JSON.stringify({ content, type: 'note', author: 'bbki.ng' }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to create stream: ${error}`);
  }

  return response.json() as Promise<{ data: Stream }>;
}

export async function createPost(title: string, content: string): Promise<Post> {
  const API_CF_ENDPOINT = requireEnv("API_CF_ENDPOINT");
  const STREAM_API_KEY = requireEnv("STREAM_API_KEY");
  const response = await fetch(`${API_CF_ENDPOINT}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': STREAM_API_KEY,
    },
    body: JSON.stringify({ title, content }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to create post: ${error}`);
  }

  const result = (await response.json()) as ApiResponse<Post>;
  return result.data;
}
