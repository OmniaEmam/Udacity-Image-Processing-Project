import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { checkValid, reqQquery } from '../utilities/checkValid';
import imageResize from '../utilities/imageResize';

const appRouter = express.Router();


appRouter.get('/uploads', async (req: Request, res: Response): Promise<void> => {
    if (checkValid((req.query as unknown) as reqQquery)) {

        const imageName = req.query.name as string;
        const imageWidth = Number(req.query.width);
        const imageHeight = Number(req.query.height);

        const fileName: string = path.join(__dirname, '../../assets/resizedImages/', `new${imageWidth}x${imageHeight}${imageName}`);
        if (!fs.existsSync(fileName)) {
            const newImage = await imageResize(imageName,imageWidth,imageHeight);

            if (!String(newImage).includes('Error')) 
            {
            res.sendFile(newImage);
            res.status(200);
            }
            else
            {
            res.send('There is an error , please make sure of image name');
            console.log('There is an error , please make sure of image name');
            res.status(404);
            }
        }
        else if (fs.existsSync(fileName)){
            res.send('the image already exist');
            console.log('the image already exist');
            res.status(500);
        }
    }
    else {
        res.send('The height and width are not correct, please make sure of image name height and width');
        console.log('The height and width are not correct, please make sure of image name height and width');
        res.status(500);
    }
});

export default appRouter