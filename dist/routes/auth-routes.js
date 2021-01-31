"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
var auth_controllers_1 = require("./../controllers/auth-controllers");
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.post("/auth/signup", [
    express_validator_1.check("name").notEmpty().trim().isLength({ max: 30, min: 5 }),
    express_validator_1.check("email").notEmpty().isEmail().normalizeEmail().trim(),
    express_validator_1.check("password").notEmpty().trim(),
    express_validator_1.check("passwordConfirmation").notEmpty().trim(),
], auth_controllers_1.signup);
router.post("/auth/login", [
    express_validator_1.check("email").notEmpty().isEmail().normalizeEmail().trim(),
    express_validator_1.check("password").notEmpty().trim(),
], auth_controllers_1.login);
exports.default = router;
