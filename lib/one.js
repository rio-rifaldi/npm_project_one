"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplyAll = exports.multiply = void 0;
const multiply = (a, b) => {
    return a * b;
};
exports.multiply = multiply;
const multiplyAll = (number) => {
    return number.reduce((acc, cur) => acc * cur);
};
exports.multiplyAll = multiplyAll;
