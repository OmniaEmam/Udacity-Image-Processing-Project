import path from "path";
import sharp from "sharp";
import removeExtension from "./removeExtension";

const imageResize = async (name: string, width: number, height: number): Promise<string> => {
    const originImage = path.join(__dirname, '../../assets/uploads', `${name}`);
    const resizedImage = path.join(__dirname, '../../assets/resizedImages', `${removeExtension(name)}-${width}x${height}.jpg`);
    try {
        await sharp(originImage)
            .resize({
                width: +`${width}` || 200,
                height: +`${height}` || 200,
                fit: sharp.fit.fill,
            })
            .toFile(resizedImage);
        return resizedImage;
    }
    catch (error) {
        return originImage;
    }
}

export default imageResize;