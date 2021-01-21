"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var inboxSchema = new Schema({
    list: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
    size: { type: Number },
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
});
module.exports = mongoose.model("Inbox", inboxSchema);
