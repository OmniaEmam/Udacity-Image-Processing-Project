"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkValid = void 0;
const checkValues = (arr, values) => {
    return arr.every((value) => values.indexOf(value) !== -1);
};
const checkValuesNumbers = (arr) => {
    return arr.every((value) => Number.isInteger(value));
};
const checkValid = (query) => {
    const values = ['name', 'width', 'height'];
    const valuesQuery = Object.keys(query);
    const checkWidthAndHeight = [Number(query.width), Number(query.height)];
    return checkValues(values, valuesQuery) && checkValuesNumbers(checkWidthAndHeight);
};
exports.checkValid = checkValid;
