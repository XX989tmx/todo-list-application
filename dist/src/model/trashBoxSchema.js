"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var trashBoxSchema = new Schema({
    list: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
    size: { type: Number },
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
});
module.exports = mongoose.model("TrashBox", trashBoxSchema);
