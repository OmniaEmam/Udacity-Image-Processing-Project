"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeExtension(filename) {
    return filename.substring(0, filename.lastIndexOf('.')) || filename;
}
exports.default = removeExtension;
