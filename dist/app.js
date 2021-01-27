"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inboxRoutesLogic_1 = require("./class/inboxRoutesLogic");
var createTodoRoutesLogic_1 = require("./class/createTodoRoutesLogic");
var userSignupRoutesLogic_1 = require("./class/userSignupRoutesLogic");
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var body_parser_1 = __importDefault(require("body-parser"));
var path_1 = __importDefault(require("path"));
// const database = require("../utils/database");
var todo_1 = require("./class/todo");
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
app.get("/inbox", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, inbox;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = "600ac39664b8571ed5b8ef2b";
                return [4 /*yield*/, inboxRoutesLogic_1.InboxRoutesLogic.renderInbox(userId)];
            case 1:
                inbox = _a.sent();
                console.log(inbox);
                // pass inbox data
                res.status(200).render("inbox", { inbox: inbox.list });
                return [2 /*return*/];
        }
    });
}); });
app.post("/createTodo", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, notes, priority, scheduledDate, deadline, inbox;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, title = _a.title, notes = _a.notes, priority = _a.priority, scheduledDate = _a.scheduledDate, deadline = _a.deadline;
                // // initialize todo class
                // const todo = new Todo(title, notes, priority, scheduledDate, deadline);
                console.log(req.body);
                return [4 /*yield*/, createTodoRoutesLogic_1.CreateTodoRoutesLogic.create(req)];
            case 1:
                inbox = _b.sent();
                // let inbox = [
                //   new Todo("todo1", "note11111111", 3, new Date(), new Date(), null),
                //   new Todo("todo2", "note2", 2, new Date(), new Date(), null),
                //   new Todo("todo3", "note3", 1, new Date(), new Date(), null),
                //   new Todo(title, notes, priority, scheduledDate, deadline, null),
                // ];
                // const addedTodo = inbox[inbox.length - 1];
                res.redirect("/inbox");
                return [2 /*return*/];
        }
    });
}); });
app.post("/updateTodo", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, todoId, title, notes, priority, scheduledDate, deadline, userId, todo, inboxList;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, todoId = _a.todoId, title = _a.title, notes = _a.notes, priority = _a.priority, scheduledDate = _a.scheduledDate, deadline = _a.deadline;
                userId = "600ac39664b8571ed5b8ef2b";
                console.log(todoId);
                console.log(req.body);
                //- Update の手順
                // - targetTodoIdにマッチする todo schemaをデータベースから読み出す
                // - todo instanceをinitialize
                // - todo schemaをTodoInstanceにセットする
                // - user input(req.body)のデータをtodo instanceにセットする（Update)
                // - todo instanceの内容をtodo schemaに代入（スキーマUpdate)
                // - todo schemaを保存
                try {
                    todo = new todo_1.Todo(title, notes, priority, scheduledDate, deadline, null);
                    todo.updateTodoSchema(todoId);
                }
                catch (error) {
                    console.log(error);
                }
                return [4 /*yield*/, inboxRoutesLogic_1.InboxRoutesLogic.renderInbox(userId)];
            case 1:
                inboxList = _b.sent();
                // let inbox = [
                //   new Todo("todo1", "note11111111", 3, new Date(), new Date(), null),
                //   new Todo("todo2", "note2", 2, new Date(), new Date(), null),
                //   new Todo("todo3", "note3", 1, new Date(), new Date(), null),
                //   new Todo(title, notes, priority, scheduledDate, deadline, null),
                // ];
                // if page is inbox
                res.status(200).render("inbox", { inbox: inboxList.list });
                return [2 /*return*/];
        }
    });
}); });
app.get("/completeTodo/:todoId", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var completedTodoId;
    return __generator(this, function (_a) {
        completedTodoId = req.params.todoId;
        console.log(completedTodoId);
        // -*todo schemaの更新
        // -todo schemaをデータベースから読み出す
        // -todo schemaのisDone fieldをTrueにする
        // *Inboxのlistから当該TOdoスキーマを削除 これはInbox routeで行われた際のアクションであり、もしtoday routeで行われた場合は、inboxではなくtoday list から削除をする
        // - inboxスキーマをデータベースから読み出す
        // -inbox instance をInitialize
        // - instance methodでinbox listから当該todoIdに合致するtodoSchemaを削除（Filter or indexOf & splice)
        // inbox instanceの状態をinbox schemaにセットしデータベースに保存
        // *logbook スキーマのlistにtodo schemaを追加
        res.status(200).json({ a: 2 });
        return [2 /*return*/];
    });
}); });
app.get("/moveToTrash/:todoId", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var movedToTrashTodoId;
    return __generator(this, function (_a) {
        movedToTrashTodoId = req.params.todoId;
        console.log(movedToTrashTodoId);
        res.status(200).json({ a: 3 });
        return [2 /*return*/];
    });
}); });
app.delete("/deleteTodo", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); });
app.get("/activity", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.status(200).render("activity");
        return [2 /*return*/];
    });
}); });
app.post("/user/signup", 
// passport.authenticate("local", {
//   successRedirect: "/",
//   failureRedirect: "/user/signup",
//   failureFlash: "サインアップに失敗しました",
//   successFlash: "サインアップに成功しました",
// }),
function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var SignupLogic;
    return __generator(this, function (_a) {
        SignupLogic = new userSignupRoutesLogic_1.UserSignupRoutesLogic();
        SignupLogic.signup(req);
        res.status(200).json({ res: "signup succeed" });
        return [2 /*return*/];
    });
}); });
app.post("/user/login", 
// passport.authenticate("local", {
//   successRedirect: "/",
//   failureRedirect: "/user/login",
//   failureFlash: "ログインに失敗しました",
//   successFlash: "ログインに成功しました",
// }),
function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // login
        res.redirect("/user/" + "req.user.username");
        return [2 /*return*/];
    });
}); });
app.get("/today", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.status(200).render("today");
        return [2 /*return*/];
    });
}); });
app.get("/whatToDoNext", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.status(200).render("whatToDoNext");
        return [2 /*return*/];
    });
}); });
app.get("/log", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.status(200).render("log");
        return [2 /*return*/];
    });
}); });
app.get("/trashBox", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.status(200).render("trashBox");
        return [2 /*return*/];
    });
}); });
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
