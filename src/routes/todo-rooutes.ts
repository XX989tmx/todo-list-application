import { completeTodo, createTodo, updateTodo, moveToTrash, deleteTodo } from './../controllers/todo-controllers';
import express, { Request, Response, NextFunction } from "express";
import { CreateTodoRoutesLogic } from "../class/createTodoRoutesLogic";
import { InboxRoutesLogic } from "../class/inboxRoutesLogic";
import { Todo } from "../class/todo";

const router = express.Router();

router.post(
  "todo/createTodo",
  createTodo
);

router.post("todo/updateTodo", updateTodo);

router.get("todo/completeTodo/:todoId", completeTodo);

router.get("todo/moveToTrash/:todoId",moveToTrash);

router.delete("todo/deleteTodo", deleteTodo);

export default router;
