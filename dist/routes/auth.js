"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authApp = void 0;
const express_1 = require("express");
const authController_1 = require("../controller/authController");
exports.authApp = (0, express_1.Router)();
exports.authApp.post('/login', authController_1.login);
exports.authApp.post('/register', authController_1.register);
//# sourceMappingURL=auth.js.map