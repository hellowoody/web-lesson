/*
 Navicat Premium Data Transfer

 Source Server         : mysql_localhost
 Source Server Type    : MySQL
 Source Server Version : 80018
 Source Host           : localhost:3306
 Source Schema         : shop-app

 Target Server Type    : MySQL
 Target Server Version : 80018
 File Encoding         : 65001

 Date: 17/09/2020 10:14:28
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `desc` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `type` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of goods
-- ----------------------------
BEGIN;
INSERT INTO `goods` VALUES (1, '乔1', 1000.00, 500, '第1代jordan篮球鞋', '篮球鞋');
INSERT INTO `goods` VALUES (2, '乔2', 1001.00, 501, '第2代jordan篮球鞋', '篮球鞋');
INSERT INTO `goods` VALUES (3, '乔3', 1002.00, 502, '第3代jordan篮球鞋', '篮球鞋');
INSERT INTO `goods` VALUES (4, '乔4', 1003.00, 503, '第4代jordan篮球鞋', '篮球鞋');
INSERT INTO `goods` VALUES (5, '乔5', 1004.00, 504, '第5代jordan篮球鞋', '篮球鞋');
INSERT INTO `goods` VALUES (6, '乔6', 1005.00, 505, '第6代jordan篮球鞋', '篮球鞋');
INSERT INTO `goods` VALUES (7, '乔7', 1006.00, 506, '第7代jordan篮球鞋', '篮球鞋');
INSERT INTO `goods` VALUES (8, '乔8', 1007.00, 507, '第8代jordan篮球鞋', '篮球鞋');
INSERT INTO `goods` VALUES (9, '乔9', 1008.00, 508, '第9代jordan篮球鞋', '篮球鞋');
INSERT INTO `goods` VALUES (10, '乔10', 1009.00, 509, '第10代jordan篮球鞋', '篮球鞋');
INSERT INTO `goods` VALUES (11, '乔11', 1010.00, 510, '第11代jordan篮球鞋', '篮球鞋');
INSERT INTO `goods` VALUES (12, '乔12', 1011.00, 511, '第12代jordan篮球鞋', '篮球鞋');
INSERT INTO `goods` VALUES (13, '乔13', 1012.00, 512, '第13代jordan篮球鞋', '篮球鞋');
INSERT INTO `goods` VALUES (14, '乔14', 1013.00, 513, '第14代jordan篮球鞋', '篮球鞋');
INSERT INTO `goods` VALUES (15, '乔15', 1014.00, 514, '第15代jordan篮球鞋', '篮球鞋');
INSERT INTO `goods` VALUES (16, '乔16', 1015.00, 515, '第16代jordan篮球鞋', '篮球鞋');
INSERT INTO `goods` VALUES (17, '乔17', 1016.00, 516, '第17代jordan篮球鞋', '篮球鞋');
INSERT INTO `goods` VALUES (18, '乔18', 1017.00, 517, '第18代jordan篮球鞋', '篮球鞋');
INSERT INTO `goods` VALUES (19, '乔19', 1018.00, 518, '第19代jordan篮球鞋', '篮球鞋');
INSERT INTO `goods` VALUES (20, '乔20', 1019.00, 519, '第20代jordan篮球鞋', '篮球鞋');
INSERT INTO `goods` VALUES (21, '乔21', 1020.00, 520, '第21代jordan篮球鞋', '篮球鞋');
INSERT INTO `goods` VALUES (22, '乔22', 1021.00, 521, '第22代jordan篮球鞋', '篮球鞋');
INSERT INTO `goods` VALUES (23, '乔23', 1022.00, 522, '第23代jordan篮球鞋', '篮球鞋');
INSERT INTO `goods` VALUES (24, '乔24', 1023.00, 523, '第24代jordan篮球鞋', '篮球鞋');
INSERT INTO `goods` VALUES (25, '乔25', 1024.00, 524, '第25代jordan篮球鞋', '篮球鞋');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pwd` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES ('li@mail.com', '李先生', '000000');
INSERT INTO `user` VALUES ('zhang@mail.com', '张三', '000000');
INSERT INTO `user` VALUES ('zhao@mail.com', '兆先生', '000000');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
