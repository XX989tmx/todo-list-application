"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inbox_controllers_1 = require("./../controllers/inbox-controllers");
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get("/inbox", inbox_controllers_1.inboxAll);
exports.default = router;
