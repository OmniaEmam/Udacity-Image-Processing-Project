import express, { Application, Request, Response } from 'express';
import sharp from 'sharp';
import path from 'path';
import { Router } from 'express';

const app: Application = express();
const port = 5000;

app.get('/', async (req: Request, res: Response) => {
  const { name, width, height } = req.query;
  await sharp(path.join(__dirname, '../uploads', `${name}`))
    .resize({
      width: +`${width}` || 200,
      height: +`${height}` || 200,
      fit: sharp.fit.fill,
    })
    .toFile(path.join(__dirname, '/resizedImages', `new${name}`));
  res.sendFile(path.join(__dirname, '/resizedImages', `new${name}`));
  res.status(200);
});

app.listen(port, () => {
  console.log(`Connected On port : ${port}`);
  app.use('/', Router);
});

export default app;
