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
exports.Inbox = void 0;
var inboxSchema_1 = require("./../model/inboxSchema");
var todo_1 = require("./todo");
var Inbox = /** @class */ (function () {
    function Inbox(listData, userId) {
        this.list = listData ? listData : [];
        this.size = listData ? listData.length : 0;
        this.userId = userId ? userId : null;
    }
    Inbox.prototype.addNewTodo = function (title, notes, priority, scheduledDate, deadline) {
        var todo = new todo_1.Todo(title, notes, priority, scheduledDate, deadline, null);
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
            var createdInboxSchema, error_1;
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
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, createdInboxSchema];
                }
            });
        });
    };
    Inbox.fetchInboxDataFromDatabase = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var inboxData, error_2, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, inboxSchema_1.inboxModel.find({ userId: userId })];
                    case 1:
                        inboxData = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3:
                        Inbox.InboxSchema = inboxData[0];
                        res = inboxData[0];
                        return [2 /*return*/, res];
                }
            });
        });
    };
    Inbox.prototype.setUserId = function (userId) {
        this.userId = userId;
        return userId;
    };
    Inbox.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Inbox.InboxSchema.save()];
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
    return Inbox;
}());
exports.Inbox = Inbox;
// const inbox = new Inbox();
// console.log(inbox);
// const inbox2 = new Inbox(
//   [
//     { title: "abc", notes: "gggg" },
//     { title: "dadads", notes: "ggggg" },
//   ],
//   "user1"
// );
// console.log(inbox2);
// inbox2.add(new Todo("77777", "77777"));
// console.log(inbox2);
// inbox.addNewTodo('abc123','gggg','now','now');
// inbox.setUserId('eeee')
// console.log(inbox);
// inbox.add(todo);
// inbox.add(todo2);
// console.log(inbox);
// inbox.removeCompletedTodo("12345");
// console.log(inbox);
// console.log(inbox.count);
// console.log(inbox.getAll());
