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
const app_1 = __importDefault(require("../app"));
const path_1 = __importDefault(require("path"));
const supertest_1 = __importDefault(require("supertest"));
const request = (0, supertest_1.default)(app_1.default);
describe('Test endpoint responses', () => {
    it('should return 200 status code', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/uploads', () => {
            expect(response.status).toEqual(200);
        });
    }));
});
describe('Test that the Resized file is generated', () => {
    it('get ../assets/resizedImages with status of 200', () => {
        request.post('../assets/resizedImages').expect(200);
    });
});
describe('Test the path of save image has called', function () {
    it('should be called', () => {
        app_1.default.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            expect(res.sendFile(path_1.default.join())).toHaveBeenCalled;
        }));
    });
});
describe('Test the path of save image has called', function () {
    it('req.query', () => {
        app_1.default.get('/', (req) => __awaiter(this, void 0, void 0, function* () {
            const { name, width, height } = req.query;
            expect(req.query).toMatch(`http://localhost:5000/?name=${name}.jpg&width=${width}&height=${height}`);
        }));
    });
});
describe('Test the palmtunnel.jpg has resized and save in new${width}x${height}palmtunnel.jpg', () => {
    it('new${width}x${height}palmtunnel.jpg saved in ../assets/resizedImages ', () => {
        app_1.default.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const { width, height } = req.query;
            expect(res.sendFile(path_1.default.join('assets', 'resizedImages', `new${width}x${height}palmtunnel.jpg`))).toBeTruthy();
        }));
    });
});
describe('Test the encenadaport.jpg has resized and save in new${width}x${height}encenadaport.jpg', () => {
    it('new${width}x${height}encenadaport.jpg saved in /resizedImages ', () => {
        app_1.default.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const { width, height } = req.query;
            expect(res.sendFile(path_1.default.join('assets', 'resizedImages', `new${width}x${height}encenadaport.jpg`))).toBeTruthy();
        }));
    });
});
describe('Test the fjord.jpg has resized and save innew${width}x${height}fjord.jpg', () => {
    it('new${width}x${height}fjord.jpg saved in /resizedImages ', () => {
        app_1.default.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const { width, height } = req.query;
            expect(res.sendFile(path_1.default.join('assets', 'resizedImages', `new${width}x${height}fjord.jpg`))).toBeTruthy();
        }));
    });
});
describe('Test the icelandwaterfall.jpg has resized and save in new${width}x${height}icelandwaterfall.jpg', () => {
    it('new${width}x${height}icelandwaterfall.jpg saved in /resizedImages ', () => {
        app_1.default.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const { width, height } = req.query;
            expect(res.sendFile(path_1.default.join('assets', 'resizedImages', `new${width}x${height}icelandwaterfall.jpg`))).toBeTruthy();
        }));
    });
});
describe('Test the santamonica.jpg has resized and save in new${width}x${height}santamonica.jpg', () => {
    it('new${width}x${height}santamonica.jpg saved in /resizedImages ', () => {
        app_1.default.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const { width, height } = req.query;
            expect(res.sendFile(path_1.default.join('assets', 'resizedImages', `new${width}x${height}santamonica.jpg`))).toBeTruthy();
        }));
    });
});
