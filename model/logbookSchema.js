const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const logbookSchema = new Schema({
  list: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
  size: { type: Number },
});

module.exports = logbookSchema.model("Completed", logbookSchema);
