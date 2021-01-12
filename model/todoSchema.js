const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const todoSchema = new Schema({
  title: { type: String },
  notes: { type: String },
  dateCreated: { type: Date, required: true },
  scheduledDate: { type: Date },
  deadline: { type: Date },
  isDone: { type: Boolean },
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Todo", todoSchema);
