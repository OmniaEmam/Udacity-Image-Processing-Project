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
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const removeExtension_1 = __importDefault(require("./removeExtension"));
const imageResize = (name, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    const originImage = path_1.default.join(__dirname, '../../assets/uploads', `${name}`);
    const resizedImage = path_1.default.join(__dirname, '../../assets/resizedImages', `${(0, removeExtension_1.default)(name)}-${width}x${height}.jpg`);
    try {
        yield (0, sharp_1.default)(originImage)
            .resize({
            width: +`${width}` || 200,
            height: +`${height}` || 200,
            fit: sharp_1.default.fit.fill,
        })
            .toFile(resizedImage);
        return resizedImage;
    }
    catch (error) {
        return originImage;
    }
});
exports.default = imageResize;
