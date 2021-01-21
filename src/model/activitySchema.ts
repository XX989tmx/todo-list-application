import mongoose, { Document, ObjectId } from "mongoose";

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

export interface IActivitySchema extends Document {
  date: Date;
  accomplishedTodo: ObjectId[];
  accomplishedCount: number;
  productivityScore: number;
  isInRow: boolean;
  inRowDuration: number;
  longestInRowDuration: number;
  userId: ObjectId;
}

export const activityModel = mongoose.model("Activity", activitySchema);
