import { ITodoSchema } from "./../model/todoSchema";
import { Todo } from "./todo";

export interface TodoListsInterface {
  list: Todo[] | ITodoSchema[] | any[];
}

export class TodoLists implements TodoListsInterface {
  list: Todo[] | ITodoSchema[] | any[];
  constructor() {
    this.list = [];
  }
}
