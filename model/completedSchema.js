const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const completedSchema = new Schema({
  list: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
  size: { type: Number },
});

module.exports = completedSchema.model("Completed", completedSchema);
