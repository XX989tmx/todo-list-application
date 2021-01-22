import mongoose, { Document, ObjectId } from "mongoose";

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: { type: String },
  notes: { type: String },
  priority: { type: Number },
  dateCreated: { type: Date },
  scheduledDate: { type: Date },
  deadline: { type: Date },
  isDone: { type: Boolean },
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
});

export interface ITodoSchema extends Document {
  title: string;
  notes: string;
  priority: number;
  dateCreated: Date;
  scheduledDate: Date;
  deadline: Date;
  isDone: boolean;
  userId: ObjectId;
}

export const todoModel = mongoose.model("Todo", todoSchema);
