import mongoose, { Document, ObjectId } from "mongoose";

const Schema = mongoose.Schema;
const inboxSchema = new Schema({
  list: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
  size: { type: Number },
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
});

export interface IInboxSchema extends Document {
  list: ObjectId[];
  size: number;
  userId: ObjectId;
}

export const inboxModel = mongoose.model("Inbox", inboxSchema);
