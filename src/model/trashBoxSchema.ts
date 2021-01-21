import mongoose, { Document, ObjectId } from "mongoose";

const Schema = mongoose.Schema;

const trashBoxSchema = new Schema({
  list: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
  size: { type: Number },
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
});

export interface ITrashBoxSchema extends Document {
  list:ObjectId[];
  size:number;
  userId:ObjectId 
}

export const trashBoxModel = mongoose.model("TrashBox", trashBoxSchema);
