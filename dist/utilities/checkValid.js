"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkValid = void 0;
const checkValuesNumbers = (arr) => {
    return arr.every((value) => Number.isInteger(value));
};
const checkValid = (query) => {
    const checkWidthAndHeight = [Number(query.width), Number(query.height)];
    return checkValuesNumbers(checkWidthAndHeight);
};
exports.checkValid = checkValid;
