import expressValidator, { check } from "express-validator";
import {
  completeTodo,
  createTodo,
  updateTodo,
  moveToTrash,
  deleteTodo,
} from "./../controllers/todo-controllers";
import express, { Request, Response, NextFunction } from "express";
import { CreateTodoRoutesLogic } from "../class/createTodoRoutesLogic";
import { InboxRoutesLogic } from "../class/inboxRoutesLogic";
import { Todo } from "../class/todo";

const router = express.Router();

router.post(
  "/todo/createTodo",
  [
    check("title").notEmpty().trim(),
    check("notes").trim(),
    check("priority").trim().toInt(),
  ],
  createTodo
);

router.post(
  "/todo/updateTodo",
  [check("title").notEmpty().trim(), check("notes").trim()],
  updateTodo
);

router.get("/todo/completeTodo/:todoId", completeTodo);

router.get("/todo/moveToTrash/:todoId", moveToTrash);

router.delete("todo/deleteTodo", deleteTodo);

export default router;
