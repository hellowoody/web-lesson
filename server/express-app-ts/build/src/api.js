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
exports.testmainlist = exports.test2main = exports.upload = exports.resetcart = exports.createorder = exports.goodaddcart = exports.visitedgood = exports.goods = exports.register = exports.login = exports.defaultApi = exports.rootApi = void 0;
var crypto_1 = __importDefault(require("crypto"));
var mysql_1 = require("./mysql");
exports.rootApi = function (req, resp) {
    console.log(req.query.a);
    resp.send("hello world!");
};
exports.defaultApi = function (req, resp) {
    resp.send("hello api");
};
exports.login = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var p, res, jsonObj, md5, token;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                p = req.body;
                return [4 /*yield*/, mysql_1.FindFrist("select * from user where id = ? ", [p.id])
                    /**
                     userid password
                    userid 去数据库查询 查看是否存在这个用户
                        存在: 拿到数据库中存储的密码，然和发送来的参数中的密码进行比较
                            相同: 需要把用户的一些完整信息和token(身份认证)返回给前台
                            不相同: 直接返回前端 并发送消息“密码错误”
                        不存在：直接返回前端 并发送消息“无此用户/请注册”
                    */
                ];
            case 1:
                res = _a.sent();
                /**
                 userid password
                userid 去数据库查询 查看是否存在这个用户
                    存在: 拿到数据库中存储的密码，然和发送来的参数中的密码进行比较
                        相同: 需要把用户的一些完整信息和token(身份认证)返回给前台
                        不相同: 直接返回前端 并发送消息“密码错误”
                    不存在：直接返回前端 并发送消息“无此用户/请注册”
                */
                if (res) {
                    jsonObj = JSON.parse(JSON.stringify(res));
                    if (p.pwd === jsonObj.pwd) {
                        md5 = crypto_1.default.createHash('md5');
                        token = md5.update(jsonObj.id + jsonObj.pwd).digest('hex');
                        resp.json({
                            code: 1,
                            msg: "登陆成功",
                            data: {
                                userId: jsonObj.id,
                                userName: jsonObj.name,
                                imgpath: jsonObj.imgpath,
                                token: token
                            }
                        });
                    }
                    else {
                        resp.json({
                            code: 2,
                            msg: "密码不正确",
                            data: ""
                        });
                    }
                }
                else {
                    resp.json({
                        code: 3,
                        msg: "无此用户",
                        data: ""
                    });
                }
                return [2 /*return*/];
        }
    });
}); };
exports.register = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var p, res, jsonObj, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                p = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, mysql_1.Do("insert into user values (?,?,?) ", [p.mail, p.username, p.pwd])];
            case 2:
                res = _a.sent();
                jsonObj = JSON.parse(JSON.stringify(res));
                if (jsonObj.affectedRows === 1) {
                    resp.json({
                        code: 1,
                        msg: "注册成功",
                        data: ""
                    });
                }
                else {
                    resp.json({
                        code: 2,
                        msg: "注册失败(未知原因)",
                        data: ""
                    });
                }
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                resp.json({
                    code: 3,
                    msg: "注册失败",
                    data: {
                        error: error_1
                    }
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.goods = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var p, res, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                p = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, mysql_1.Do("select * from goods where type = ? and name like '%" + p.name + "%' and gooddesc like '%" + p.desc + "%' ", [p.type])];
            case 2:
                res = _a.sent();
                resp.json({
                    code: 1,
                    msg: "",
                    data: res
                });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                resp.json({
                    code: 3,
                    msg: "失败",
                    data: {
                        error: error_2
                    }
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.visitedgood = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var p, res, jsonObj, visitedcount;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                p = req.body;
                return [4 /*yield*/, mysql_1.FindFrist("select * from user_actions where userid =? and goodid =? and type = 1 ", [p.userid, p.goodid])];
            case 1:
                res = _a.sent();
                jsonObj = JSON.parse(JSON.stringify(res)) // 深拷贝  JSON.parse()  JSON.stringify()
                ;
                if (jsonObj && jsonObj.visitedcount) {
                    visitedcount = jsonObj.visitedcount + 1;
                    mysql_1.Do("update user_actions set visitedcount = ? where userid =? and goodid =? and type = 1  ", [visitedcount, p.userid, p.goodid]);
                }
                else {
                    mysql_1.Do("insert into user_actions (userid,goodid,type,visitedcount,sysdate) values (?,?,?,?,(select now())) ", [p.userid, p.goodid, 1, 1]);
                }
                resp.json({
                    code: 1,
                    msg: "成功",
                    data: {}
                });
                return [2 /*return*/];
        }
    });
}); };
exports.goodaddcart = function (req, resp) {
    var p = req.body;
    if (p.num === 0) {
        mysql_1.Do("delete from user_actions where userid= ? and goodid=? and type = 2 ", [p.userid, p.goodid]);
    }
    else {
        mysql_1.DoTx(function (conn) {
            var a = mysql_1.DoNoConn({
                conn: conn,
                sql: "delete from user_actions where userid= ? and goodid=? and type = 2 ",
                params: [p.userid, p.goodid],
            }).then(function () {
                return mysql_1.DoNoConn({
                    conn: conn,
                    sql: "insert into user_actions (userid,goodid,type,num,sysdate) values (?,?,?,?,(select now())) ",
                    params: [p.userid, p.goodid, 2, p.num]
                });
            });
            return [a];
        });
    }
    resp.json({
        code: 1,
        msg: "添加成功",
        data: {}
    });
};
exports.createorder = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var p, md5, date, id_1, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                p = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                md5 = crypto_1.default.createHash('md5');
                date = new Date();
                id_1 = md5.update(date.getUTCMilliseconds().toString()).digest('hex');
                return [4 /*yield*/, mysql_1.DoTx(function (conn) {
                        return [mysql_1.DoNoConn({
                                conn: conn,
                                sql: "insert into `order` values (?,?,?,(select now())) ",
                                params: [id_1, p.userid, 1]
                            }).then(function () {
                                var arr = [];
                                for (var _i = 0, _a = p.orderlist; _i < _a.length; _i++) {
                                    var t = _a[_i];
                                    arr.push(mysql_1.DoNoConn({
                                        conn: conn,
                                        sql: "insert into order_list (orderid,goodid,countbuy,name,gooddesc,price,type,imgpath) values (?,?,?,?,?,?,?,?) ",
                                        params: [id_1, t.id, t.countbuy, t.name, t.gooddesc, t.price, t.type.id, t.imgpath]
                                    }));
                                }
                                return Promise.all(arr);
                            })];
                    })];
            case 2:
                _a.sent();
                resp.json({
                    code: 1,
                    msg: "创建成功",
                    data: {}
                });
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                resp.json({
                    code: 2,
                    msg: "创建订单失败",
                    data: {}
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.resetcart = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var p, res, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                p = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, mysql_1.Do("delete from user_actions where userid= ? and type = 2 ", [p.userid])];
            case 2:
                res = _a.sent();
                resp.json({
                    code: 1,
                    msg: "操作成功",
                    data: res
                });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                resp.json({
                    code: 3,
                    msg: "操作失败",
                    data: {
                        error: error_3
                    }
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.upload = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var filename, userid, res, jsonObj, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                filename = req.file.filename, userid = req.body.userid;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, mysql_1.Do("update user set imgpath = ? where id = ? ", [filename, userid])];
            case 2:
                res = _a.sent();
                jsonObj = JSON.parse(JSON.stringify(res));
                if (jsonObj.affectedRows === 1) {
                    resp.json({
                        code: 1,
                        msg: "上传成功",
                        data: {
                            filename: filename,
                        }
                    });
                }
                else {
                    resp.json({
                        code: 2,
                        msg: "上传失败(未知原因)",
                        data: ""
                    });
                }
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                resp.json({
                    code: 3,
                    msg: "上传失败",
                    data: {
                        error: error_4
                    }
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.test2main = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var p, res, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                p = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, mysql_1.DoTx(function (conn) {
                        var a = mysql_1.DoNoConn({
                            conn: conn,
                            sql: "insert into test_main1 values (?,?) ",
                            params: [p.table1.id, p.table1.name]
                        });
                        var b = mysql_1.DoNoConn({
                            conn: conn,
                            sql: "insert into test_main2 values (?,?) ",
                            params: [p.table2.id, p.table2.name]
                        });
                        return [a, b];
                    })];
            case 2:
                res = _a.sent();
                resp.json(res);
                return [3 /*break*/, 4];
            case 3:
                e_2 = _a.sent();
                resp.json(e_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.testmainlist = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var p, res, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                p = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, mysql_1.DoTx(function (conn) {
                        var md5 = crypto_1.default.createHash('md5');
                        var id = md5.update(p.main).digest('hex');
                        var a = mysql_1.DoNoConn({
                            conn: conn,
                            sql: "insert into test_main values (?,?) ",
                            params: [id, p.main]
                        }).then(function () {
                            var arr = [];
                            for (var _i = 0, _a = p.list; _i < _a.length; _i++) {
                                var item = _a[_i];
                                arr.push(mysql_1.DoNoConn({
                                    conn: conn,
                                    sql: "insert into test_main_list values (?,?,?) ",
                                    params: [item.id, id, item.name]
                                }));
                            }
                            return Promise.all(arr);
                        });
                        return [a];
                    })];
            case 2:
                res = _a.sent();
                resp.json(res);
                return [3 /*break*/, 4];
            case 3:
                e_3 = _a.sent();
                resp.json(e_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
