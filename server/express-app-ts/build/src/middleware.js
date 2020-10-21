"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
//配置multer的内容
exports.upload = multer_1.default({
    storage: multer_1.default.diskStorage({
        // destination(req,file,callback){
        //     callback(null,"assets/uploads")
        // },
        destination: "assets/uploads",
        filename: function (req, file, callback) {
            var extname = path_1.default.extname(file.originalname); //获取上传文件名的文件后缀（格式）
            callback(null, Date.now() + extname);
        },
    })
});
