
import mongoose, { Document, ObjectId } from "mongoose";

const Schema = mongoose.Schema;

export interface IUserSchema extends Document {
  name: string | null;
  email: string | null;
  password: string | null;
  todo: ObjectId[] | any[];
  inbox: ObjectId | null;
  today: ObjectId | null;
  project: ObjectId | null;
  logbook: ObjectId | null;
  trashBox: ObjectId | null;
  activity: ObjectId | null;
  lastLoggedIns: Date[] | any[];
}

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  todo: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
  inbox: { type: mongoose.Types.ObjectId, ref: "Inbox" },
  today: { type: mongoose.Types.ObjectId, ref: "Today" },
  project: {type:mongoose.Types.ObjectId, ref:'Project'},
  logbook: { type: mongoose.Types.ObjectId, ref: "Logbook" },
  trashBox: { type: mongoose.Types.ObjectId, ref: "TrashBox" },
  activity: { type: mongoose.Types.ObjectId, ref: "Activity" },
  lastLoggedIns: [{ type: Date }],
});

export const userModel = mongoose.model("User", userSchema);
