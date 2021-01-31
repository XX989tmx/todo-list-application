"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
var todo_controllers_1 = require("./../controllers/todo-controllers");
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.post("/todo/createTodo", [
    express_validator_1.check("title").notEmpty().trim(),
    express_validator_1.check("notes").trim(),
    express_validator_1.check("priority").trim().toInt(),
], todo_controllers_1.createTodo);
router.post("/todo/updateTodo", [express_validator_1.check("title").notEmpty().trim(), express_validator_1.check("notes").trim()], todo_controllers_1.updateTodo);
router.get("/todo/completeTodo/:todoId", todo_controllers_1.completeTodo);
router.get("/todo/moveToTrash/:todoId", todo_controllers_1.moveToTrash);
router.delete("todo/deleteTodo", todo_controllers_1.deleteTodo);
exports.default = router;
