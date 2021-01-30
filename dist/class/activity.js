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
exports.Activity = void 0;
var activitySchema_1 = require("./../model/activitySchema");
var Activity = /** @class */ (function () {
    function Activity() {
        this.id = null;
        this.date = null; // date of today
        this.accomplishedTodo = [];
        this.accomplishedCount = 0;
        this.productivityScore = 0; // 0:none,1:low,2:mid,3:high
        this.isInRowState = false;
        this.inRowDuration = 0;
        this.longestInRowDuration = 0; //n days
        this.userId = null;
    }
    // todoDocあたりがおかしいので変更
    Activity.prototype.set = function (todoDoc, date, accomplishedTodo, userId) {
        this.id = todoDoc.id;
        this.date = this.getToday();
        this.accomplishedTodo = this.setAccomplishedTodo(todoDoc);
        this.accomplishedCount = this.setAccomplishedCount();
        this.productivityScore = this.getProductivityScore();
        this.isInRowState = this.isInRow(todoDoc);
        this.inRowDuration = this.getInRowDuration(todoDoc);
        this.longestInRowDuration = 0;
        this.userId = this.setUserId(userId);
        return this;
    };
    Activity.prototype.setAccomplishedTodo = function (todo) {
        this.accomplishedTodo.push(todo);
        return this.accomplishedTodo;
    };
    Activity.prototype.getToday = function () {
        return new Date();
    };
    Activity.prototype.setAccomplishedCount = function () {
        var count = this.accomplishedTodo.length;
        this.accomplishedCount = count;
        return this.accomplishedCount;
    };
    Activity.prototype.getAccomplishedCount = function () {
        return this.setAccomplishedCount();
    };
    Activity.prototype.setProductivityScore = function () {
        this.productivityScore = this.getAccomplishedCount();
        return this.productivityScore;
    };
    Activity.prototype.getProductivityScore = function () {
        return this.setProductivityScore();
    };
    Activity.prototype.isInRow = function (todoDoc) {
        var id = todoDoc.id;
        var oldToNewSortedArr = this.accomplishedTodo.sort(function (a, b) { return a.dateCompleted - b.dateCompleted; });
        var count = 0;
        // for (let i = id; i < oldToNewSortedArr.length; i--) {
        //   if (oldToNewSortedArr[i].productivityScore > 10) {
        //     count += 1;
        //   }
        // }
        if (count > 1) {
            return true;
        }
        else {
            return false;
        }
    };
    Activity.prototype.getInRowDuration = function (todoDoc) {
        var id = todoDoc.id;
        var oldToNewSortedArr = this.accomplishedTodo.sort(function (a, b) { return a.dateCompleted - b.dateCompleted; });
        var idxOfTargetDocId;
        for (var i = 0; i < this.accomplishedTodo.length; i++) {
            if (this.accomplishedTodo[i].id.toString() === id.toString()) {
                idxOfTargetDocId = this.accomplishedTodo[i].id.toString();
            }
        }
        var count = 0;
        // for (let i = idxOfTargetDocId; i < oldToNewSortedArr.length; i--) {
        //   if (oldToNewSortedArr[i].productivityScore > 10) {
        //     count += 1;
        //   } else {
        //     break;
        //   }
        // }
        return count;
    };
    Activity.prototype.getLongestInRowDuration = function (todoDoc) {
        var id = todoDoc.id;
        var oldToNewSortedArr = this.accomplishedTodo.sort(function (a, b) { return a.dateCompleted - b.dateCompleted; });
        var idxOfTargetDocId;
        if (id !== null) {
            for (var i = 0; i < this.accomplishedTodo.length; i++) {
                if (this.accomplishedTodo[i].id.toString() === id.toString()) {
                    idxOfTargetDocId = this.accomplishedTodo[i].id.toString();
                }
            }
        }
        var countArr = [];
        var count = 0;
        // for (let i = idxOfTargetDocId; i < oldToNewSortedArr.length; i--) {
        //   if (oldToNewSortedArr[i].productivityScore > 10) {
        //     count += 1;
        //   } else {
        //     countArr.push(count);
        //     count = 0;
        //   }
        // }
        // const maxInRow = Math.max(...countArr);
        // return maxInRow;
    };
    Activity.saveToDatabase = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // save to database
                return [2 /*return*/, this];
            });
        });
    };
    Activity.getAllFromDatabase = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this];
            });
        });
    };
    Activity.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this.userId;
    };
    // インスタンスデータをデータベースに保存する処理 //
    // - ActivitySchemaインスタンスの作成　createActivitySchemaInstance()
    Activity.createActivitySchemaInstance = function () {
        var activitySchemaInstance = new activitySchema_1.activityModel({
            date: null,
            accomplishedTodo: [],
            accomplishedCount: 0,
            productivityScore: 0,
            isInRow: null,
            inRowDuration: null,
            longestInRowDuration: 0,
            userId: null,
        });
        return activitySchemaInstance;
    };
    // - ActivitySchemaインスタンスにActivityインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setActivitySchema()
    Activity.setActivitySchema = function (activitySchemaInstance, activityInstance) {
        activitySchemaInstance.date = activityInstance.date;
        activitySchemaInstance.accomplishedTodo = activityInstance.accomplishedTodo;
        activitySchemaInstance.accomplishedCount =
            activityInstance.accomplishedCount;
        activitySchemaInstance.productivityScore =
            activityInstance.productivityScore;
        activitySchemaInstance.isInRow = activityInstance.isInRowState;
        activitySchemaInstance.inRowDuration = activityInstance.inRowDuration;
        activitySchemaInstance.longestInRowDuration =
            activityInstance.longestInRowDuration;
        return activitySchemaInstance;
    };
    // - ActivitySchemaインスタンスにuserIdを保存する処理 setUserIdToActivitySchema(userId)
    Activity.setUserIdToActivitySchema = function (activitySchemaInstance, userSchemaInstance) {
        activitySchemaInstance.userId = userSchemaInstance._id;
        return activitySchemaInstance;
    };
    // - ActivitySchemaインスタンス(mongooseDocument)を保存する処理　　saveActivitySchemaToDatabase() {doc.save()}
    Activity.saveActivitySchemaToDatabase = function (activitySchemaInstance) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, activitySchemaInstance.save()];
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
    Activity.getActivitySchemaFromDatabase = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var activitySchema, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, activitySchema_1.activityModel.findOne({ userId: userId })];
                    case 1:
                        activitySchema = _a.sent();
                        Activity.ActivitySchema = activitySchema;
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, activitySchema];
                }
            });
        });
    };
    Activity.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Activity.ActivitySchema.save()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Activity;
}());
exports.Activity = Activity;
