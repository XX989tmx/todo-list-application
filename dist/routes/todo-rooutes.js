"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var todo_controllers_1 = require("./../controllers/todo-controllers");
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.post("todo/createTodo", todo_controllers_1.createTodo);
router.post("todo/updateTodo", todo_controllers_1.updateTodo);
router.get("todo/completeTodo/:todoId", todo_controllers_1.completeTodo);
router.get("todo/moveToTrash/:todoId", todo_controllers_1.moveToTrash);
router.delete("todo/deleteTodo", todo_controllers_1.deleteTodo);
exports.default = router;
