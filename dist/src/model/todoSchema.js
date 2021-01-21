"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var todoSchema = new Schema({
    title: { type: String },
    notes: { type: String },
    priority: { type: Number },
    dateCreated: { type: Date, required: true },
    scheduledDate: { type: Date },
    deadline: { type: Date },
    isDone: { type: Boolean },
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
});
module.exports = mongoose.model("Todo", todoSchema);
