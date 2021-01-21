"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var todaysSchema = new Schema({
    todaysList: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
});
module.exports = mongoose.model("Todays", todaysSchema);
