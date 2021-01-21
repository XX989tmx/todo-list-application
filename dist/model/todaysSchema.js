"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todaysModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var todaysSchema = new Schema({
    todaysList: [{ type: mongoose_1.default.Types.ObjectId, ref: "Todo" }],
    userId: { type: mongoose_1.default.Types.ObjectId, ref: "User" },
});
exports.todaysModel = mongoose_1.default.model("Todays", todaysSchema);
