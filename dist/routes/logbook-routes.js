"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logbook_controllers_1 = require("./../controllers/logbook-controllers");
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get("/logbook", logbook_controllers_1.logbookAll);
exports.default = router;
