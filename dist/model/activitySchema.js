"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activityModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var activitySchema = new Schema({
    date: { type: Date },
    accomplishedTodo: [{ type: mongoose_1.default.Types.ObjectId, ref: "Todo" }],
    accomplishedCount: { type: Number },
    productivityScore: { type: Number },
    isInRow: { type: Boolean },
    inRowDuration: { type: Number },
    longestInRowDuration: { type: Number },
    userId: { type: mongoose_1.default.Types.ObjectId, ref: "User" },
});
exports.activityModel = mongoose_1.default.model("Activity", activitySchema);
