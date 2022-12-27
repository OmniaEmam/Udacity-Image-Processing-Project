import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { checkValid, reqQquery } from '../utilities/checkValid';
import imageResize from '../utilities/imageResize';
import removeExtension from '../utilities/removeExtension';

const appRouter = express.Router();


appRouter.get('/uploads', async (req: Request, res: Response): Promise<void> => {
    if (checkValid((req.query as unknown) as reqQquery)) {

        const imageName = req.query.name as string;
        const imageWidth = Number(req.query.width);
        const imageHeight = Number(req.query.height);

        const fileName: string = path.join(__dirname, '../../assets/resizedImages', `${removeExtension(imageName)}-${imageWidth}x${imageHeight}.jpg`);
        const originImage = path.join(__dirname, '../../assets/uploads', `${imageName}`);
        if (!fs.existsSync(fileName)) {
            const newImage = await imageResize(imageName,imageWidth,imageHeight);

            if (fs.existsSync(originImage)) 
            {
            res.sendFile(newImage);
            console.log('the image saved in /assets/resizedImages');
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
            
            res.sendFile(fileName);
            res.send('the image already exist in /assets/resizedImages');
            console.log('the image already exist /assets/resizedImages');
            res.status(500);
        }
        else 
        {
            res.send('please check the url from README.md again');
            console.log('please check the url from README.md again');
            res.status(600);
        }
    }
    else {
        res.send('The height and width are not correct, please make sure of image name height and width');
        console.log('The height and width are not correct, please make sure of image name height and width');
        res.status(700);
    }
});

export default appRouter