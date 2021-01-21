"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    todo: [{ type: mongoose_1.default.Types.ObjectId, ref: "Todo" }],
    inbox: { type: mongoose_1.default.Types.ObjectId, ref: "Inbox" },
    today: { type: mongoose_1.default.Types.ObjectId, ref: "Today" },
    project: { type: mongoose_1.default.Types.ObjectId, ref: 'Project' },
    logbook: { type: mongoose_1.default.Types.ObjectId, ref: "Logbook" },
    trashBox: { type: mongoose_1.default.Types.ObjectId, ref: "TrashBox" },
    activity: { type: mongoose_1.default.Types.ObjectId, ref: "Activity" },
    lastLoggedIns: [{ type: Date }],
});
exports.userModel = mongoose_1.default.model("User", userSchema);
