const express = require("express");
const database = require("./utils/database");
const todoFile = require("./class/todo");
const Todo = todoFile.todo;
const Inbox = todoFile.inbox;

const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static(__dirname + "/public"));

app.get("/inbox", async (req, res, next) => {
  // get todo data from database

  // initialize todo class
  const todo = new Todo("uuu", "www", 3);
  console.log(todo);
  // get inbox data from database

  // initialize inbox class
  const inbox = new Inbox();

  inbox.add(todo);
  console.log(inbox);

  // pass inbox data
  res.render("inbox", { inbox });
});

app.post("/createTodo", async (req, res, next) => {
  const { title, notes, priority, scheduledDate, deadline } = req.body;

  // initialize todo class
  const todo = new Todo(title, notes, priority, scheduledDate, deadline);

  // initialize inbox class
  const inbox = new Inbox();
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

  res.status(200).render("inbox");
  // res.status(302).redirect("/inbox");
});

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

app.post("/user/signup", async (req, res, next) => {
  // singup
});

app.post("/user/login", async (req, res, next) => {
  // login
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

app.listen(8080);
