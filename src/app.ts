import mongoDBSessionStore from "connect-mongodb-session";
import { InboxRoutesLogic } from "./class/inboxRoutesLogic";
import { CreateTodoRoutesLogic } from "./class/createTodoRoutesLogic";
import { UserSignupRoutesLogic } from "./class/userSignupRoutesLogic";
import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import cookieParser from "cookie-parser";
import expressSession from "express-session";
import ejs from "ejs";
import bodyParser from "body-parser";
import path from "path";

// const database = require("../utils/database");

import { Todo } from "./class/todo";
import { NextFunction, Request, Response } from "express-serve-static-core";
import homeRoutes from "./routes/home-routes";
import inboxRoutes from "./routes/inbox-routes";
import todoRooutes from "./routes/todo-rooutes";
import authRoutes from "./routes/auth-routes";
import activityRoutes from "./routes/activity-routes";
import todayRoutes from "./routes/today-routes";
import logbookRoutes from "./routes/logbook-routes";
import trashBoxRoutes from "./routes/trashBox-routes";
import usersRoutes from "./routes/users-routes";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();
const MONGODB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-7slh6.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
// const store = new mongoDBSessionStore({
//   uri: MONGODB_URI,
//   collection: "sessions",
// });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + "/public"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(homeRoutes);
app.use(inboxRoutes);
app.use(todoRooutes);
app.use(activityRoutes);
app.use(authRoutes);
app.use(todayRoutes);
app.use(logbookRoutes);
app.use(trashBoxRoutes);
app.use(usersRoutes);
// app.use(
//   expressSession({
//     secret: `${process.env.SESSION_SECRET}`,
//     resave: false,
//     saveUninitialized: false,
//     store: store,
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

app.use((req, res, next) => {
  res.status(404).render("404");
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-7slh6.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .then(() => {
    app.listen(process.env.PORT || 8080);
  })
  .catch((err) => {
    console.log(err);
  });
