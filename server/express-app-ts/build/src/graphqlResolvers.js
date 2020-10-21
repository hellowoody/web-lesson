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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.goodList = exports.formatOrderdate = exports.countGood = exports.sumPrice = exports.orderStatus = exports.userOrder = exports.goodpop = exports.userCart = exports.userVisited = exports.visitedGoods = exports.user = exports.goodsCategory = exports.categorys = exports.goods = exports.goodtype = exports.good = void 0;
var mysql_1 = require("./mysql");
var moment_1 = __importDefault(require("moment"));
exports.good = function (parent, args, context, info) { return __awaiter(void 0, void 0, void 0, function () {
    var res, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, mysql_1.FindFrist("select * from goods where id = ? ", [args.id])];
            case 1:
                res = _a.sent();
                return [2 /*return*/, res];
            case 2:
                e_1 = _a.sent();
                return [2 /*return*/, e_1];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.goodtype = function (parent, args, context, info) { return __awaiter(void 0, void 0, void 0, function () {
    var res, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, mysql_1.FindFrist("select * from dict_son where id = ? ", [parent.type])];
            case 1:
                res = _a.sent();
                return [2 /*return*/, res];
            case 2:
                e_2 = _a.sent();
                return [2 /*return*/, e_2];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.goods = function (parent, args, context, info) { return __awaiter(void 0, void 0, void 0, function () {
    var sql, res, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                sql = "select * from goods where 1=1 ";
                sql += args.type ? " and type = '" + args.type + "' " : "";
                sql += " and ( 1=1  ";
                sql += args.name ? " and  name like '%" + args.name + "%' " : "";
                sql += args.desc ? " or gooddesc like '%" + args.desc + "%'  " : "";
                sql += " ) ";
                sql += " limit ?,?";
                return [4 /*yield*/, mysql_1.Do(sql, [args.start, args.count])];
            case 1:
                res = _a.sent();
                return [2 /*return*/, res];
            case 2:
                e_3 = _a.sent();
                return [2 /*return*/, e_3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.categorys = function (parent, args, context, info) { return __awaiter(void 0, void 0, void 0, function () {
    var sql, res, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                sql = "select * from dict_son where id in (?) ";
                return [4 /*yield*/, mysql_1.Do(sql, [args.type])];
            case 1:
                res = _a.sent();
                return [2 /*return*/, res];
            case 2:
                e_4 = _a.sent();
                return [2 /*return*/, e_4];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.goodsCategory = function (parent, args, context, info) { return __awaiter(void 0, void 0, void 0, function () {
    var res, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, mysql_1.Do("select * from goods where type = ? limit ? ", [parent.id, args.count])];
            case 1:
                res = _a.sent();
                return [2 /*return*/, res];
            case 2:
                e_5 = _a.sent();
                return [2 /*return*/, e_5];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.user = function (parent, args, context, info) { return __awaiter(void 0, void 0, void 0, function () {
    var res, e_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, mysql_1.FindFrist("select * from user where id = ? ", [args.id])];
            case 1:
                res = _a.sent();
                return [2 /*return*/, res];
            case 2:
                e_6 = _a.sent();
                return [2 /*return*/, e_6];
            case 3: return [2 /*return*/];
        }
    });
}); };
var userVisitedGoods = "select b.*,a.visitedcount from user_actions a,goods b where a.goodid = b.id and a.userid = ? and a.type = 1  order by a.sysdate desc limit ?,? ";
exports.visitedGoods = function (parent, args, context, info) { return __awaiter(void 0, void 0, void 0, function () {
    var res, e_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, mysql_1.Do(userVisitedGoods, [parent.id, args.start, args.count])];
            case 1:
                res = _a.sent();
                return [2 /*return*/, res];
            case 2:
                e_7 = _a.sent();
                return [2 /*return*/, e_7];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.userVisited = function (parent, args, context, info) { return __awaiter(void 0, void 0, void 0, function () {
    var res, e_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, mysql_1.Do(userVisitedGoods, [args.userid, args.start, args.count])];
            case 1:
                res = _a.sent();
                return [2 /*return*/, res];
            case 2:
                e_8 = _a.sent();
                return [2 /*return*/, e_8];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.userCart = function (parent, args, context, info) { return __awaiter(void 0, void 0, void 0, function () {
    var sql, res, e_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                sql = "select b.*,a.num as countbuy from user_actions a,goods b where a.goodid = b.id and a.userid = ? and a.type = 2  order by a.sysdate desc ";
                return [4 /*yield*/, mysql_1.Do(sql, [args.userid])];
            case 1:
                res = _a.sent();
                return [2 /*return*/, res];
            case 2:
                e_9 = _a.sent();
                return [2 /*return*/, e_9];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.goodpop = function (parent, args, context, info) { return __awaiter(void 0, void 0, void 0, function () {
    var sql, res, e_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                sql = "\n            select b.id,b.name,b.price,b.imgpath,b.gooddesc,sum(a.visitedcount) visitedcount,b.type\n            from user_actions a , goods b \n            where a.goodid = b.id GROUP BY b.id,b.name,b.price,b.imgpath,b.gooddesc \n            order by sum(a.visitedcount) desc\n            limit ?\n        ";
                return [4 /*yield*/, mysql_1.Do(sql, [args.count])];
            case 1:
                res = _a.sent();
                return [2 /*return*/, res];
            case 2:
                e_10 = _a.sent();
                return [2 /*return*/, e_10];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.userOrder = function (parent, args, context, info) { return __awaiter(void 0, void 0, void 0, function () {
    var res, e_11;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, mysql_1.Do("select id,status, sysdate orderdate from `order` where userid = ? order by sysdate desc limit ? , ? ", [args.userid, args.start, args.count])];
            case 1:
                res = _a.sent();
                return [2 /*return*/, res];
            case 2:
                e_11 = _a.sent();
                return [2 /*return*/, e_11];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.orderStatus = function (parent, args, context, info) { return __awaiter(void 0, void 0, void 0, function () {
    var res, e_12;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, mysql_1.FindFrist("select * from dict_son where id = ? ", [parent.status])];
            case 1:
                res = _a.sent();
                return [2 /*return*/, res];
            case 2:
                e_12 = _a.sent();
                return [2 /*return*/, e_12];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.sumPrice = function (parent, args, context, info) { return __awaiter(void 0, void 0, void 0, function () {
    var res, jsonObj, e_13;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, mysql_1.FindFrist("select sum(price*countbuy) price from order_list where orderid = ? ", [parent.id])];
            case 1:
                res = _a.sent();
                jsonObj = JSON.parse(JSON.stringify(res));
                return [2 /*return*/, jsonObj.price];
            case 2:
                e_13 = _a.sent();
                return [2 /*return*/, e_13];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.countGood = function (parent, args, context, info) { return __awaiter(void 0, void 0, void 0, function () {
    var res, jsonObj, e_14;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, mysql_1.FindFrist("select count(1) goodcount from order_list where orderid = ? ", [parent.id])];
            case 1:
                res = _a.sent();
                jsonObj = JSON.parse(JSON.stringify(res));
                return [2 /*return*/, jsonObj.goodcount];
            case 2:
                e_14 = _a.sent();
                return [2 /*return*/, e_14];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.formatOrderdate = function (parent, args, context, info) {
    return moment_1.default(parent.orderdate).format("yyyy-MM-DD HH:mm:ss");
};
exports.goodList = function (parent, args, context, info) { return __awaiter(void 0, void 0, void 0, function () {
    var res, e_15;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, mysql_1.Do("select id as orderid, goodid as id,countbuy,name,gooddesc,price,type,imgpath from order_list where orderid = ? ", [parent.id])];
            case 1:
                res = _a.sent();
                return [2 /*return*/, res];
            case 2:
                e_15 = _a.sent();
                return [2 /*return*/, e_15];
            case 3: return [2 /*return*/];
        }
    });
}); };
