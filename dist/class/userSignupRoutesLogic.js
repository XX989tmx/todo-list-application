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
exports.UserSignupRoutesLogic = void 0;
var todo_1 = require("./todo");
var user_1 = require("./user");
var activity_1 = require("./activity");
var inbox_1 = require("./inbox");
var logbook_1 = require("./logbook");
var project_1 = require("./project");
var today_1 = require("./today");
var trashBox_1 = require("./trashBox");
var UserSignupRoutesLogic = /** @class */ (function () {
    function UserSignupRoutesLogic() {
    }
    // User　Schema　インスタンスをInitialize
    // User class instance を initialize
    // req body からUser field をOBD
    // req body のUserDataを元に、User　Class　Instanceにデータをセットする。
    // todoIdをUser　Schema　インスタンスにセット（Nullかダミーデータ）
    // todo schema instance を initialize
    // user id をTodoSchemaにセット
    // today schema instance をInitialize
    // today schema instance のIdを、User　Schema　Instanceにセット
    // user id をToday　Schemaにセット
    // inbox schema instance をInitialize
    // inbox schema instance のIdを　User　Schema　Instanceにセット
    // user id を inbox schema にセット
    // project schema instance をInitialize
    // project schema instance のIdを　User　Schema　Instanceにセット
    // user id を project schema にセット
    // logbook schema instance をInitialize
    // logbook schema instance のIdを　User　Schema　Instanceにセット
    // user id を　logbook schema にセット
    // trashBox Schema Instance をInitialize
    // trashBox Schema Instance のIdを　UserSchema　Instanceにセット
    // user id を　trashBox Schema にセット
    // activity schema instance をInitialize
    // activity schema Instance のIdを　User　Schema　Instanceにセット
    // user id を　activity schema にセット
    //
    // todo schema を保存
    // inbox schema を保存
    // today schemaを保存
    // logbook schema を保存
    // trashBox schema を保存
    // activity schema を保存
    // user schema を保存
    UserSignupRoutesLogic.prototype.signup = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var userSchemaInstance, userClassInstance, userInputsData, updatedUserSchemaInstance, todoSchemaInstance, updatedUserSchemaInstance2, todaySchemaInstance, updatedUserSchemaInstance3, updatedTodaySchema, inboxSchemaInstance, updatedUserSchemaInstance4, updatedInboxSchemaInstance, projectSchemaInstance, updatedUserSchemaInstance5, updatedProjectSchemaInstance, logbookSchemaInstance, updatedUserSchemaInstance6, updatedLogbookSchemaInstance, trashBoxSchemaInstance, updatedUserSchemaInstance7, updatedTrashBoxSchemaInstance, activitySchemaInstance, updatedUserSchemaInstance8, updatedActivitySchemaInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userSchemaInstance = user_1.User.createUserSchema();
                        userClassInstance = new user_1.User();
                        userInputsData = UserSignupRoutesLogic.parseReqBodyFieldOfUserData(req);
                        updatedUserSchemaInstance = UserSignupRoutesLogic.setUserInputsDataToUserSchemaInstance(userInputsData, userSchemaInstance, userClassInstance);
                        todoSchemaInstance = todo_1.Todo.createTodoSchemaInstance();
                        console.log(todoSchemaInstance);
                        updatedUserSchemaInstance2 = UserSignupRoutesLogic.setTodoSchemaIdToUserSchema(todoSchemaInstance, userSchemaInstance);
                        todaySchemaInstance = today_1.Today.createTodaySchemaInstance();
                        updatedUserSchemaInstance3 = user_1.User.setTodayIdToUserSchema(updatedUserSchemaInstance2, todaySchemaInstance);
                        updatedTodaySchema = today_1.Today.setUserIdToTodaySchema(todaySchemaInstance, updatedUserSchemaInstance3);
                        inboxSchemaInstance = inbox_1.Inbox.createInboxSchemaInstance();
                        updatedUserSchemaInstance4 = user_1.User.setInboxIdToUserSchema(updatedUserSchemaInstance3, inboxSchemaInstance);
                        updatedInboxSchemaInstance = inbox_1.Inbox.setUserIdToInboxSchema(inboxSchemaInstance, updatedUserSchemaInstance4);
                        projectSchemaInstance = project_1.Project.createProjectSchemaInstance();
                        updatedUserSchemaInstance5 = user_1.User.setProjectIdToUserSchema(updatedUserSchemaInstance4, projectSchemaInstance);
                        updatedProjectSchemaInstance = project_1.Project.setUserIdToProjectSchema(projectSchemaInstance, updatedUserSchemaInstance5);
                        logbookSchemaInstance = logbook_1.Logbook.createLogbookSchemaInstance();
                        updatedUserSchemaInstance6 = user_1.User.setLogbookIdToUserSchema(updatedUserSchemaInstance5, logbookSchemaInstance);
                        updatedLogbookSchemaInstance = logbook_1.Logbook.setUserIdToLogbookSchema(logbookSchemaInstance, updatedUserSchemaInstance5);
                        trashBoxSchemaInstance = trashBox_1.TrashBox.createTrashBoxSchemaInstance();
                        updatedUserSchemaInstance7 = user_1.User.setTrashBoxIdToUserSchema(updatedUserSchemaInstance6, trashBoxSchemaInstance);
                        updatedTrashBoxSchemaInstance = trashBox_1.TrashBox.setUserIdToTrashBoxSchema(trashBoxSchemaInstance, updatedUserSchemaInstance7);
                        activitySchemaInstance = activity_1.Activity.createActivitySchemaInstance();
                        updatedUserSchemaInstance8 = user_1.User.setActivityIdToUserSchema(updatedUserSchemaInstance7, activitySchemaInstance);
                        updatedActivitySchemaInstance = activity_1.Activity.setUserIdToActivitySchema(activitySchemaInstance, updatedUserSchemaInstance8);
                        console.log("todo");
                        console.log(todoSchemaInstance);
                        console.log("inbox");
                        console.log(updatedInboxSchemaInstance);
                        console.log("today");
                        console.log(todaySchemaInstance);
                        console.log("logbook");
                        console.log(updatedLogbookSchemaInstance);
                        console.log("trashbox");
                        console.log(updatedTrashBoxSchemaInstance);
                        console.log("activity");
                        console.log(updatedActivitySchemaInstance);
                        console.log("user");
                        console.log(updatedUserSchemaInstance8);
                        // 各スキーマをデータベースに保存
                        // todo schema を保存
                        return [4 /*yield*/, todo_1.Todo.saveTodoSchemaToDatabase(todoSchemaInstance)];
                    case 1:
                        // 各スキーマをデータベースに保存
                        // todo schema を保存
                        _a.sent();
                        // inbox schema を保存
                        return [4 /*yield*/, inbox_1.Inbox.saveInboxSchemaToDatabase(updatedInboxSchemaInstance)];
                    case 2:
                        // inbox schema を保存
                        _a.sent();
                        // today schemaを保存
                        return [4 /*yield*/, today_1.Today.saveTodaySchemaToDatabase(todaySchemaInstance)];
                    case 3:
                        // today schemaを保存
                        _a.sent();
                        // logbook schema を保存
                        return [4 /*yield*/, logbook_1.Logbook.saveLogbookSchemaToDatabase(updatedLogbookSchemaInstance)];
                    case 4:
                        // logbook schema を保存
                        _a.sent();
                        // trashBox schema を保存
                        return [4 /*yield*/, trashBox_1.TrashBox.saveTrashBoxSchemaToDatabase(updatedTrashBoxSchemaInstance)];
                    case 5:
                        // trashBox schema を保存
                        _a.sent();
                        // activity schema を保存
                        return [4 /*yield*/, activity_1.Activity.saveActivitySchemaToDatabase(updatedActivitySchemaInstance)];
                    case 6:
                        // activity schema を保存
                        _a.sent();
                        // user schema を保存
                        return [4 /*yield*/, user_1.User.saveUserSchemaToDatabase(updatedUserSchemaInstance8)];
                    case 7:
                        // user schema を保存
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserSignupRoutesLogic.initializeUserSchemaInstance = function () {
        var userSchemaInstance = user_1.User.createUserSchema();
        return userSchemaInstance;
    };
    UserSignupRoutesLogic.initializeUserClassInstance = function () {
        // return new User();
        var userClassInstance = new user_1.User();
        return userClassInstance;
    };
    UserSignupRoutesLogic.parseReqBodyFieldOfUserData = function (req) {
        var _a = req.body, name = _a.name, email = _a.email, password = _a.password;
        var userInputsData = {
            name: name,
            email: email,
            password: password,
        };
        return userInputsData;
    };
    UserSignupRoutesLogic.setUserInputsDataToUserSchemaInstance = function (userInputsData, userSchemaInstance, // any は全てDocument<any>に変更,
    userClassInstance) {
        userClassInstance.name = userInputsData.name;
        userClassInstance.email = userInputsData.email;
        userClassInstance.password = userInputsData.password;
        var updatedUserSchemaInstance = user_1.User.setUserSchema(userSchemaInstance, userClassInstance);
        return updatedUserSchemaInstance;
    };
    UserSignupRoutesLogic.initializeTodoSchemaInstance = function () {
        var todoSchemaInstance = todo_1.Todo.createTodoSchemaInstance();
        return todoSchemaInstance;
    };
    UserSignupRoutesLogic.setTodoSchemaIdToUserSchema = function (todoSchemaInstance, userSchemaInstance) {
        var updatedUserSchemaInstance = user_1.User.setTodoIdToUserSchema(userSchemaInstance, [todoSchemaInstance]);
        return updatedUserSchemaInstance;
    };
    UserSignupRoutesLogic.setUserIdToTodoSchema = function (todoSchemaInstance, userSchemaInstance) {
        var updatedTodoSchemaInstance = todo_1.Todo.setUserIdToTodoSchema(todoSchemaInstance, userSchemaInstance);
        return updatedTodoSchemaInstance;
    };
    UserSignupRoutesLogic.initializeTodaySchemaInstance = function () {
        var todaySchemaInstance = today_1.Today.createTodaySchemaInstance();
        return todaySchemaInstance;
    };
    UserSignupRoutesLogic.setTodaysSchemaIdToUserSchemaInstance = function (todaySchemaInstance, userSchemaInstance) {
        var updatedUserSchemaInstance = user_1.User.setTodayIdToUserSchema(userSchemaInstance, todaySchemaInstance);
        return updatedUserSchemaInstance;
    };
    UserSignupRoutesLogic.setUserIdToTodaysSchema = function (userSchemaInstance, todaySchemaInstance) {
        var updatedTodaySchemaInstance = today_1.Today.setUserIdToTodaySchema(todaySchemaInstance, userSchemaInstance);
        return updatedTodaySchemaInstance;
    };
    UserSignupRoutesLogic.initializeInboxSchemaInstance = function () {
        var inboxSchemaInstance = inbox_1.Inbox.createInboxSchemaInstance();
        return inboxSchemaInstance;
    };
    UserSignupRoutesLogic.setInboxSchemaIdToUserSchemaInstance = function (inboxSchemaInstance, userSchemaInstance) {
        var updatedUserSchemaInstance = user_1.User.setInboxIdToUserSchema(userSchemaInstance, inboxSchemaInstance);
        return updatedUserSchemaInstance;
    };
    UserSignupRoutesLogic.setUserIdToInboxSchema = function (userSchemaInstance, inboxSchemaInstance) {
        var updatedInboxSchemaInstance = inbox_1.Inbox.setUserIdToInboxSchema(inboxSchemaInstance, userSchemaInstance);
        return updatedInboxSchemaInstance;
    };
    UserSignupRoutesLogic.initializeProjectSchemaInstance = function () {
        var projectSchemaInstance = project_1.Project.createProjectSchemaInstance();
        return projectSchemaInstance;
    };
    UserSignupRoutesLogic.setProjectSchemaIdToUserSchemaInstance = function (projectSchemaInstance, userSchemaInstance) {
        var updatedUserSchemaInstance = user_1.User.setProjectIdToUserSchema(userSchemaInstance, projectSchemaInstance);
        return updatedUserSchemaInstance;
    };
    UserSignupRoutesLogic.setUserSchemaIdToProjectSchema = function (userSchemaInstance, projectSchemaInstance) {
        var updatedProjectSchemaInstance = project_1.Project.setUserIdToProjectSchema(projectSchemaInstance, userSchemaInstance);
        return updatedProjectSchemaInstance;
    };
    UserSignupRoutesLogic.initializeLogbookSchemaInstance = function () {
        var logbookSchemaInstance = logbook_1.Logbook.createLogbookSchemaInstance();
        return logbookSchemaInstance;
    };
    UserSignupRoutesLogic.setLogbookSchemaIdToUserSchemaId = function (logbookSchemaInstance, userSchemaInstance) {
        var updatedUserSchemaInstance = user_1.User.setLogbookIdToUserSchema(logbookSchemaInstance, userSchemaInstance);
        return updatedUserSchemaInstance;
    };
    UserSignupRoutesLogic.setUserSchemaIdToLogbookSchema = function (userSchemaInstance, logbookSchemaInstance) {
        var updatedLogbookSchemaInstance = logbook_1.Logbook.setUserIdToLogbookSchema(logbookSchemaInstance, userSchemaInstance);
        return updatedLogbookSchemaInstance;
    };
    return UserSignupRoutesLogic;
}());
exports.UserSignupRoutesLogic = UserSignupRoutesLogic;
