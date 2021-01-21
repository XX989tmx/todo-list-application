import mongoose from "mongoose";

const Schema = mongoose.Schema;

const trashBoxSchema = new Schema({
  list: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
  size: { type: Number },
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
});

export const trashBoxModel = mongoose.model("TrashBox", trashBoxSchema);
