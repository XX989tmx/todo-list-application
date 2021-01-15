const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todaysSchema = new Schema({
  todaysList: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Todays", todaysSchema);
