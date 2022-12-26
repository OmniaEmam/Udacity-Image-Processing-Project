"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const checkValid_1 = require("../utilities/checkValid");
const imageResize_1 = __importDefault(require("../utilities/imageResize"));
const appRouter = express_1.default.Router();
appRouter.get('/uploads', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if ((0, checkValid_1.checkValid)(req.query)) {
        const imageName = req.query.name;
        const imageWidth = Number(req.query.width);
        const imageHeight = Number(req.query.height);
        const fileName = path_1.default.join(__dirname, '../../assets/resizedImages/', `new${imageWidth}x${imageHeight}${imageName}`);
        if (!fs_1.default.existsSync(fileName)) {
            const newImage = yield (0, imageResize_1.default)(imageName, imageWidth, imageHeight);
            if (!String(newImage).includes('Error')) {
                res.sendFile(newImage);
                res.status(200);
            }
            else {
                res.send('There is an error , please make sure of image name');
                console.log('There is an error , please make sure of image name');
                res.status(404);
            }
        }
        else if (fs_1.default.existsSync(fileName)) {
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
}));
exports.default = appRouter;
