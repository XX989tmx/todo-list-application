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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrashBox = exports.Logbook = exports.Activity = exports.Project = exports.Inbox = exports.Today = exports.Todo = void 0;
var todoSchema_1 = require("../model/todoSchema");
var todaysSchema_1 = require("../model/todaysSchema");
var inboxSchema_1 = require("../model/inboxSchema");
var projectSchema_1 = require("../model/projectSchema");
var activitySchema_1 = require("../model/activitySchema");
var logbookSchema_1 = require("../model/logbookSchema");
var trashBoxSchema_1 = require("../model/trashBoxSchema");
var Todo = /** @class */ (function () {
    function Todo(title, notes, priority, scheduledDate, deadline, userId) {
        this.id = null;
        this.title = title ? title : null;
        this.notes = notes ? notes : null;
        this.priority = priority ? priority : null;
        this.dateCreated = new Date();
        this.scheduledDate = scheduledDate ? scheduledDate : null;
        this.deadline = deadline ? deadline : null;
        this.isDone = false;
        this.userId = userId ? userId : null;
        this.dateCompleted = null;
    }
    Todo.prototype.set = function (id, title, notes, priority, scheduledDate, deadline, userId) {
        this.id = id ? id : null;
        this.title = title ? title : null;
        this.notes = notes ? notes : null;
        this.priority = priority ? priority : null;
        this.dateCreated = new Date();
        this.scheduledDate = scheduledDate ? new Date(scheduledDate) : null;
        this.deadline = deadline ? new Date(deadline) : null;
        this.isDone = null;
        this.userId = userId ? userId : null;
        this.dateCompleted = null;
        return this;
    };
    Todo.prototype.get = function () {
        return this;
    };
    Todo.prototype.completeTodo = function () {
        this.isDone = true;
        this.dateCompleted = new Date();
        return this;
    };
    Todo.prototype.setPriority = function (priority) {
        this.priority = priority;
        return this;
    };
    Todo.prototype.getPriority = function () {
        return this.priority;
    };
    Todo.prototype.setDeadline = function (deadLine) {
        this.deadline = deadLine;
        return this;
    };
    Todo.prototype.setScheduledDate = function (scheduledDate) {
        this.scheduledDate = scheduledDate;
        return this;
    };
    Todo.prototype.updateTitle = function (title) {
        this.title = title;
        return this;
    };
    Todo.prototype.updateNotes = function (notes) {
        this.notes = notes;
        return this;
    };
    Todo.prototype.updateScheduledDate = function (scheduledDate) {
        this.scheduledDate = scheduledDate;
        return this;
    };
    Todo.prototype.updateDeadline = function (deadLine) {
        this.deadline = deadLine;
        return this;
    };
    Todo.prototype.getRemainingDay = function () {
        var today = new Date();
        var todaysMonth = today.getMonth();
        var todaysDay = today.getDay();
        var deadline = this.deadline;
        var deadlineMonth = deadline.getMonth();
        var remainingDayOfThisMonth;
        var deadLineDay = deadline.getDay();
        if (todaysMonth === deadlineMonth) {
            remainingDayOfThisMonth = +deadLineDay - +todaysDay;
        }
        else {
            // get date count of from today to end of this month;
            // above count + deadlineDay;
            // return this sum
        }
    };
    Todo.prototype.countDownToDeadline = function () {
        return this;
    };
    // インスタンスデータをデータベースに保存する処理 //
    // - todoSchemaインスタンスの作成　createTodoSchemaInstance()
    Todo.createTodoSchemaInstance = function () {
        var todoSchemaInstance = new todoSchema_1.todoModel({
            title: null,
            notes: null,
            priority: null,
            dateCreated: new Date(),
            scheduledDate: null,
            deadline: null,
            isDone: null,
            userId: null,
        });
        return todoSchemaInstance;
    };
    // - todoSchemaインスタンスにTodoインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setTodoSchema()
    Todo.setTodoSchema = function (todoSchemaInstance, todo) {
        todoSchemaInstance.title = todo.title;
        todoSchemaInstance.notes = todo.notes;
        todoSchemaInstance.priority = todo.priority;
        todoSchemaInstance.dateCreated = todo.dateCreated;
        todoSchemaInstance.scheduledDate = todo.scheduledDate;
        todoSchemaInstance.deadline = todo.deadline;
        todoSchemaInstance.isDone = todo.isDone;
        return todoSchemaInstance;
    };
    // - todoSchemaインスタンスにuserIdを保存する処理 setUserIdToTodoSchema(userId)
    Todo.setUserIdToTodoSchema = function (todoSchemaInstance, userSchemaInstance) {
        todoSchemaInstance.userId = userSchemaInstance._id;
        return todoSchemaInstance;
    };
    // - todoSchemaインスタンス(mongooseDocument)を保存する処理　　saveTodoSchemaToDatabase() {doc.save()}
    Todo.saveTodoSchemaToDatabase = function (todoSchemaInstance) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, todoSchemaInstance.save()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Todo.saveToDatabase = function (todo) {
        return __awaiter(this, void 0, void 0, function () {
            var createdTodoSchema, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        createdTodoSchema = new todoSchema_1.todoModel({
                            title: todo.title,
                            notes: todo.notes,
                            priority: todo.priority,
                            dateCreated: todo.dateCreated,
                            scheduledDate: todo.scheduledDate,
                            deadline: todo.deadline,
                            isDone: todo.isDone,
                            userId: todo.userId,
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, createdTodoSchema.save()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 4];
                    case 4: 
                    // initialize user class;
                    // User.saveToDatabase(createdTodoSchema.id); exc static method
                    return [2 /*return*/, this];
                }
            });
        });
    };
    Todo.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this.userId;
    };
    return Todo;
}());
exports.Todo = Todo;
var Today = /** @class */ (function () {
    function Today() {
        this.todaysList = [];
        this.userId = null;
    }
    Today.prototype.getAll = function () {
        return this.todaysList;
    };
    Today.prototype.completeTodo = function (id) {
        for (var i = 0; i < this.todaysList.length; i++) {
            if (this.todaysList[i].toString() === id.toString() &&
                this.todaysList[i].isDone === false) {
                this.todaysList[i].isDone = true;
                this.removeTodoFromToday(id);
                return this.todaysList[i];
            }
        }
    };
    Today.prototype.setTodoAsToday = function (todo) {
        this.todaysList.push(todo);
        return this;
    };
    Today.prototype.removeTodoFromToday = function (id) {
        var target = this.todaysList.findIndex(function (v) { return v._id.toString() === id.toString(); });
        this.todaysList.splice(target, 1);
        return this;
    };
    Today.prototype.empty = function (params) {
        this.todaysList = [];
        return this;
    };
    Today.prototype.count = function () {
        return this.todaysList.length;
    };
    Today.prototype.getTodaysTodoFromAll = function (todoAll) {
        // todoAll = todoDoc[];
        // get todo matched with todays date or scheduled at today from outer list such as inbox or allTodo or schedule class.
        // 起動するごと実行し、todayにスケジュールされたTodoをTodaysListに入れる。
        var today = new Date().getDate();
        for (var _i = 0, todoAll_1 = todoAll; _i < todoAll_1.length; _i++) {
            var todo = todoAll_1[_i];
            var todoDate = todo.scheduledDate.getDate();
            if (todoDate === today) {
                this.todaysList.push(todo);
                // this.size++;
            }
        }
        return this;
    };
    // インスタンスデータをデータベースに保存する処理 //
    // - TodaySchemaインスタンスの作成　createTodaySchemaInstance();
    Today.createTodaySchemaInstance = function () {
        var todaySchemaInstance = new todaysSchema_1.todaysModel({
            todaysList: [],
            userId: null,
        });
        return todaySchemaInstance;
    };
    // - TodaySchemaインスタンスにTodayインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setTodaySchema()
    Today.setTodaySchema = function (todaySchemaInstance, todayInstance) {
        todaySchemaInstance.todaysList = todayInstance.todaysList;
        return todaySchemaInstance;
    };
    // - TodaySchemaインスタンスにuserIdを保存する処理 setUserIdToTodaySchema(userId)
    Today.setUserIdToTodaySchema = function (todaySchemaInstance, userSchemaInstance) {
        todaySchemaInstance.userId = userSchemaInstance._id;
        return todaySchemaInstance;
    };
    // - TodaySchemaインスタンス(mongooseDocument)を保存する処理　　saveTodaySchemaToDatabase() {doc.save()}
    Today.saveTodaySchemaToDatabase = function (todaySchemaInstance) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, todaySchemaInstance.save()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Today.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Today.getTodaysList = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Today.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this.userId;
    };
    return Today;
}());
exports.Today = Today;
var Inbox = /** @class */ (function () {
    function Inbox(listData, userId) {
        this.list = listData ? listData : [];
        this.size = listData ? listData.length : 0;
        this.userId = userId ? userId : null;
    }
    Inbox.prototype.addNewTodo = function (title, notes, priority, scheduledDate, deadline) {
        var todo = new Todo(title, notes, priority, scheduledDate, deadline, null);
        var newTodo = todo;
        // .set(title, notes, priority, scheduledDate, deadline);
        console.log(newTodo);
        this.add(newTodo);
        return this;
    };
    Inbox.prototype.getAll = function () {
        return this.list;
    };
    Inbox.prototype.add = function (todo) {
        this.list.push(todo);
        this.size++;
        return this;
    };
    Inbox.prototype.remove = function (id) {
        var target = this.list.findIndex(function (v) { return v.id.toString() === id.toString(); });
        this.list.splice(target, 1);
        this.size--;
        return this;
    };
    Inbox.prototype.find = function (id) {
        var target = this.list.findIndex(function (v) { return v.id.toString() === id.toString(); });
        return this.list[target];
    };
    Inbox.prototype.count = function () {
        return this.size;
    };
    Inbox.prototype.checkIsDone = function (id) {
        var target;
        for (var i = 0; i < this.list.length; i++) {
            var todo = this.list[i];
            if (this.list[i].id.toString() === id.toString()) {
                if (this.list[i].isDone === true) {
                    return i;
                }
            }
        }
        return false;
    };
    Inbox.prototype.removeCompletedTodo = function (id) {
        var idx = this.checkIsDone(id);
        console.log(idx);
        this.list = this.list.filter(function (v) { return v.isDone !== true; });
        this.size--;
        return this;
    };
    // インスタンスデータをデータベースに保存する処理 //
    // - InboxSchemaインスタンスの作成　createInboxSchemaInstance()
    Inbox.createInboxSchemaInstance = function () {
        var inboxSchemaInstance = new inboxSchema_1.inboxModel({
            list: [],
            size: 0,
            userId: null,
        });
        return inboxSchemaInstance;
    };
    // - InboxSchemaインスタンスにInboxインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setInboxSchema()
    Inbox.setInboxSchema = function (inboxSchemaInstance, inboxInstance) {
        inboxSchemaInstance.list = inboxInstance.list;
        inboxSchemaInstance.size = inboxInstance.size;
        return inboxSchemaInstance;
    };
    // - InboxSchemaインスタンスにuserIdを保存する処理 setUserIdToInboxSchema(userId)
    Inbox.setUserIdToInboxSchema = function (inboxSchemaInstance, userSchemaInstance) {
        inboxSchemaInstance.userId = userSchemaInstance._id;
        return inboxSchemaInstance;
    };
    // - InboxSchemaインスタンス(mongooseDocument)を保存する処理　　saveInboxSchemaToDatabase() {doc.save()};
    Inbox.saveInboxSchemaToDatabase = function (inboxSchemaInstance) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, inboxSchemaInstance.save()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Inbox.saveInboxData = function (inboxInstance) {
        return __awaiter(this, void 0, void 0, function () {
            var createdInboxSchema, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        createdInboxSchema = new inboxSchema_1.inboxModel({
                            list: inboxInstance.list,
                            size: inboxInstance.size,
                            userId: inboxInstance.userId,
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, createdInboxSchema.save()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, createdInboxSchema];
                }
            });
        });
    };
    Inbox.fetchInboxDataFromDatabase = function (inboxId) {
        return __awaiter(this, void 0, void 0, function () {
            var inboxData, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, inboxSchema_1.inboxModel.findById(inboxId)];
                    case 1:
                        inboxData = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        console.log(error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, inboxData];
                }
            });
        });
    };
    Inbox.prototype.setUserId = function (userId) {
        this.userId = userId;
        return userId;
    };
    return Inbox;
}());
exports.Inbox = Inbox;
var Project = /** @class */ (function () {
    function Project(title, notes, deadLine, scheduledDate, userId) {
        this.todoLists = [];
        this.title = title ? title : null;
        this.notes = notes ? notes : null;
        this.isDone = false;
        this.dateCreated = new Date();
        this.deadLine = deadLine ? deadLine : null;
        this.scheduledDate = scheduledDate ? scheduledDate : null;
        this.progressStatus = 0; // 0 - 100;
        this.userId = userId ? userId : null;
    }
    Project.prototype.getProgressStatus = function () {
        return this.progressStatus;
    };
    Project.prototype.getCountOfCompletedTodo = function () {
        var allTodo = this.todoLists;
        var count = 0;
        for (var i = 0; i < allTodo.length; i++) {
            var todo = allTodo[i];
            if (todo.isDone === true) {
                count += 1;
            }
        }
        return count;
    };
    Project.prototype.getCurrentProgressPercentage = function () {
        var totalCount = this.getCountOfTodo();
        var completeTodo = this.getCountOfCompletedTodo();
        var num = Math.floor(totalCount / completeTodo);
        var percentage = Math.floor(100 / num);
        return percentage;
    };
    Project.prototype.updateProgressStatus = function () {
        this.progressStatus = this.getCurrentProgressPercentage();
        return this;
    };
    Project.prototype.complete = function () {
        this.isDone = true;
        return this;
    };
    Project.prototype.addTodo = function (todo) {
        this.todoLists.push(todo);
        return this;
    };
    Project.prototype.removeTodo = function (id) {
        var target = this.todoLists.findIndex(function (v) { return v.id.toString() === id.toString(); });
        this.todoLists.splice(target, 1);
        return this;
    };
    Project.prototype.getDeadline = function () {
        return this.deadLine;
    };
    Project.prototype.updateDeadline = function (deadLine) {
        this.deadLine = deadLine;
        return this;
    };
    Project.prototype.getDateCreated = function () {
        return this.dateCreated;
    };
    Project.prototype.getCountOfTodo = function () {
        return this.todoLists.length;
    };
    Project.prototype.setUserId = function (userId) {
        this.userId = userId;
        return userId;
    };
    // インスタンスデータをデータベースに保存する処理 //
    // - ProjectSchemaインスタンスの作成　createProjectSchemaInstance()
    Project.createProjectSchemaInstance = function () {
        var projectSchemaInstance = new projectSchema_1.projectModel({
            todoLists: [],
            title: null,
            notes: null,
            isDone: null,
            dateCreated: null,
            deadline: null,
            scheduledDate: null,
            progressStatus: null,
            userId: null,
        });
        return projectSchemaInstance;
    };
    // - ProjectSchemaインスタンスにProjectインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setProjectSchema()
    Project.setProjectSchema = function (projectSchemaInstance, projectInstance) {
        projectSchemaInstance.todoLists = projectInstance.todoLists;
        projectSchemaInstance.title = projectInstance.title;
        projectSchemaInstance.notes = projectInstance.notes;
        projectSchemaInstance.isDone = projectInstance.isDone;
        projectSchemaInstance.dateCreated = projectInstance.dateCreated;
        projectSchemaInstance.deadLine = projectInstance.deadLine;
        projectSchemaInstance.scheduledDate = projectInstance.scheduledDate;
        projectSchemaInstance.progressStatus = projectInstance.progressStatus;
        return projectSchemaInstance;
    };
    // - ProjectSchemaインスタンスにuserIdを保存する処理 setUserIdToProjectSchema(userId)
    Project.setUserIdToProjectSchema = function (projectSchemaInstance, userSchemaInstance) {
        projectSchemaInstance.userId = userSchemaInstance._id;
        return projectSchemaInstance;
    };
    // - ProjectSchemaインスタンス(mongooseDocument)を保存する処理　　saveProjectSchemaToDatabase() {doc.save()}
    Project.saveProjectSchemaToDatabase = function (projectSchemaInstance) {
        return __awaiter(this, void 0, void 0, function () {
            var error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, projectSchemaInstance.save()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        console.log(error_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Project;
}());
exports.Project = Project;
var Activity = /** @class */ (function () {
    function Activity() {
        this.id = null;
        this.date = null; // date of today
        this.accomplishedTodo = [];
        this.accomplishedCount = 0;
        this.productivityScore = 0; // 0:none,1:low,2:mid,3:high
        this.isInRowState = false;
        this.inRowDuration = 0;
        this.longestInRowDuration = 0; //n days
        this.userId = null;
    }
    // todoDocあたりがおかしいので変更
    Activity.prototype.set = function (todoDoc, date, accomplishedTodo, userId) {
        this.id = todoDoc.id;
        this.date = this.getToday();
        this.accomplishedTodo = this.setAccomplishedTodo(todoDoc);
        this.accomplishedCount = this.setAccomplishedCount();
        this.productivityScore = this.getProductivityScore();
        this.isInRowState = this.isInRow(todoDoc);
        this.inRowDuration = this.getInRowDuration(todoDoc);
        this.longestInRowDuration = 0;
        this.userId = this.setUserId(userId);
        return this;
    };
    Activity.prototype.setAccomplishedTodo = function (todo) {
        this.accomplishedTodo.push(todo);
        return this.accomplishedTodo;
    };
    Activity.prototype.getToday = function () {
        return new Date();
    };
    Activity.prototype.setAccomplishedCount = function () {
        var count = this.accomplishedTodo.length;
        this.accomplishedCount = count;
        return this.accomplishedCount;
    };
    Activity.prototype.getAccomplishedCount = function () {
        return this.setAccomplishedCount();
    };
    Activity.prototype.setProductivityScore = function () {
        this.productivityScore = this.getAccomplishedCount();
        return this.productivityScore;
    };
    Activity.prototype.getProductivityScore = function () {
        return this.setProductivityScore();
    };
    Activity.prototype.isInRow = function (todoDoc) {
        var id = todoDoc.id;
        var oldToNewSortedArr = this.accomplishedTodo.sort(function (a, b) { return a.dateCompleted - b.dateCompleted; });
        var count = 0;
        // for (let i = id; i < oldToNewSortedArr.length; i--) {
        //   if (oldToNewSortedArr[i].productivityScore > 10) {
        //     count += 1;
        //   }
        // }
        if (count > 1) {
            return true;
        }
        else {
            return false;
        }
    };
    Activity.prototype.getInRowDuration = function (todoDoc) {
        var id = todoDoc.id;
        var oldToNewSortedArr = this.accomplishedTodo.sort(function (a, b) { return a.dateCompleted - b.dateCompleted; });
        var idxOfTargetDocId;
        for (var i = 0; i < this.accomplishedTodo.length; i++) {
            if (this.accomplishedTodo[i].id.toString() === id.toString()) {
                idxOfTargetDocId = this.accomplishedTodo[i].id.toString();
            }
        }
        var count = 0;
        // for (let i = idxOfTargetDocId; i < oldToNewSortedArr.length; i--) {
        //   if (oldToNewSortedArr[i].productivityScore > 10) {
        //     count += 1;
        //   } else {
        //     break;
        //   }
        // }
        return count;
    };
    Activity.prototype.getLongestInRowDuration = function (todoDoc) {
        var id = todoDoc.id;
        var oldToNewSortedArr = this.accomplishedTodo.sort(function (a, b) { return a.dateCompleted - b.dateCompleted; });
        var idxOfTargetDocId;
        if (id !== null) {
            for (var i = 0; i < this.accomplishedTodo.length; i++) {
                if (this.accomplishedTodo[i].id.toString() === id.toString()) {
                    idxOfTargetDocId = this.accomplishedTodo[i].id.toString();
                }
            }
        }
        var countArr = [];
        var count = 0;
        // for (let i = idxOfTargetDocId; i < oldToNewSortedArr.length; i--) {
        //   if (oldToNewSortedArr[i].productivityScore > 10) {
        //     count += 1;
        //   } else {
        //     countArr.push(count);
        //     count = 0;
        //   }
        // }
        // const maxInRow = Math.max(...countArr);
        // return maxInRow;
    };
    Activity.saveToDatabase = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // save to database
                return [2 /*return*/, this];
            });
        });
    };
    Activity.getAllFromDatabase = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this];
            });
        });
    };
    Activity.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this.userId;
    };
    // インスタンスデータをデータベースに保存する処理 //
    // - ActivitySchemaインスタンスの作成　createActivitySchemaInstance()
    Activity.createActivitySchemaInstance = function () {
        var activitySchemaInstance = new activitySchema_1.activityModel({
            date: null,
            accomplishedTodo: [],
            accomplishedCount: 0,
            productivityScore: 0,
            isInRow: null,
            inRowDuration: null,
            longestInRowDuration: 0,
            userId: null,
        });
        return activitySchemaInstance;
    };
    // - ActivitySchemaインスタンスにActivityインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setActivitySchema()
    Activity.setActivitySchema = function (activitySchemaInstance, activityInstance) {
        activitySchemaInstance.date = activityInstance.date;
        activitySchemaInstance.accomplishedTodo = activityInstance.accomplishedTodo;
        activitySchemaInstance.accomplishedCount =
            activityInstance.accomplishedCount;
        activitySchemaInstance.productivityScore =
            activityInstance.productivityScore;
        activitySchemaInstance.isInRow = activityInstance.isInRowState;
        activitySchemaInstance.inRowDuration = activityInstance.inRowDuration;
        activitySchemaInstance.longestInRowDuration =
            activityInstance.longestInRowDuration;
        return activitySchemaInstance;
    };
    // - ActivitySchemaインスタンスにuserIdを保存する処理 setUserIdToActivitySchema(userId)
    Activity.setUserIdToActivitySchema = function (activitySchemaInstance, userSchemaInstance) {
        activitySchemaInstance.userId = userSchemaInstance._id;
        return activitySchemaInstance;
    };
    // - ActivitySchemaインスタンス(mongooseDocument)を保存する処理　　saveActivitySchemaToDatabase() {doc.save()}
    Activity.saveActivitySchemaToDatabase = function (activitySchemaInstance) {
        return __awaiter(this, void 0, void 0, function () {
            var error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, activitySchemaInstance.save()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_7 = _a.sent();
                        console.log(error_7);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Activity;
}());
exports.Activity = Activity;
var Logbook = /** @class */ (function () {
    function Logbook() {
        this.list = [];
        this.size = 0;
    }
    Logbook.prototype.set = function (completedTodoList) {
        this.list = completedTodoList;
        this.size = this.list.length;
        return this;
    };
    Logbook.prototype.get = function () {
        return this;
    };
    Logbook.prototype.add = function (completedTodo) {
        this.list.push(completedTodo);
        this.size++;
        return this;
    };
    Logbook.prototype.organizeByDate = function (order) {
        var list = this.list;
        var res = {};
        var currentDate;
        var completedTodo = [];
        for (var i = 0; i < list.length; i++) {
            var element = list[i];
            var nextElement = list[i + 1];
            currentDate = element.dateCompleted;
            completedTodo.push(element);
            if (currentDate !== nextElement.dateCompleted) {
                res[currentDate] = completedTodo;
                completedTodo = [];
                currentDate = nextElement.dateCompleted;
                continue;
            }
        }
        return res;
    };
    Logbook.prototype.sortByDate = function (order) {
        // 0 ase 1 des
        var list = this.list;
        if (order === 0) {
            // ase
            list.sort(function (a, b) { return a.dateCompleted - b.dateCompleted; });
        }
        else {
            // des
            list.sort(function (a, b) { return b.dateCompleted - a.dateCompleted; });
        }
        return list;
    };
    Logbook.saveToDatabase = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // save
                return [2 /*return*/, this];
            });
        });
    };
    Logbook.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // get all doc from database;
                return [2 /*return*/, this];
            });
        });
    };
    // インスタンスデータをデータベースに保存する処理 //
    // - LogbookSchemaインスタンスの作成　createLogbookSchemaInstance()
    Logbook.createLogbookSchemaInstance = function () {
        var logbookSchemaInstance = new logbookSchema_1.logbookModel({
            list: [],
            size: 0,
        });
        return logbookSchemaInstance;
    };
    // - LogbookSchemaインスタンスにLogbookインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setLogbookSchema()
    Logbook.setLogbookSchema = function (logbookSchemaInstance, logbookInstance) {
        logbookSchemaInstance.list = logbookInstance.list;
        logbookSchemaInstance.size = logbookInstance.size;
        return logbookSchemaInstance;
    };
    // - LogbookSchemaインスタンスにuserIdを保存する処理 setUserIdToLogbookSchema(userId)
    Logbook.setUserIdToLogbookSchema = function (logbookSchemaInstance, userSchemaInstance) {
        logbookSchemaInstance.userId = userSchemaInstance._id;
        return logbookSchemaInstance;
    };
    // - LogbookSchemaインスタンス(mongooseDocument)を保存する処理　　saveLogbookSchemaToDatabase() {doc.save()}
    Logbook.saveLogbookSchemaToDatabase = function (logbookSchemaInstance) {
        return __awaiter(this, void 0, void 0, function () {
            var error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, logbookSchemaInstance.save()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_8 = _a.sent();
                        console.log(error_8);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Logbook;
}());
exports.Logbook = Logbook;
var TrashBox = /** @class */ (function () {
    function TrashBox() {
        this.list = [];
        this.size = 0;
    }
    TrashBox.prototype.set = function (list) {
        this.list = list;
        this.size = this.list.length;
        return this;
    };
    TrashBox.prototype.putBack = function (id, destName, destObj) {
        //todo Today のtodaysListをlistに変更する。全てlistで一貫させる destObjをToday,Inbox,Project全てに対応できるように
        var targetTodo = this.find(id);
        var oldLength = destObj.list.length;
        switch (destName) {
            case "inbox":
                destObj.list.push(targetTodo);
                if (destObj.list.length === oldLength + 1) {
                    this.remove(id);
                }
                break;
            case "today":
                destObj.todaysList.push(targetTodo);
                if (destObj.list.length === oldLength + 1) {
                    this.remove(id);
                }
                break;
            default:
                break;
        }
        return this;
    };
    TrashBox.prototype.find = function (id) {
        var target = this.list.findIndex(function (v) { return v.id.toString() === id.toString(); });
        return this.list[target];
    };
    TrashBox.prototype.remove = function (id) {
        var updated = this.list.filter(function (v) {
            return v.id.toString() !== id.toString();
        });
        this.list = updated;
        this.size--;
        return this;
    };
    TrashBox.prototype.getSize = function () {
        return this.list.length;
    };
    TrashBox.prototype.empty = function () {
        this.list = [];
        this.size = 0;
        return this;
    };
    TrashBox.saveToDatabase = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // save
                return [2 /*return*/, this];
            });
        });
    };
    TrashBox.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // get all doc from database;
                return [2 /*return*/, this];
            });
        });
    };
    // インスタンスデータをデータベースに保存する処理 //
    // - TrashBoxSchemaインスタンスの作成　createTrashBoxSchemaInstance()
    TrashBox.createTrashBoxSchemaInstance = function () {
        var trashBoxSchemaInstance = new trashBoxSchema_1.trashBoxModel({
            list: [],
            size: 0,
        });
        return trashBoxSchemaInstance;
    };
    // - TrashBoxSchemaインスタンスにTrashBoxインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setTrashBoxSchema()
    TrashBox.setTrashBoxSchema = function (trashBoxSchemaInstance, trashBoxInstance) {
        trashBoxSchemaInstance.list = trashBoxInstance.list;
        trashBoxSchemaInstance = trashBoxInstance.size;
        return trashBoxSchemaInstance;
    };
    // - TrashBoxSchemaインスタンスにuserIdを保存する処理 setUserIdToTrashBoxSchema(userId)
    TrashBox.setUserIdToTrashBoxSchema = function (trashBoxSchemaInstance, userSchemaInstance) {
        trashBoxSchemaInstance.userId = userSchemaInstance._id;
        return trashBoxSchemaInstance;
    };
    // - TrashBoxSchemaインスタンス(mongooseDocument)を保存する処理　　saveTrashBoxSchemaToDatabase() {doc.save()}
    TrashBox.saveTrashBoxSchemaToDatabase = function (trashBoxSchemaInstance) {
        return __awaiter(this, void 0, void 0, function () {
            var error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, trashBoxSchemaInstance.save()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_9 = _a.sent();
                        console.log(error_9);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return TrashBox;
}());
exports.TrashBox = TrashBox;
var WhatToDoNext = /** @class */ (function () {
    function WhatToDoNext() {
    }
    return WhatToDoNext;
}());
var Schedule = /** @class */ (function () {
    function Schedule() {
    }
    return Schedule;
}());
var Upcoming = /** @class */ (function () {
    function Upcoming() {
    }
    return Upcoming;
}());
var Anytime = /** @class */ (function () {
    function Anytime() {
    }
    return Anytime;
}());
var Someday = /** @class */ (function () {
    function Someday() {
    }
    return Someday;
}());
// export const todo = Todo;
// export const inbox = Inbox;
// export const today = Today;
// export const project = Project;
// export const activity = Activity;
// export const trashBox = TrashBox;
// export const logbook = Logbook;
