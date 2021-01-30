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
exports.Project = void 0;
var projectSchema_1 = require("./../model/projectSchema");
var Project = /** @class */ (function () {
    function Project(title, notes, deadLine, scheduledDate, userId) {
        this.todoLists = [];
        this.title = title ? title : null;
        this.notes = notes ? notes : null;
        this.isDone = false;
        this.dateCreated = new Date();
        this.deadLine = deadLine ? deadLine : null;
        this.scheduledDate = scheduledDate ? scheduledDate : null;
        this.progressStatus = 0; // 0 - 100;
        this.userId = userId ? userId : null;
    }
    Project.prototype.getProgressStatus = function () {
        return this.progressStatus;
    };
    Project.prototype.getCountOfCompletedTodo = function () {
        var allTodo = this.todoLists;
        var count = 0;
        for (var i = 0; i < allTodo.length; i++) {
            var todo = allTodo[i];
            if (todo.isDone === true) {
                count += 1;
            }
        }
        return count;
    };
    Project.prototype.getCurrentProgressPercentage = function () {
        var totalCount = this.getCountOfTodo();
        var completeTodo = this.getCountOfCompletedTodo();
        var num = Math.floor(totalCount / completeTodo);
        var percentage = Math.floor(100 / num);
        return percentage;
    };
    Project.prototype.updateProgressStatus = function () {
        this.progressStatus = this.getCurrentProgressPercentage();
        return this;
    };
    Project.prototype.complete = function () {
        this.isDone = true;
        return this;
    };
    Project.prototype.addTodo = function (todo) {
        this.todoLists.push(todo);
        return this;
    };
    Project.prototype.removeTodo = function (id) {
        var target = this.todoLists.findIndex(function (v) { return v.id.toString() === id.toString(); });
        this.todoLists.splice(target, 1);
        return this;
    };
    Project.prototype.getDeadline = function () {
        return this.deadLine;
    };
    Project.prototype.updateDeadline = function (deadLine) {
        this.deadLine = deadLine;
        return this;
    };
    Project.prototype.getDateCreated = function () {
        return this.dateCreated;
    };
    Project.prototype.getCountOfTodo = function () {
        return this.todoLists.length;
    };
    Project.prototype.setUserId = function (userId) {
        this.userId = userId;
        return userId;
    };
    // インスタンスデータをデータベースに保存する処理 //
    // - ProjectSchemaインスタンスの作成　createProjectSchemaInstance()
    Project.createProjectSchemaInstance = function () {
        var projectSchemaInstance = new projectSchema_1.projectModel({
            todoLists: [],
            title: null,
            notes: null,
            isDone: null,
            dateCreated: null,
            deadline: null,
            scheduledDate: null,
            progressStatus: null,
            userId: null,
        });
        return projectSchemaInstance;
    };
    // - ProjectSchemaインスタンスにProjectインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setProjectSchema()
    Project.setProjectSchema = function (projectSchemaInstance, projectInstance) {
        projectSchemaInstance.todoLists = projectInstance.todoLists;
        projectSchemaInstance.title = projectInstance.title;
        projectSchemaInstance.notes = projectInstance.notes;
        projectSchemaInstance.isDone = projectInstance.isDone;
        projectSchemaInstance.dateCreated = projectInstance.dateCreated;
        projectSchemaInstance.deadLine = projectInstance.deadLine;
        projectSchemaInstance.scheduledDate = projectInstance.scheduledDate;
        projectSchemaInstance.progressStatus = projectInstance.progressStatus;
        return projectSchemaInstance;
    };
    // - ProjectSchemaインスタンスにuserIdを保存する処理 setUserIdToProjectSchema(userId)
    Project.setUserIdToProjectSchema = function (projectSchemaInstance, userSchemaInstance) {
        projectSchemaInstance.userId = userSchemaInstance._id;
        return projectSchemaInstance;
    };
    // - ProjectSchemaインスタンス(mongooseDocument)を保存する処理　　saveProjectSchemaToDatabase() {doc.save()}
    Project.saveProjectSchemaToDatabase = function (projectSchemaInstance) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, projectSchemaInstance.save()];
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
    return Project;
}());
exports.Project = Project;
