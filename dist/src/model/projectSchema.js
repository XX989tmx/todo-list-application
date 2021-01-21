"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var projectSchema = new Schema({
    todoLists: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
    title: { type: String },
    notes: { type: String },
    isDone: { type: Boolean },
    dateCreated: { type: Date },
    deadLine: { type: Date },
    scheduledDate: { type: Date },
    progressStatus: { type: Number },
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
});
module.exports = mongoose.model("Project", projectSchema);
