import mongoose from "mongoose";

const Schema = mongoose.Schema;

const logbookSchema = new Schema({
  list: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
  size: { type: Number },
});

export const logbookModel = mongoose.model("Completed", logbookSchema);
