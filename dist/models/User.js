"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db/db"));
const sequelize_1 = require("sequelize");
const User = db_1.default.define('User', {
    id: {
        type: sequelize_1.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: sequelize_1.TEXT
    },
    lastName: {
        type: sequelize_1.TEXT
    }
});
exports.default = User;
//# sourceMappingURL=User.js.map