const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const inboxSchema = new Schema({
  list: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
  size: { type: Number },
  userId: { type: mongoose.types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Inbox", inboxSchema);
