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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = __importDefault(require("../models/User"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, userPassword } = req.body;
    try {
        const getUser = yield User_1.default.findOne({
            where: {
                email
            }
        });
        if (getUser) {
            const { password } = getUser;
            const comPassword = bcrypt_1.default.compareSync(userPassword, password);
            if (comPassword) {
                delete getUser.dataValues.password;
                return res.json({
                    getUser
                });
            }
            return res.json({
                msg: "Invalid combination of user and password"
            });
        }
        return res.json({
            msg: "User not found"
        });
    }
    catch (error) {
        console.log(error);
        return res.json({
            msg: "Error while loggin."
        });
    }
});
exports.login = login;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, SSN, email, password } = req.body;
    try {
        const bcryptPass = bcrypt_1.default.hashSync(password, 10);
        const createUser = yield User_1.default.create({
            firstName,
            lastName,
            SSN,
            email,
            password: bcryptPass
        });
        return res.json({
            createUser
        });
    }
    catch (error) {
        console.log(error);
        return res.json({
            msg: "Error while registering a user."
        });
    }
});
exports.register = register;
//# sourceMappingURL=authController.js.map