import mongoose from "mongoose";

const Schema = mongoose.Schema;
const todoSchema = new Schema({
  title: { type: String },
  notes: { type: String },
  priority: { type: Number },
  dateCreated: { type: Date, required: true },
  scheduledDate: { type: Date },
  deadline: { type: Date },
  isDone: { type: Boolean },
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
});

export const todoModel = mongoose.model("Todo", todoSchema);
