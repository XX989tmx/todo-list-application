"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var todoSchema = new Schema({
    title: { type: String },
    notes: { type: String },
    priority: { type: Number },
    dateCreated: { type: Date, required: true },
    scheduledDate: { type: Date },
    deadline: { type: Date },
    isDone: { type: Boolean },
    userId: { type: mongoose_1.default.Types.ObjectId, ref: "User" },
});
exports.todoModel = mongoose_1.default.model("Todo", todoSchema);
