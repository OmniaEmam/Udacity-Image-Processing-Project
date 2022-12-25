"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appRouter_1 = __importDefault(require("./routes/appRouter"));
const app = (0, express_1.default)();
const port = 5000;
app.use('/api', appRouter_1.default);
app.listen(port, () => {
    console.log(`Connected On port : ${port}`);
});
exports.default = app;
