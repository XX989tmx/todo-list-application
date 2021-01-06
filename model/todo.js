const { v4: uuidv4 } = require("uuid");

class Todo {
  constructor(title, notes, dateCreated, deadline, scheduledDate) {
    this.id = null;
    this.title = null;
    this.notes = null;
    this.dateCreated = null;
    this.scheduledDate = null;
    this.deadline = null;
    this.isDone = false;
  }

  set(title, notes, scheduledDate, deadline) {
    this.id = "12345";
    this.title = title ? title : null;
    this.notes = notes ? notes : null;
    this.dateCreated = new Date();
    this.scheduledDate = scheduledDate ? new Date(scheduledDate) : null;
    this.deadline = deadline ? new Date(deadline) : null;
  }

  completeTodo() {
    this.isDone = true;
  }

  setDeadline(deadLine) {
    this.deadline = deadLine;
  }

  setScheduledDate(scheduledDate) {
    this.scheduledDate = scheduledDate;
  }

  updateTitle(title) {
    this.title = title;
  }

  updateNotes(notes) {
    this.notes = notes;
  }

  updateScheduledDate(scheduledDate) {
    this.scheduledDate = scheduledDate;
  }

  updateDeadline(deadLine) {
    this.deadline = deadLine;
  }
}

const todo = new Todo();
todo.set("todo", "buy milk", "2021-1-23", "2021-2-23");
console.log(todo);
todo.completeTodo();
const todo2 = new Todo();
todo2.set("todo2", "buy milk2", "2021-1-23", "2021-2-23");
console.log(todo);

class Tody {
  constructor() {
    this.todaysList = [];
  }

  getAll() {
    return this.todaysList;
  }

  completeTodo(id) {
    for (let i = 0; i < this.list.length; i++) {
      if (
        this.list[i].toString() === id.toString() &&
        this.list[i].isDone === false
      ) {
        this.list[i].isDone = true;
        this.removeTodoFromToday(id);
        return this.list[i];
      }
    }
  }

  setTodoAsToday(todo) {
    this.todaysList.push(todo);
  }

  removeTodoFromToday(id) {
    const target = this.todaysList.findIndex(
      (v) => v.id.toString() === id.toString()
    );
    this.todaysList.splice(target, 1);
  }

  empty(params) {
    this.todaysList = [];
  }

  count() {
    return this.todaysList.length;
  }
}

class Inbox {
  constructor() {
    this.list = [];
    this.size = 0;
  }

  addNewTodo(title, notes, scheduledDate, deadline) {
    const todo = new Todo();
    const newTodo = todo.set(title, notes, scheduledDate, deadline);
    this.add(newTodo);
  };

  getAll() {
    return this.list;
  }

  add(todo) {
    this.list.push(todo);
    this.size++;
  }

  remove(id) {
    const target = this.list.findIndex(
      (v) => v.id.toString() === id.toString()
    );
    this.list.splice(target, 1);
    this.size--;
  }

  find(id) {
    const target = this.list.findIndex(
      (v) => v.id.toString() === id.toString()
    );
    return list[target];
  }

  count() {
    return this.size;
  }

  checkIsDone(id) {
    let target;
    for (let i = 0; i < this.list.length; i++) {
      const todo = this.list[i];
      if (this.list[i].id.toString() === id.toString()) {
        if (this.list[i].isDone === true) {
          return i;
        }
      }
    }
    return false;
  }

  removeCompletedTodo(id) {
    let idx = this.checkIsDone(id);
    console.log(idx);
    this.list = this.list.filter((v) => v.isDone !== true);
    this.size--;
  }
}

const inbox = new Inbox();
inbox.add(todo);
inbox.add(todo2);
console.log(inbox);
inbox.removeCompletedTodo("12345");
console.log(inbox);
console.log(inbox.count);
console.log(inbox.getAll());

class Project {
  constructor(title, notes, isDone, dateCreated, deadLine, scheduledDate) {
    this.todoLists = [];
    this.title = null;
    this.notes = null;
    this.isDone = false;
    this.dateCreated = new Date();
    this.deadLine = null;
    this.scheduledDate = null;
    this.progressStatus = 0; // 0 - 100
  }

  getProgressStatus(params) {
    return this.progressStatus;
  }

  getCountOfCompletedTodo() {
    const allTodo = this.todoLists;
    let count = 0;
    for (let i = 0; i < allTodo.length; i++) {
      const todo = allTodo[i];
      if (todo.isDone === true) {
        count += 1;
      }
    }

    return count;
  }

  getCurrentProgressPercentage(params) {
    const totalCount = this.getCountOfTodo();
    const completeTodo = this.getCountOfCompletedTodo();

    const num = Math.floor(totalCount / completeTodo);
    const percentage = Math.floor(100 / num);
    return percentage;
  }

  updateProgressStatus(params) {
    this.progressStatus = this.getCurrentProgressPercentage();
  }

  complete() {
    this.isDone = true;
  }

  addTodo(todo) {
    this.todoLists.push(todo);
  }

  removeTodo(id) {
    const target = this.todoLists.findIndex(
      (v) => v.id.toString() === id.toString()
    );
    this.todoLists.splice(target, 1);
  }

  getDeadline() {
    return this.deadLine;
  }

  updateDeadline(deadLine) {
    this.deadLine = deadline;
  }

  getDateCreated() {
    return this.dateCreated;
  }

  getCountOfTodo() {
    return this.todoLists.length;
  }
}

class Logbook {}

class Trash {}

class Upcoming {}

class Anytime {}

class Someday {}
