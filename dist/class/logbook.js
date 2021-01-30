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
exports.Logbook = void 0;
var logbookSchema_1 = require("./../model/logbookSchema");
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
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, logbookSchemaInstance.save()];
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
    Logbook.pushTodoSchemaToLogbookSchemaList = function (todoSchema) {
        try {
            Logbook.LogbookSchema.list.push(todoSchema._id);
        }
        catch (error) {
            console.log(error);
        }
    };
    Logbook.getLogbookSchema = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var logbookSchema, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, logbookSchema_1.logbookModel.findOne({ userId: userId })];
                    case 1:
                        logbookSchema = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3:
                        Logbook.LogbookSchema = logbookSchema;
                        return [2 /*return*/, logbookSchema];
                }
            });
        });
    };
    Logbook.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Logbook.LogbookSchema.save()];
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
    return Logbook;
}());
exports.Logbook = Logbook;
