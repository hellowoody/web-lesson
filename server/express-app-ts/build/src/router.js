"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var api = __importStar(require("./api"));
var middleware = __importStar(require("./middleware"));
exports.router = function (app) {
    app.get("/", api.rootApi);
    app.get("/api", api.defaultApi);
    app.post("/api/login", api.login);
    app.post("/api/register", api.register);
    app.post("/api/goods", api.goods);
    app.post("/api/visitedgood", api.visitedgood);
    app.post("/api/goodaddcart", api.goodaddcart);
    app.post("/api/createorder", api.createorder);
    app.post("/api/resetcart", api.resetcart);
    app.post("/api/upload", middleware.upload.single("file"), api.upload);
    app.post("/api/test2main", api.test2main);
    app.post("/api/testmainlist", api.testmainlist);
};
