"use strict";
var axios = require("axios");
var todo = require("./todo");
var Todo = todo.todo;
var Today = todo.today;
var Inbox = todo.inbox;
var Project = todo.project;
var Logbook = todo.logbook;
var Activity = todo.activity;
var TrashBox = todo.trashBox;
var user = require("./user");
var User = user.user;
var TodoSchema = require("../model/todoSchema");
var UserSchema = require("../model/userSchema");
var InboxSchema = require("../model/inboxSchema");
var TodaysSchema = require("../model/todaysSchema");
var LogbookSchema = require("../model/logbookSchema");
var ActivitySchema = require("../model/activitySchema");
var ProjectSchema = require("../model/projectSchema");
var TrashBoxSchema = require("../model/trashBoxSchema");
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
        var userSchemaInstance = User.createUserSchema();
        return userSchemaInstance;
    };
    UserSignupRoutesLogic.initializeUserClassInstance = function () {
        return new User();
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
        var updatedUserSchemaInstance = User.setUserSchema(userSchemaInstance, userClassInstance);
        return updatedUserSchemaInstance;
    };
    UserSignupRoutesLogic.initializeTodoSchemaInstance = function () {
        var todoSchemaInstance = Todo.createTodoSchemaInstance();
        return todoSchemaInstance;
    };
    UserSignupRoutesLogic.setTodoSchemaIdToUserSchema = function (todoSchemaInstance, userSchemaInstance) {
        var updatedUserSchemaInstance = User.setTodoIdToUserSchema(userSchemaInstance, [todoSchemaInstance]);
        return updatedUserSchemaInstance;
    };
    UserSignupRoutesLogic.setUserIdToTodoSchema = function (todoSchemaInstance, userSchemaInstance) {
        var updatedTodoSchemaInstance = Todo.setUserIdToTodoSchema(todoSchemaInstance, userSchemaInstance);
        return updatedTodoSchemaInstance;
    };
    UserSignupRoutesLogic.initializeTodaySchemaInstance = function () {
        var todaySchemaInstance = Today.createTodaySchemaInstance();
        return todaySchemaInstance;
    };
    UserSignupRoutesLogic.setTodaysSchemaIdToUserSchemaInstance = function (todaySchemaInstance, userSchemaInstance) {
        var updatedUserSchemaInstance = User.setTodayIdToUserSchema(userSchemaInstance, todaySchemaInstance);
        return updatedUserSchemaInstance;
    };
    UserSignupRoutesLogic.setUserIdToTodaysSchema = function (userSchemaInstance, todaySchemaInstance) {
        var updatedTodaySchemaInstance = Today.setUserIdToTodaySchema(todaySchemaInstance, userSchemaInstance);
        return updatedTodaySchemaInstance;
    };
    UserSignupRoutesLogic.initializeInboxSchemaInstance = function () {
        var inboxSchemaInstance = Inbox.createInboxSchemaInstance();
        return inboxSchemaInstance;
    };
    UserSignupRoutesLogic.setInboxSchemaIdToUserSchemaInstance = function (inboxSchemaInstance, userSchemaInstance) {
        var updatedUserSchemaInstance = User.setInboxIdToUserSchema(userSchemaInstance, inboxSchemaInstance);
        return updatedUserSchemaInstance;
    };
    UserSignupRoutesLogic.setUserIdToInboxSchema = function (userSchemaInstance, inboxSchemaInstance) {
        var updatedInboxSchemaInstance = Inbox.setUserIdToInboxSchema(inboxSchemaInstance, userSchemaInstance);
        return updatedInboxSchemaInstance;
    };
    UserSignupRoutesLogic.initializeProjectSchemaInstance = function () {
        var projectSchemaInstance = Project.createProjectSchemaInstance();
        return projectSchemaInstance;
    };
    UserSignupRoutesLogic.setProjectSchemaIdToUserSchemaInstance = function (projectSchemaInstance, userSchemaInstance) {
        var updatedUserSchemaInstance = User.setProjectIdToUserSchema(userSchemaInstance, projectSchemaInstance);
        return updatedUserSchemaInstance;
    };
    return UserSignupRoutesLogic;
}());
