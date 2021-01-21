"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_1 = require("./todo");
var user_1 = require("./user");
// const TodoSchema = require("../model/todoSchema");
// const UserSchema = require("../model/userSchema");
// const InboxSchema = require("../model/inboxSchema");
// const TodaysSchema = require("../model/todaysSchema");
// const LogbookSchema = require("../model/logbookSchema");
// const ActivitySchema = require("../model/activitySchema");
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
    UserSignupRoutesLogic.signup = function () { };
    UserSignupRoutesLogic.initializeUserSchemaInstance = function () {
        var userSchemaInstance = user_1.User.createUserSchema();
        return userSchemaInstance;
    };
    UserSignupRoutesLogic.initializeUserClassInstance = function () {
        // return new User();
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
    UserSignupRoutesLogic.setUserInputsDataToUserSchemaInstance = function (userInputsData, userSchemaInstance, userClassInstance) {
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
        var todaySchemaInstance = todo_1.Today.createTodaySchemaInstance();
        return todaySchemaInstance;
    };
    UserSignupRoutesLogic.setTodaysSchemaIdToUserSchemaInstance = function (todaySchemaInstance, userSchemaInstance) {
        var updatedUserSchemaInstance = user_1.User.setTodayIdToUserSchema(userSchemaInstance, todaySchemaInstance);
        return updatedUserSchemaInstance;
    };
    UserSignupRoutesLogic.setUserIdToTodaysSchema = function (userSchemaInstance, todaySchemaInstance) {
        var updatedTodaySchemaInstance = todo_1.Today.setUserIdToTodaySchema(todaySchemaInstance, userSchemaInstance);
        return updatedTodaySchemaInstance;
    };
    UserSignupRoutesLogic.initializeInboxSchemaInstance = function () {
        var inboxSchemaInstance = todo_1.Inbox.createInboxSchemaInstance();
        return inboxSchemaInstance;
    };
    UserSignupRoutesLogic.setInboxSchemaIdToUserSchemaInstance = function (inboxSchemaInstance, userSchemaInstance) {
        var updatedUserSchemaInstance = user_1.User.setInboxIdToUserSchema(userSchemaInstance, inboxSchemaInstance);
        return updatedUserSchemaInstance;
    };
    UserSignupRoutesLogic.setUserIdToInboxSchema = function (userSchemaInstance, inboxSchemaInstance) {
        var updatedInboxSchemaInstance = todo_1.Inbox.setUserIdToInboxSchema(inboxSchemaInstance, userSchemaInstance);
        return updatedInboxSchemaInstance;
    };
    UserSignupRoutesLogic.initializeProjectSchemaInstance = function () {
        var projectSchemaInstance = todo_1.Project.createProjectSchemaInstance();
        return projectSchemaInstance;
    };
    UserSignupRoutesLogic.setProjectSchemaIdToUserSchemaInstance = function (projectSchemaInstance, userSchemaInstance) {
        var updatedUserSchemaInstance = user_1.User.setProjectIdToUserSchema(userSchemaInstance, projectSchemaInstance);
        return updatedUserSchemaInstance;
    };
    return UserSignupRoutesLogic;
}());
