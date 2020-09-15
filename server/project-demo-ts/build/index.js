"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = require("./modules/math");
var fs_1 = __importDefault(require("fs"));
console.log(math_1.Add(10, 20));
fs_1.default.writeFileSync('output.txt', "ts 开发环境");
