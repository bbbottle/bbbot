export interface CampfireMessage {
  room: { id: number; name: string };
  user: { id: number; name: string };
  message: {
    id: number;
    body: { html: string; plain: string };
  };
}

export type HandlerFn = (payload: CampfireMessage) => Promise<string>;
