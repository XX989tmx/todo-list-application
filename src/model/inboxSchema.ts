import mongoose from 'mongoose'


const Schema = mongoose.Schema;
const inboxSchema = new Schema({
  list: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
  size: { type: Number },
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
});

export const inboxModel = mongoose.model("Inbox", inboxSchema);
