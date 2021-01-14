const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const trashBoxSchema = new Schema({
  list: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
  size: { type: Number },
});

module.exports = trashBoxSchema.model("TrashBox", trashBoxSchema);
