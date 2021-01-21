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
var UserSchema = require("../model/userSchema");
var InboxSchema = require("../model/inboxSchema");
var todo = require("./todo");
var Todo = todo.todo;
var Inbox = todo.inbox;
var user = require("./user");
var User = user.user;
var CreateTodoRoutesLogic = /** @class */ (function () {
    function CreateTodoRoutesLogic() {
    }
    // todoデータを新規作成保存し、User,InboxスキーマのTodoが関連する値を更新し、保存する。その後、Inboxデータを再度読み出し、Inboxページに渡しRerenderする。
    // -Userデータをデータベースから読み出す
    // -Inboxデータをデータベースから読み出す
    //- req.bodyからTodoフィールドの値をOBD
    //- user class instance をinitialize
    // -inbox class instanceをinitialize
    // todo class instanceをinitialize
    // todo class instanceにreq.bodyのTodoフィールドの値をセットする。
    // todo dataの保存処理
    // -todo schema instance をinitialize : createTodoSchemaInstace()
    // -todo schema instance に todo class instance の値をセット：setTodoSchema();
    // -userIdをtodo schema instanceにセット（UserIdをTodoSchemaに関連付け）:setUserIdToTodoSchema();
    // - todo schema instanceをデータベースに保存: saveTodoSchemaToDatabase();
    // inbox dataの更新保存処理
    // -inbox class instanceにInboxDataをセットする：A　set methodでセット　or B inbox class instance initialize時に、InboxDataをセット
    // -inbox class instance　のinbox fieldにTodoSchema　を追加：inbox.addNewTodo(todoSchema);
    // -inbox data(databaseから読み出したInboxData)の各フィールドを、inbox class instanceのそれに更新する for n times: inboxData.x = inbox.x
    // -inbox schemaを保存 saveInboxSchemaToDatabase();
    // user dataの更新保存処理
    //  -user dataのtodo fieldにTodo新規追加：todo schema instance をuser.todo にPush（）
    // -user dataを保存　　saveUserSchemaToDatabase();
    // -inbox fieldについてはRefキーで参照する方式のため、手動更新不要。
    // inbox class instance をReturn
    CreateTodoRoutesLogic.createTodo = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var userData, inboxData, todoInputs, userClassInstance, inboxClassInstance, todoClassInstance, todoSchemaInstance, updatedTodoSchemaInstance, updatedInboxClassInstance, updatedInboxData, updatedUserData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.readUserDataFromDatabase()];
                    case 1:
                        userData = _a.sent();
                        return [4 /*yield*/, this.readInboxDataFromDatabase()];
                    case 2:
                        inboxData = _a.sent();
                        todoInputs = this.parseReqBody(req);
                        return [4 /*yield*/, this.initializeUserClassInstance(userData)];
                    case 3:
                        userClassInstance = _a.sent();
                        return [4 /*yield*/, this.initializeInboxClassInstance(inboxData)];
                    case 4:
                        inboxClassInstance = _a.sent();
                        return [4 /*yield*/, this.initializeTodoClassInstance(todoInputs)];
                    case 5:
                        todoClassInstance = _a.sent();
                        todoSchemaInstance = this.initializeTodoSchemaInstance();
                        updatedTodoSchemaInstance = this.setTodoSchemaInstance(todoSchemaInstance, todoClassInstance);
                        // -userIdをtodo schema instanceにセット（UserIdをTodoSchemaに関連付け）:setUserIdToTodoSchema();
                        // - todo schema instanceをデータベースに保存: saveTodoSchemaToDatabase();
                        return [4 /*yield*/, this.saveTodoSchemaInstance(updatedTodoSchemaInstance)];
                    case 6:
                        // -userIdをtodo schema instanceにセット（UserIdをTodoSchemaに関連付け）:setUserIdToTodoSchema();
                        // - todo schema instanceをデータベースに保存: saveTodoSchemaToDatabase();
                        _a.sent();
                        updatedInboxClassInstance = this.appendTodoSchemaToInboxClassInstance(inboxClassInstance, updatedTodoSchemaInstance);
                        updatedInboxData = this.updateInboxDataWithInboxClassInstance(inboxData, updatedInboxClassInstance);
                        // -inbox schemaを保存 saveInboxSchemaToDatabase();
                        return [4 /*yield*/, this.saveInboxSchemaDataToDatabase(updatedInboxData)];
                    case 7:
                        // -inbox schemaを保存 saveInboxSchemaToDatabase();
                        _a.sent();
                        updatedUserData = this.setTodoSchemaInstanceToUserData(updatedTodoSchemaInstance, userData);
                        // -user dataを保存　　saveUserSchemaToDatabase();
                        return [4 /*yield*/, this.saveUserSchemaDataToDatabase(updatedUserData)];
                    case 8:
                        // -user dataを保存　　saveUserSchemaToDatabase();
                        _a.sent();
                        // -inbox fieldについてはRefキーで参照する方式のため、手動更新不要。
                        // inbox class instance をReturn
                        return [2 /*return*/, updatedInboxClassInstance];
                }
            });
        });
    };
    CreateTodoRoutesLogic.readUserDataFromDatabase = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var userData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, UserSchema.findById(userId)];
                    case 1:
                        userData = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, userData];
                }
            });
        });
    };
    CreateTodoRoutesLogic.readInboxDataFromDatabase = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var inboxData, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, InboxSchema.findById(userId)];
                    case 1:
                        inboxData = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, inboxData];
                }
            });
        });
    };
    CreateTodoRoutesLogic.parseReqBody = function (req) {
        var _a = req.body, title = _a.title, notes = _a.notes, priority = _a.priority, scheduledDate = _a.scheduledDate, deadline = _a.deadline;
        var todoInputs = {
            title: title,
            notes: notes,
            priority: priority,
            scheduledDate: scheduledDate,
            deadline: deadline,
        };
        return todoInputs;
    };
    CreateTodoRoutesLogic.initializeUserClassInstance = function (userData) {
        var userInstance = new User(userData.userId, userData.name, userData.email, userData.password, userData.confirmPassword, userData.todo, userData.inbox, userData.today, userData.logbook, userData.trashBox, userData.activity, userData.lastLoggedIns);
        return userInstance;
    };
    CreateTodoRoutesLogic.initializeInboxClassInstance = function (inboxData) {
        var inboxInstance = new Inbox(inboxData.list, inboxData.userId);
        return inboxInstance;
    };
    CreateTodoRoutesLogic.initializeTodoClassInstance = function (todoInputs, isDone, userId) {
        var todoInstance = new Todo(todoInputs.title, todoInputs.notes, todoInputs.priority, todoInputs.scheduledDate, todoInputs.deadline, isDone, userId);
        return todoInstance;
    };
    CreateTodoRoutesLogic.setTodoClassInstance = function (todoInstance, todoInputs) {
        todoInstance;
    };
    CreateTodoRoutesLogic.initializeTodoSchemaInstance = function () {
        var todoSchemaInstance = Todo.createTodoSchemaInstance();
        return todoSchemaInstance;
    };
    CreateTodoRoutesLogic.setTodoSchemaInstance = function (todoSchemaInstance, todoClassInstance) {
        var todoSchemaInstance = Todo.setTodoSchema(todoSchemaInstance, todoClassInstance);
        return todoSchemaInstance;
    };
    CreateTodoRoutesLogic.saveTodoSchemaInstance = function (todoSchemaInstance) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Todo.saveTodoSchemaToDatabase(todoSchemaInstance)];
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
    CreateTodoRoutesLogic.appendTodoSchemaToInboxClassInstance = function (inboxClassInstance, todoSchema) {
        return inboxClassInstance.add(todoSchema);
    };
    CreateTodoRoutesLogic.updateInboxDataWithInboxClassInstance = function (inboxData, inboxClassInstance) {
        return Inbox.setInboxSchema(inboxData, inboxClassInstance);
    };
    CreateTodoRoutesLogic.saveInboxSchemaDataToDatabase = function (inboxData) {
        return __awaiter(this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Inbox.saveInboxSchemaToDatabase(inboxData)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CreateTodoRoutesLogic.setTodoSchemaInstanceToUserData = function (todoSchemaInstance, userData) {
        userData.todo.push(todoSchemaInstance._id);
        return userData;
    };
    CreateTodoRoutesLogic.saveUserSchemaDataToDatabase = function (userSchemaData) {
        return __awaiter(this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, User.saveUserSchemaToDatabase(userSchemaData)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        console.log(error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return CreateTodoRoutesLogic;
}());
