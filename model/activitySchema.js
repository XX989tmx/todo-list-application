const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  date: { type: Date },
  accomplishedTodo: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
  accomplishedCount: { type: Number },
  productivityScore: { type: Number },
  isInRow: { type: Boolean },
  inRowDuration: { type: Number },
  longestInRowDuration: { type: Number },
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
});

module.exports = activitySchema.model("Activity", activitySchema);