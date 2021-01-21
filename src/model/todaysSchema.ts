import mongoose from "mongoose";

const Schema = mongoose.Schema;

const todaysSchema = new Schema({
  todaysList: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
});

export const todaysModel = mongoose.model("Todays", todaysSchema);