"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var today_controllers_1 = require("./../controllers/today-controllers");
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get("/today", today_controllers_1.todayAll);
exports.default = router;
