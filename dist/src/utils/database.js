"use strict";
var mysql2 = require("mysql2");
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
var pool = mysql2.createPool({
    host: "localhost",
    user: "root",
    database: "todo-application",
    password: "" + process.env.MYSQLPASSWORD,
});
module.exports = pool.promise();
