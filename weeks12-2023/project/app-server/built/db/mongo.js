"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
var mongodb_1 = require("mongodb");
var config_json_1 = __importDefault(require("../config.json"));
// mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6
// mongodb://localhost:27017/
// const uri = "mongodb://127.0.0.1:27017"
// const uri = "mongodb://0.0.0.0:27017" 
var uri = config_json_1.default.db_url;
var options = {
    serverSelectionTimeoutMS: 10000, // 10s
};
var createClient = function () {
    return new mongodb_1.MongoClient(uri, options);
};
exports.createClient = createClient;
