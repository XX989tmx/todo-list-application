"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_controllers_1 = require("./../controllers/user-controllers");
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get('/user/signup_page', user_controllers_1.showSignupPage);
router.get('/user/login_page', user_controllers_1.showLoginPage);
exports.default = router;
