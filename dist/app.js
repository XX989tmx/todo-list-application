"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var body_parser_1 = __importDefault(require("body-parser"));
var path_1 = __importDefault(require("path"));
var home_routes_1 = __importDefault(require("./routes/home-routes"));
var inbox_routes_1 = __importDefault(require("./routes/inbox-routes"));
var todo_rooutes_1 = __importDefault(require("./routes/todo-rooutes"));
var auth_routes_1 = __importDefault(require("./routes/auth-routes"));
var activity_routes_1 = __importDefault(require("./routes/activity-routes"));
var today_routes_1 = __importDefault(require("./routes/today-routes"));
var logbook_routes_1 = __importDefault(require("./routes/logbook-routes"));
var trashBox_routes_1 = __importDefault(require("./routes/trashBox-routes"));
var users_routes_1 = __importDefault(require("./routes/users-routes"));
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
var app = express_1.default();
var MONGODB_URI = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASSWORD + "@cluster0-7slh6.mongodb.net/" + process.env.DB_NAME + "?retryWrites=true&w=majority";
// const store = new mongoDBSessionStore({
//   uri: MONGODB_URI,
//   collection: "sessions",
// });
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "views"));
app.use(express_1.default.static(__dirname + "/public"));
app.use(cookie_parser_1.default());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(home_routes_1.default);
app.use(inbox_routes_1.default);
app.use(todo_rooutes_1.default);
app.use(activity_routes_1.default);
app.use(auth_routes_1.default);
app.use(today_routes_1.default);
app.use(logbook_routes_1.default);
app.use(trashBox_routes_1.default);
app.use(users_routes_1.default);
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
app.use(function (req, res, next) {
    res.status(404).render("404");
});
mongoose_1.default
    .connect("mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASSWORD + "@cluster0-7slh6.mongodb.net/" + process.env.DB_NAME + "?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(function () {
    app.listen(process.env.PORT || 8080);
})
    .catch(function (err) {
    console.log(err);
});
