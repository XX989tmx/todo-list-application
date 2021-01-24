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
exports.User = void 0;
var userSchema_1 = require("../model/userSchema");
var User = /** @class */ (function () {
    function User(userId, name, email, password, confirmPassword, todo, inbox, today, logbook, trashBox, activity, lastLoggedIns) {
        this.id = userId ? userId : null;
        this.name = name ? name : null;
        this.email = email ? email : null;
        this.password = password ? password : null;
        this.confirmPassword = confirmPassword ? confirmPassword : null;
        this.todo = todo ? todo : [];
        this.inbox = inbox ? inbox : null;
        this.today = today ? today : null;
        this.logbook = logbook ? logbook : null;
        this.trashBox = trashBox ? trashBox : null;
        this.activity = activity ? activity : null;
        this.lastLoggedIns = lastLoggedIns ? lastLoggedIns : [];
    }
    User.prototype.set = function (id, name, email, password, confirmPassword, todo, inbox, today, logbook, trashBox, activity, userDoc) {
        this.id = this.setId(id);
        this.name = this.setName(name);
        this.email = this.setEmail(email);
        this.password = this.setPassword(password);
        this.confirmPassword = this.setConfirmPassword(confirmPassword);
        this.todo = this.setTodo(todo);
        this.inbox = this.setInbox(inbox);
        this.today = this.setToday(today);
        this.logbook = this.setLogbook(logbook);
        this.trashBox = this.setTrashBox(trashBox);
        this.activity = this.setActivity(activity);
        this.lastLoggedIns = this.setLastLoggedIns(userDoc);
    };
    User.prototype.setId = function (id) {
        this.id = id;
        return this.id;
    };
    User.prototype.setName = function (name) {
        this.name = name;
        return this.name;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
        return this.email;
    };
    User.prototype.setPassword = function (password) {
        this.password = password;
        return password;
    };
    User.prototype.setConfirmPassword = function (confirmPassword) {
        this.confirmPassword = confirmPassword;
        return this.confirmPassword;
    };
    User.prototype.setTodo = function (todo) {
        this.todo.push(todo);
        return this.todo;
    };
    User.prototype.setInbox = function (inbox) {
        this.inbox = inbox.id;
        return this.inbox;
    };
    User.prototype.setToday = function (today) {
        this.today = today.id;
        return this.today;
    };
    User.prototype.setLogbook = function (logbook) {
        this.logbook = logbook.id;
        return this.logbook;
    };
    User.prototype.setTrashBox = function (trashBox) {
        this.trashBox = trashBox.id;
        return this.trashBox;
    };
    User.prototype.setActivity = function (activity) {
        this.activity = activity.id;
        return this.activity;
    };
    User.prototype.checkPasswordEquity = function () {
        if (this.password && this.confirmPassword) {
            if (this.password.toString() === this.confirmPassword.toString()) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    User.prototype.isEmailUnique = function (email) {
        var found = false;
        for (var i = 0; i < User.allUsersInDatabase.length; i++) {
            if (email.toString() === User.allUsersInDatabase[i].email) {
                found = true;
            }
        }
        if (found) {
            return false;
        }
        else {
            return true;
        }
    };
    User.prototype.setLastLoggedIns = function (userDoc) {
        var lastLogin = userDoc ? userDoc.lastLoggedIns : [];
        this.lastLoggedIns = lastLogin;
        var now = new Date();
        this.lastLoggedIns.push(now);
        return this.lastLoggedIns;
    };
    User.prototype.getLastLoggedIn = function () {
        return this.lastLoggedIns.pop();
    };
    // userインスタンスをデータベースに保存する一連の処理
    // -userSchemaインスタンスを作成する処理 createUserSchema() { const userSchema = new userSchema({})}
    User.createUserSchema = function () {
        var userSchemaInstance = new userSchema_1.userModel({
            name: null,
            email: null,
            password: null,
            todo: [],
            inbox: null,
            today: null,
            logbook: null,
            trashBox: null,
            activity: null,
            lastLoggedIns: [],
        });
        return userSchemaInstance;
    };
    //userSchemaインスタンスにuserインスタンスデータをセットする処理. refでつなぐ他のスキーマId等のフィールドは除く、userSchemaに固有のデータアトリビュートのみをセット(lastLoggedInsにはEmptyArrをセット)。他はNull setUserSchema()
    User.setUserSchema = function (userSchemaInstance, userInstance) {
        try {
            userSchemaInstance.name = userInstance.name;
            userSchemaInstance.email = userInstance.email;
            userSchemaInstance.password = userInstance.password;
            userSchemaInstance.lastLoggedIns = userInstance.lastLoggedIns;
        }
        catch (error) {
            console.log(error);
        }
        return userSchemaInstance;
    };
    // (signup時の処理を想定。各他スキーマインスタンスをInitializeする処理を他で実行し、各SchemaIDを得、それを以下メソッドにセット。(refを作る))
    // - -userSchemaインスタンスにtodoIdをセットする処理 setTodoIdToUserSchema(todoId);
    User.setTodoIdToUserSchema = function (userSchemaInstance, todoSchemaInstanceArr) {
        // signup時に少なくとも一つはTodoSchemaを作成保存する必要がある。サンプルTodoを強制作成保存する。
        for (var i = 0; i < todoSchemaInstanceArr.length; i++) {
            var todoSchemaInstance = todoSchemaInstanceArr[i];
            userSchemaInstance.todo.push(todoSchemaInstance._id);
        }
        return userSchemaInstance;
    };
    // -userSchemaインスタンスにinboxIdをセットする処理 setInboxIdToUserSchema(inboxId)
    User.setInboxIdToUserSchema = function (userSchemaInstance, inboxSchemaInstance) {
        userSchemaInstance.inbox = inboxSchemaInstance._id;
        return userSchemaInstance;
    };
    // -userSchemaインスタンスにtodayIdをセットする処理　setTodayIdToUserSchema(todayId)
    User.setTodayIdToUserSchema = function (userSchemaInstance, todaySchemaInstance) {
        userSchemaInstance.today = todaySchemaInstance._id;
        return userSchemaInstance;
    };
    // -userSchemaインスタンスにproject idをセットする処理
    //　　setProjectIdToUserSchema(projectId)
    User.setProjectIdToUserSchema = function (userSchemaInstance, projectSchemaInstance) {
        userSchemaInstance.project = projectSchemaInstance._id;
        return userSchemaInstance;
    };
    // -userSchemaインスタンスにlogbookIdをセットする処理　setLogbookIdToUserSchema(logbookId)
    User.setLogbookIdToUserSchema = function (userSchemaInstance, logbookSchemaInstance) {
        userSchemaInstance.logbook = logbookSchemaInstance._id;
        return userSchemaInstance;
    };
    // -userSchemaインスタンスにtrashBoxIdをセットする処理　setTrashBoxIdToUserSchema(trashBoxId)
    User.setTrashBoxIdToUserSchema = function (userSchemaInstance, trashBoxSchemaInstance) {
        userSchemaInstance.trashBox = trashBoxSchemaInstance._id;
        return userSchemaInstance;
    };
    // -userSchemaインスタンスにactivityIdをセットする処理　setActivityIdToUserSchema(activityId)
    User.setActivityIdToUserSchema = function (userSchemaInstance, activitySchemaInstance) {
        userSchemaInstance.activity = activitySchemaInstance._id;
        return userSchemaInstance;
    };
    // -userSchemaインスタンス（mongooseDocument)をデータベースに保存する処理 saveUserSchemaToDatabase() {userSchema.save()}
    User.saveUserSchemaToDatabase = function (userSchemaInstance) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, userSchemaInstance.save()];
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
    User.saveToDatabase = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    User.updateAndSaveExistingUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    User.getUserFromDatabase = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var userData, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, userSchema_1.userModel.findById(userId)];
                    case 1:
                        userData = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, userData];
                }
            });
        });
    };
    return User;
}());
exports.User = User;
