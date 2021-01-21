import mongoose from "mongoose";

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  todoLists: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
  title: { type: String },
  notes: { type: String },
  isDone: { type: Boolean },
  dateCreated: { type: Date },
  deadLine: { type: Date },
  scheduledDate: { type: Date },
  progressStatus: { type: Number },
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
});

export const projectModel = mongoose.model("Project", projectSchema);
