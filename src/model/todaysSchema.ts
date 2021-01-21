import mongoose, { Document, ObjectId } from "mongoose";

const Schema = mongoose.Schema;

const todaysSchema = new Schema({
  todaysList: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
});

export interface ITodaysSchema extends Document {
  todaysList: ObjectId[];
  userId: ObjectId;
}

export const todaysModel = mongoose.model("Todays", todaysSchema);
