"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trashBoxModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var trashBoxSchema = new Schema({
    list: [{ type: mongoose_1.default.Types.ObjectId, ref: "Todo" }],
    size: { type: Number },
    userId: { type: mongoose_1.default.Types.ObjectId, ref: "User" },
});
exports.trashBoxModel = mongoose_1.default.model("TrashBox", trashBoxSchema);
