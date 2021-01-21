"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var projectSchema = new Schema({
    todoLists: [{ type: mongoose_1.default.Types.ObjectId, ref: "Todo" }],
    title: { type: String },
    notes: { type: String },
    isDone: { type: Boolean },
    dateCreated: { type: Date },
    deadLine: { type: Date },
    scheduledDate: { type: Date },
    progressStatus: { type: Number },
    userId: { type: mongoose_1.default.Types.ObjectId, ref: "User" },
});
exports.projectModel = mongoose_1.default.model("Project", projectSchema);
