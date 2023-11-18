import { Elysia } from 'elysia';
import sharp from 'sharp';

export const app = new Elysia();

app
  .get('/', () => 'Hello, Marius!')
  .get('/test', () => {
    const uploadImg = async (imgFromClient: string) => {
      const bufferImg = Buffer.from(imgFromClient.replace('data:image/jpeg;base64,', ''), 'base64');
      const img = await sharp(bufferImg)
        .avif({ quality: 80 })
        .resize(500, 500)
        .toBuffer()
        .then(async (buffer) => {
          console.log('🚀 ~ buffer:', buffer);
        });

      return img;
    };

    return { imgStr: uploadImg('11111') };
  });

app.listen(Number(process.env.PORT) || 3000, () => {
  console.log(`🦊 ${app.server?.hostname}:${app.server?.port}`);
});
