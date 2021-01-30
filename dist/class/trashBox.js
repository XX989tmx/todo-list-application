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
exports.TrashBox = void 0;
var trashBoxSchema_1 = require("./../model/trashBoxSchema");
var TrashBox = /** @class */ (function () {
    function TrashBox() {
        this.list = [];
        this.size = 0;
    }
    TrashBox.prototype.set = function (list) {
        this.list = list;
        this.size = this.list.length;
        return this;
    };
    TrashBox.prototype.putBack = function (id, destName, destObj) {
        //todo Today のtodaysListをlistに変更する。全てlistで一貫させる destObjをToday,Inbox,Project全てに対応できるように
        var targetTodo = this.find(id);
        var oldLength = destObj.list.length;
        switch (destName) {
            case "inbox":
                destObj.list.push(targetTodo);
                if (destObj.list.length === oldLength + 1) {
                    this.remove(id);
                }
                break;
            case "today":
                destObj.todaysList.push(targetTodo);
                if (destObj.list.length === oldLength + 1) {
                    this.remove(id);
                }
                break;
            default:
                break;
        }
        return this;
    };
    TrashBox.prototype.find = function (id) {
        var target = this.list.findIndex(function (v) { return v.id.toString() === id.toString(); });
        return this.list[target];
    };
    TrashBox.prototype.remove = function (id) {
        var updated = this.list.filter(function (v) {
            return v.id.toString() !== id.toString();
        });
        this.list = updated;
        this.size--;
        return this;
    };
    TrashBox.prototype.getSize = function () {
        return this.list.length;
    };
    TrashBox.prototype.empty = function () {
        this.list = [];
        this.size = 0;
        return this;
    };
    TrashBox.saveToDatabase = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // save
                return [2 /*return*/, this];
            });
        });
    };
    TrashBox.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // get all doc from database;
                return [2 /*return*/, this];
            });
        });
    };
    // インスタンスデータをデータベースに保存する処理 //
    // - TrashBoxSchemaインスタンスの作成　createTrashBoxSchemaInstance()
    TrashBox.createTrashBoxSchemaInstance = function () {
        var trashBoxSchemaInstance = new trashBoxSchema_1.trashBoxModel({
            list: [],
            size: 0,
        });
        return trashBoxSchemaInstance;
    };
    // - TrashBoxSchemaインスタンスにTrashBoxインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setTrashBoxSchema()
    TrashBox.setTrashBoxSchema = function (trashBoxSchemaInstance, trashBoxInstance) {
        trashBoxSchemaInstance.list = trashBoxInstance.list;
        trashBoxSchemaInstance = trashBoxInstance.size;
        return trashBoxSchemaInstance;
    };
    // - TrashBoxSchemaインスタンスにuserIdを保存する処理 setUserIdToTrashBoxSchema(userId)
    TrashBox.setUserIdToTrashBoxSchema = function (trashBoxSchemaInstance, userSchemaInstance) {
        trashBoxSchemaInstance.userId = userSchemaInstance._id;
        return trashBoxSchemaInstance;
    };
    // - TrashBoxSchemaインスタンス(mongooseDocument)を保存する処理　　saveTrashBoxSchemaToDatabase() {doc.save()}
    TrashBox.saveTrashBoxSchemaToDatabase = function (trashBoxSchemaInstance) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, trashBoxSchemaInstance.save()];
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
    return TrashBox;
}());
exports.TrashBox = TrashBox;
