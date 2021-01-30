"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_controllers_1 = require("./../controllers/auth-controllers");
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.post("/auth/signup", auth_controllers_1.signup);
router.post("/auth/login", auth_controllers_1.login);
exports.default = router;
