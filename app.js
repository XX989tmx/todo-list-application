const express = require("express");
const database = require("./utils/database");

const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static(__dirname + "/public"));

app.get("/inbox", (req, res) => {
  res.render("inbox");
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
