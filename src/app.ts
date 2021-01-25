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

import {
  Todo,
  Inbox,
  Today,
  Project,
  Activity,
  TrashBox,
  Logbook,
} from "./class/todo";
import { NextFunction, Request, Response } from "express-serve-static-core";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();
const MONGODB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-7slh6.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const store = new mongoDBSessionStore({
  uri: MONGODB_URI,
  collection:'sessions'
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + "/public"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  expressSession({
    secret: `${process.env.SESSION_SECRET}`,
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);
// app.use(passport.initialize());
// app.use(passport.session());

app.get("/inbox", async (req: Request, res: Response, next: NextFunction) => {
  // get todo data from database

  //   // initialize todo class
  //   const todo = new Todo("uuu", "www", 3, new Date(), new Date(), false, "1234");
  //   console.log(todo);

  //   const emptyTodoSchemaInstance = Todo.createTodoSchemaInstance();
  //  const settedTodoSchemaInstance = Todo.setTodoSchema(emptyTodoSchemaInstance,todo);
  //  console.log(settedTodoSchemaInstance);

  //   // get inbox data from database

  //   // initialize inbox class
  //   const inbox = new Inbox();

  //   inbox.add(todo);
  //   console.log(inbox);
  let inbox = [
    new Todo("todo1", "note11111111", 3, new Date(), new Date(), null),
    new Todo("todo2", "note2", 2, new Date(), new Date(), null),
    new Todo("todo3", "note3", 1, new Date(), new Date(), null),
  ];
  // const userId = "600ac39664b8571ed5b8ef2b";
  // const inbox = await InboxRoutesLogic.renderInbox(userId);
  // pass inbox data
  res.render("inbox", { inbox: inbox });
});

app.post(
  "/createTodo/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, notes, priority, scheduledDate, deadline } = req.body;

    // // initialize todo class
    // const todo = new Todo(title, notes, priority, scheduledDate, deadline);
    console.log(req.body);

    // // initialize inbox class
    // const inbox = new Inbox();
    // get inbox data from database;
    // initialize inbox class with inbox data;
    // update inbox class with todo data; inbox.addNewTodo(title, notes, priority, scheduledDate, deadline)
    // initialize user class

    // save todo to database
    // todo save
    // user save
    // save inbox to database
    // inbox save
    // user save

    const inbox = await CreateTodoRoutesLogic.create(req);

    // let inbox = [
    //   new Todo("todo1", "note11111111", 3, new Date(), new Date(), null),
    //   new Todo("todo2", "note2", 2, new Date(), new Date(), null),
    //   new Todo("todo3", "note3", 1, new Date(), new Date(), null),
    //   new Todo(title, notes, priority, scheduledDate, deadline, null),
    // ];

    res.status(200).render("inbox", { inbox: inbox.list });
    // res.status(302).redirect("/inbox");
  }
);

app.patch("/updateTodo", async (req, res, next) => {
  const { title, notes, priority, scheduledDate, deadline } = req.body;
  const page = req.query.page;

  // if page is inbox
  res.status(200).render("inbox");
});

app.post("/completeTodo", async (req, res, next) => {
  res.status(200).render("inbox");
});
app.get("/moveToTrash", async (req, res, next) => {
  // move todo into trashBox class
});
app.delete("/deleteTodo", async (req, res, next) => {
  // delete todo doc permanently
});

app.get(
  "/activity",
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).render("activity");
  }
);

app.post(
  "/user/signup",
  // passport.authenticate("local", {
  //   successRedirect: "/",
  //   failureRedirect: "/user/signup",
  //   failureFlash: "サインアップに失敗しました",
  //   successFlash: "サインアップに成功しました",
  // }),
  async (req: Request, res: Response, next: NextFunction) => {
    // singup
    const SignupLogic = new UserSignupRoutesLogic();
    SignupLogic.signup(req);

    res.status(200).json({ res: "signup succeed" });
  }
);

app.post(
  "/user/login",
  // passport.authenticate("local", {
  //   successRedirect: "/",
  //   failureRedirect: "/user/login",
  //   failureFlash: "ログインに失敗しました",
  //   successFlash: "ログインに成功しました",
  // }),
  async (req, res, next) => {
    // login
    res.redirect("/user/" + "req.user.username");
  }
);

app.get("/today", async (req, res, next) => {
  res.status(200).render("today");
});

app.get("/whatToDoNext", async (req, res, next) => {
  res.status(200).render("whatToDoNext");
});

app.get("/log", async (req, res, next) => {
  res.status(200).render("log");
});

app.get("/trashBox", async (req, res, next) => {
  res.status(200).render("trashBox");
});
// database.getConnection((err) => {
//     if (err) console.log(err);
//     connection.release();
// })
// database
//   .execute("SELECT * FROM todo")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

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
