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
const express_2 = require("express");
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
const port = 5000;
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, width, height } = req.query;
    let file = `../assets/resizedImages/new${width}x${height}${name}`;
    if (fs_1.default.existsSync(file)) {
        alert("the image already exist");
        console.log("the image already exist");
    }
    else {
        yield (0, sharp_1.default)(path_1.default.join(__dirname, '../assets/uploads', `${name}`))
            .resize({
            width: +`${width}` || 200,
            height: +`${height}` || 200,
            fit: sharp_1.default.fit.fill,
        })
            .toFile(path_1.default.join(__dirname, '../assets/resizedImages', `new${width}x${height}${name}`));
        res.sendFile(path_1.default.join(__dirname, '../assets/resizedImages', `new${width}x${height}${name}`));
        res.status(200);
    }
}));
app.listen(port, () => {
    console.log(`Connected On port : ${port}`);
    app.use('/', express_2.Router);
});
exports.default = app;
