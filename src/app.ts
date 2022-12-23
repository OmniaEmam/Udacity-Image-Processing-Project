import express, { Application, Request, Response } from 'express';
import sharp from 'sharp';
import path from 'path';
import { Router } from 'express';
import fs from 'fs';

const app: Application = express();
const port = 5000;


app.get('/', async (req: Request, res: Response) => {
  const { name, width, height } = req.query;
  let file = `../assets/resizedImages/new${width}x${height}${name}`;
  if (fs.existsSync(file))
  {
    alert("the image already exist");
    console.log("the image already exist");
  }
  else
  {
    await sharp(path.join(__dirname, '../assets/uploads', `${name}`))
    .resize({
      width: +`${width}` || 200,
      height: +`${height}` || 200,
      fit: sharp.fit.fill,
    })
    .toFile(path.join(__dirname, '../assets/resizedImages', `new${width}x${height}${name}`));
  res.sendFile(path.join(__dirname, '../assets/resizedImages', `new${width}x${height}${name}`));
  res.status(200);
  }
});

app.listen(port, () => {
  console.log(`Connected On port : ${port}`);
  app.use('/', Router);
});

export default app;
