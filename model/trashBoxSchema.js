const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const trashBoxSchema = new Schema({
  list: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
  size: { type: Number },
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("TrashBox", trashBoxSchema);
