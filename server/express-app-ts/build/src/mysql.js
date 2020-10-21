"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoTx = exports.FindFrist = exports.DoNoConn = exports.Do = exports.Ping = void 0;
var mysql_1 = require("mysql");
var config = require("../config");
var configDb = {
    connectionLimit: config.db_limit,
    host: config.db_host,
    user: config.db_user,
    password: config.db_password,
    database: config.db_database
};
/*
连接池
*/
var pool = mysql_1.createPool(configDb);
exports.Ping = function () {
    return new Promise(function (reslove, reject) {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
            }
            else {
                connection.ping(function (e) {
                    if (e) {
                        reject(e);
                    }
                    else {
                        console.log("数据库连接成功 ! ");
                        reslove("database response pong ! ");
                    }
                });
            }
        });
    });
};
exports.Do = function (sql, params) {
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
            }
            else {
                connection.query(sql, params, function (err, rows) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(rows);
                        connection.release();
                    }
                });
            }
        });
    });
};
exports.DoNoConn = function (_a) {
    var conn = _a.conn, sql = _a.sql, params = _a.params;
    return new Promise(function (resolve, reject) {
        conn.query(sql, params, function (err, rows) {
            if (err) {
                reject(err);
            }
            else {
                resolve(rows);
            }
        });
    });
};
exports.FindFrist = function (sql, params) {
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
            }
            else {
                connection.query(sql, params, function (err, rows) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(rows.length > 0 ? rows[0] : null);
                        connection.release();
                    }
                });
            }
        });
    });
};
exports.DoTx = function (callback) {
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
            }
            else {
                connection.beginTransaction(function (err) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        var p = callback(connection);
                        Promise.all(p)
                            .then(function () {
                            connection.commit(function (err) {
                                if (err) {
                                    connection.rollback(function () { return console.log("*** this db action rollback! ***"); });
                                    console.error(err);
                                    reject(err);
                                }
                                else {
                                    resolve({
                                        code: 1
                                    });
                                    connection.release();
                                }
                            });
                        })
                            .catch(function (error) {
                            connection.rollback(function () { return console.log("*** this db action rollback! ***"); });
                            console.error(error);
                            reject(error);
                        });
                    }
                });
            }
        });
    });
};
