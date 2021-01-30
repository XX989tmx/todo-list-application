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
exports.Todo = void 0;
var todoSchema_1 = require("../model/todoSchema");
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
    Todo.prototype.updateTodoSchema = function (todoId) {
        return __awaiter(this, void 0, void 0, function () {
            var updateObject, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        updateObject = {
                            title: this.title,
                            notes: this.notes,
                            priority: this.priority,
                            scheduledDate: this.scheduledDate,
                            deadline: this.deadline,
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, todoSchema_1.todoModel.findByIdAndUpdate(todoId, updateObject)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 3:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Todo.updateTodoSchema = function (todoId, title, notes, priority, scheduledDate, deadline) {
        return __awaiter(this, void 0, void 0, function () {
            var updateObject, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        updateObject = {
                            title: title,
                            notes: notes,
                            priority: +priority,
                            scheduledDate: scheduledDate,
                            deadline: deadline,
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, todoSchema_1.todoModel.findByIdAndUpdate(todoId, updateObject)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 3:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Todo.getTodoSchema = function (todoId) {
        return __awaiter(this, void 0, void 0, function () {
            var todoSchema, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, todoSchema_1.todoModel.findById(todoId)];
                    case 1:
                        todoSchema = _a.sent();
                        Todo.TodoSchema = todoSchema;
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        console.log(error_5);
                        return [3 /*break*/, 3];
                    case 3:
                        if (!todoSchema) {
                            console.log("error");
                        }
                        return [2 /*return*/, todoSchema];
                }
            });
        });
    };
    Todo.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Todo.TodoSchema.save()];
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
    return Todo;
}());
exports.Todo = Todo;
// todo.set("12345","todo", "buy milk", "2021-1-23", "2021-2-23");
// console.log(todo);
// todo.completeTodo();
// const todo2 = new Todo();
// todo2.set("6789","todo2", "buy milk2", "2021-1-23", "2021-2-23");
// console.log(todo);
// todo.completeTodo();
// console.log(todo);
// const todo3 = new Todo();
// console.log(todo3);
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
