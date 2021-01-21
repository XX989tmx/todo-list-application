"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var logbookSchema = new Schema({
    list: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
    size: { type: Number },
});
module.exports = mongoose.model("Completed", logbookSchema);
