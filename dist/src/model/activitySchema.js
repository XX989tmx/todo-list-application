"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var activitySchema = new Schema({
    date: { type: Date },
    accomplishedTodo: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
    accomplishedCount: { type: Number },
    productivityScore: { type: Number },
    isInRow: { type: Boolean },
    inRowDuration: { type: Number },
    longestInRowDuration: { type: Number },
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
});
module.exports = mongoose.model("Activity", activitySchema);
