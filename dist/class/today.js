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
exports.Today = void 0;
var todaysSchema_1 = require("./../model/todaysSchema");
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
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, todaySchemaInstance.save()];
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
    // static async save() {
    //   // save todaysList to database;
    // }
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
    Today.getTodaySchemaFromDatabase = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var todaySchema, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, todaysSchema_1.todaysModel.findOne({ userId: userId })];
                    case 1:
                        todaySchema = _a.sent();
                        Today.TodaySchema = todaySchema;
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, todaySchema];
                }
            });
        });
    };
    Today.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Today.TodaySchema.save()];
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
    return Today;
}());
exports.Today = Today;
