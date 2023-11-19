import { Elysia } from 'elysia';

export const ws = new Elysia().ws('/ws', {
  open: (ws) => {
    console.log('🚀 ~ open:', ws.id);
  },
  message: (ws) => {
    console.log('🚀 ~ message:', ws.id);
  },
  close: (ws) => {
    console.log('🚀 ~ close:', ws.id);
  },
  error: (c) => {
    console.log('🚀 ~ error:', JSON.stringify(c));
  },
});

const app = new Elysia().use(ws);

app.get('/', () => 'Hello, Marius!');

app.listen(Number(process.env.PORT) || 3000, () => {
  console.log(`🦊 ${app.server?.hostname}:${app.server?.port}`);
});
