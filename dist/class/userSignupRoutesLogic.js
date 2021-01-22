"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_1 = require("./todo");
var user_1 = require("./user");
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
        // User　Schema　インスタンスをInitialize
        var userSchemaInstance = UserSignupRoutesLogic.initializeUserSchemaInstance();
        // User class instance を initialize
        var userClassInstance = UserSignupRoutesLogic.initializeUserClassInstance();
        // req body からUser field をOBD
        var userInputsData = UserSignupRoutesLogic.parseReqBodyFieldOfUserData(req);
        // req body のUserDataを元に、User　Class　Instanceにデータをセットする。
        UserSignupRoutesLogic.setUserInputsDataToUserSchemaInstance(userInputsData, userSchemaInstance, userClassInstance);
        // todoIdをUser　Schema　インスタンスにセット（Nullかダミーデータ）
        // todo schema instance を initialize
        var todoSchemaInstance = UserSignupRoutesLogic.initializeTodoSchemaInstance();
        // user id をTodoSchemaにセット
        var updatedUserSchemaInstance = UserSignupRoutesLogic.setTodoSchemaIdToUserSchema(todoSchemaInstance, userSchemaInstance);
        // today schema instance をInitialize
        var todaySchemaInstance = UserSignupRoutesLogic.initializeTodaySchemaInstance();
        // today schema instance のIdを、User　Schema　Instanceにセット
        var updatedUserSchemaInstance2 = UserSignupRoutesLogic.setTodaysSchemaIdToUserSchemaInstance(todaySchemaInstance, updatedUserSchemaInstance);
        // user id をToday　Schemaにセット
        var updatedUserSchemaInstance3 = UserSignupRoutesLogic.setUserIdToTodaysSchema(todaySchemaInstance, updatedUserSchemaInstance2);
        // inbox schema instance をInitialize
        var inboxSchemaInstance = UserSignupRoutesLogic.initializeInboxSchemaInstance();
        // inbox schema instance のIdを　User　Schema　Instanceにセット
        var updatedUserSchemaInstance4 = UserSignupRoutesLogic.setInboxSchemaIdToUserSchemaInstance(inboxSchemaInstance, updatedUserSchemaInstance3);
        // user id を inbox schema にセット
        var updatedInboxSchemaInstance = UserSignupRoutesLogic.setUserIdToInboxSchema(updatedUserSchemaInstance4, inboxSchemaInstance);
        // project schema instance をInitialize
        var projectSchemaInstance = UserSignupRoutesLogic.initializeProjectSchemaInstance();
        // project schema instance のIdを　User　Schema　Instanceにセット
        var updatedUserSchemaInstance5 = UserSignupRoutesLogic.setProjectSchemaIdToUserSchemaInstance(projectSchemaInstance, updatedUserSchemaInstance4);
        // user id を project schema にセット
        var updatedProjectSchemaInstance = UserSignupRoutesLogic.setUserSchemaIdToProjectSchema(updatedUserSchemaInstance5, projectSchemaInstance);
        // logbook schema instance をInitialize
        var logbookSchemaInstance = UserSignupRoutesLogic.initializeLogbookSchemaInstance();
        // logbook schema instance のIdを　User　Schema　Instanceにセット
        var updatedUserSchemaInstance6 = UserSignupRoutesLogic.setLogbookSchemaIdToUserSchemaId(logbookSchemaInstance, updatedUserSchemaInstance5);
        // user id を　logbook schema にセット
        var updatedLogbookSchemaInstance = UserSignupRoutesLogic.setUserSchemaIdToLogbookSchema(updatedUserSchemaInstance6, logbookSchemaInstance);
        // trashBox Schema Instance をInitialize
        var trashBoxSchemaInstance = todo_1.TrashBox.createTrashBoxSchemaInstance();
        // trashBox Schema Instance のIdを　UserSchema　Instanceにセット
        var updatedUserSchemaInstance7 = user_1.User.setTrashBoxIdToUserSchema(updatedUserSchemaInstance6, trashBoxSchemaInstance);
        // user id を　trashBox Schema にセット
        var updatedTrashBoxSchemaInstance = todo_1.TrashBox.setUserIdToTrashBoxSchema(trashBoxSchemaInstance, updatedUserSchemaInstance7);
        // activity schema instance をInitialize
        var activitySchemaInstance = todo_1.Activity.createActivitySchemaInstance();
        // activity schema Instance のIdを　User　Schema　Instanceにセット
        var updatedUserSchemaInstance8 = user_1.User.setActivityIdToUserSchema(updatedUserSchemaInstance7, activitySchemaInstance);
        // user id を　activity schema にセット
        var updatedActivitySchemaInstance = todo_1.Activity.setUserIdToActivitySchema(activitySchemaInstance, updatedUserSchemaInstance8);
        // 各スキーマをデータベースに保存
        // todo schema を保存
        todo_1.Todo.saveTodoSchemaToDatabase(todoSchemaInstance)
            .then(function (result) { })
            .catch(function (err) {
            console.log(err);
        });
        // inbox schema を保存
        todo_1.Inbox.saveInboxSchemaToDatabase(updatedInboxSchemaInstance)
            .then(function (result) { })
            .catch(function (err) {
            console.log(err);
        });
        // today schemaを保存
        todo_1.Today.saveTodaySchemaToDatabase(todaySchemaInstance)
            .then(function (result) { })
            .catch(function (err) {
            console.log(err);
        });
        // logbook schema を保存
        todo_1.Logbook.saveLogbookSchemaToDatabase(updatedLogbookSchemaInstance)
            .then(function (result) { })
            .catch(function (err) {
            console.log(err);
        });
        // trashBox schema を保存
        todo_1.TrashBox.saveTrashBoxSchemaToDatabase(updatedTrashBoxSchemaInstance)
            .then(function (result) { })
            .catch(function (err) {
            console.log(err);
        });
        // activity schema を保存
        todo_1.Activity.saveActivitySchemaToDatabase(updatedActivitySchemaInstance)
            .then(function (result) { })
            .catch(function (err) {
            console.log(err);
        });
        // user schema を保存
        user_1.User.saveUserSchemaToDatabase(updatedUserSchemaInstance8)
            .then(function (result) { })
            .catch(function (err) {
            console.log(err);
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
    UserSignupRoutesLogic.setUserSchemaIdToProjectSchema = function (userSchemaInstance, projectSchemaInstance) {
        var updatedProjectSchemaInstance = todo_1.Project.setUserIdToProjectSchema(projectSchemaInstance, userSchemaInstance);
        return updatedProjectSchemaInstance;
    };
    UserSignupRoutesLogic.initializeLogbookSchemaInstance = function () {
        var logbookSchemaInstance = todo_1.Logbook.createLogbookSchemaInstance();
        return logbookSchemaInstance;
    };
    UserSignupRoutesLogic.setLogbookSchemaIdToUserSchemaId = function (logbookSchemaInstance, userSchemaInstance) {
        var updatedUserSchemaInstance = user_1.User.setLogbookIdToUserSchema(logbookSchemaInstance, userSchemaInstance);
        return updatedUserSchemaInstance;
    };
    UserSignupRoutesLogic.setUserSchemaIdToLogbookSchema = function (userSchemaInstance, logbookSchemaInstance) {
        var updatedLogbookSchemaInstance = todo_1.Logbook.setUserIdToLogbookSchema(logbookSchemaInstance, userSchemaInstance);
        return updatedLogbookSchemaInstance;
    };
    return UserSignupRoutesLogic;
}());
