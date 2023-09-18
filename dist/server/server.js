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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db_1 = __importDefault(require("../db/db"));
const auth_1 = require("../routes/auth");
class Server {
    constructor() {
        this.apiPath = {
            auth: '/auth',
            contract: '/contract'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        this.dbConn();
        this.middlewares();
        this.routes();
    }
    dbConn() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield db_1.default.authenticate();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    routes() {
        this.app.use(this.apiPath.auth, auth_1.authApp);
    }
    middlewares() {
        this.app.use(express_1.default.json());
    }
    listen() {
        this.app.listen(this.port, () => console.log(`RUNNING ON PORT ${this.port}`));
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map