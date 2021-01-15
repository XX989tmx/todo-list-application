const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  todo: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
  inbox: { type: mongoose.Types.ObjectId, ref: "Inbox" },
  today: { type: mongoose.Type.ObjectId, ref: "Today" },
  project: {type:mongoose.Types.ObjectId, ref:'Project'},
  logbook: { type: mongoose.Types.ObjectId, ref: "Logbook" },
  trashBox: { type: mongoose.Types.ObjectId, ref: "TrashBox" },
  activity: { type: mongoose.Types.ObjectId, ref: "Activity" },
  lastLoggedIns: [{ type: Date }],
});

module.exports = mongoose.model("User", userSchema);
