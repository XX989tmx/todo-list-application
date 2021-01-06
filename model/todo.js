const { v4: uuidv4 } = require("uuid");

class Todo {
  constructor(title, notes, dateCreated, deadline, scheduledDate, deadline) {
    this.id = uuidv4();
    this.title = null;
    this.notes = null;
    this.dateCreated = new Date();
    this.scheduledDate = null;
    this.deadline = null;
    this.isDone = false;
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

class Tody {
  constructor() {
    this.todaysList = [];
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
  }

  add(todo) {
    this.list.push(todo);
  }

  remove(id) {
    const target = this.list.findIndex(
      (v) => v.id.toString() === id.toString()
    );
    this.list.splice(target, 1);
  }

  find(id) {
    const target = this.list.findIndex(
      (v) => v.id.toString() === id.toString()
    );
    return list[target];
  }

  count() {
    return this.list.length;
  }
}

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
