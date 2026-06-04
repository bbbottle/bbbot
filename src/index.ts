import 'dotenv/config';
import { serve } from '@hono/node-server';
import app from './app.js';
import { campfireRouter } from './routes/campfire.routes.js';

// Mount sub-routers
app.route('/campfire', campfireRouter);

// Health check at root
app.get('/', (c) => c.text('OK'));

// 404 catch-all
app.notFound((c) => c.text('Not Found', 404));

const port = Number(process.env.PORT) || 8787;

serve({ fetch: app.fetch, port }, (info) => {
  console.log(`[bbbot] Server running on http://localhost:${info.port}`);
});

export default app;
