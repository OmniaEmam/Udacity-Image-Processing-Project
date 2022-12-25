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
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const alert_1 = __importDefault(require("alert"));
const checkValid_1 = require("../utilities/checkValid");
const appRouter = express_1.default.Router();
appRouter.get('/uploads', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if ((0, checkValid_1.checkValid)(req.query)) {
        const { name, width, height } = req.query;
        const fileName = path_1.default.join(__dirname, '../../assets/resizedImages/', `new${width}x${height}${name}`);
        if (!fs_1.default.existsSync(fileName)) {
            yield (0, sharp_1.default)(path_1.default.join(__dirname, '/uploads', `${name}`))
                .resize({
                width: +`${width}` || 200,
                height: +`${height}` || 200,
                fit: sharp_1.default.fit.fill,
            })
                .toFile(path_1.default.join(__dirname, '../../assets/resizedImages/', `new${width}x${height}${name}`));
            res.sendFile(path_1.default.join(__dirname, '../../assets/resizedImages/', `new${width}x${height}${name}`));
            res.status(200);
        }
        else {
            res.sendFile(fileName);
            (0, alert_1.default)('the image already exist');
            console.log('the image already exist');
            res.status(200);
        }
    }
    else {
        (0, alert_1.default)('The height and width are not correct');
        console.log('The height and width are not correct');
        res.status(404);
    }
}));
exports.default = appRouter;
