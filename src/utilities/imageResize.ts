import path from "path";
import sharp from "sharp";

const imageResize = async (name: string, width: number, height: number): Promise<string> => {
    const originImage = path.join(__dirname, '../../assets/uploads', `${name}`);
    const resizedImage = path.join(__dirname, '../../assets/resizedImages/', `new${width}x${height}${name}`);
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