import mongoose, { Document, ObjectId } from "mongoose";

const Schema = mongoose.Schema;

const logbookSchema = new Schema({
  list: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
  size: { type: Number },
  userId:{type:mongoose.Types.ObjectId,ref:"User"}
});

export interface ILogbookSchema extends Document {
  list: ObjectId[];
  size: number;
  userId:ObjectId
}

export const logbookModel = mongoose.model("Completed", logbookSchema);
