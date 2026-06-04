import { Hono } from 'hono';
import { messageController } from '../controllers/campfire/message.controller.js';

const campfireRouter = new Hono();

campfireRouter.post('/message', messageController);

// Health check for this sub-router
campfireRouter.get('/', (c) => c.text('OK'));

export { campfireRouter };
