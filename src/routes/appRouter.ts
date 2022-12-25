import express, { Request, Response } from 'express';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import alert from 'alert';
import { checkValid, reqQquery } from '../utilities/checkValid';

const appRouter = express.Router();


appRouter.get('/uploads', async (req: Request, res: Response): Promise<void> => {
    if (checkValid((req.query as unknown) as reqQquery)) {
        const { name, width, height } = req.query;
        const fileName: string = path.join(__dirname, '../../assets/resizedImages/', `new${width}x${height}${name}`);
        if (!fs.existsSync(fileName)) {
            await sharp(path.join(__dirname, '/uploads', `${name}`))
                .resize({
                    width: +`${width}` || 200,
                    height: +`${height}` || 200,
                    fit: sharp.fit.fill,
                })
                .toFile(path.join(__dirname, '../../assets/resizedImages/', `new${width}x${height}${name}`));
            res.sendFile(path.join(__dirname, '../../assets/resizedImages/', `new${width}x${height}${name}`));
            res.status(200);
        }
        else {
            res.sendFile(fileName);
            alert('the image already exist');
            console.log('the image already exist');
            res.status(200);
        }
    }
    else {
        alert('The height and width are not correct');
        console.log('The height and width are not correct');
        res.status(404);
    }
});

export default appRouter