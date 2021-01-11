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

  getRemainingDay() {
    const today = new Date();
    const todaysMonth = today.getMonth();
    const todaysDay = today.getDay();

    const deadline = this.deadline;
    const deadlineMonth = deadline.getMonth();
    let remainingDayOfThisMonth;
    const deadLineDay = deadline.getDay();
    if (todaysMonth === deadlineMonth) {
      remainingDayOfThisMonth = +deadLineDay - +todaysDay;
    } else {
      // get date count of from today to end of this month;
      // above count + deadlineDay;
      // return this sum
    }
  }

  countDownToDeadline() {}

  static async saveToDatabase() {
    // save specific todo item to database
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

  static async save() {
    // save todaysList to database;
  }

  static async getTodaysList() {
    // get todays list from database
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
  }

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

  static async saveInboxData() {
    // save inbox data to database;
  }

  static async fetchInboxDataFromDatabase(params) {
    // { userId:userId,
    //   inbox:[todoId]
    //   size: x
    // {
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

class Activity {
  // 毎日計測
  // productivity scoreはクライアント側で色の濃度と連動
  // productivity score 基準
  // 0個達成：0, 1個以上達成:1, 5個以上達成:2, 10個以上達成:3
  // inRow bonus:
  // 2日以上highが連続するとtrueにする。クライアントサイドで金色に連動

  constructor() {
    this.id = null;
    this.date = null; // date of today
    this.accomplishedTodo = [];
    this.accomplishedCount = 0;
    this.productivityScore = 0; // 0:none,1:low,2:mid,3:high
    this.isInRow = false;
    this.InRowDuration = 0;
    this.longestInRowDuration = 0; //n days
  }

  set(todoDoc, date, accomplishedTodo) {
    this.id = todoDoc.id;
    this.date = this.getToday();
    this.accomplishedTodo = this.setAccomplishedTodo();
    this.accomplishedCount = this.setAccomplishedCount();
    this.productivityScore = this.getProductivityScore();
    this.isInRow = this.isInRow(todoDoc);
    this.InRowDuration = this.getInRowDuration(todoDoc);
    this.longestInRowDuration = this.getLongestInRowDuration(todoDoc);
  }

  setAccomplishedTodo(todo) {
    this.accomplishedTodo.push(todo);
    return this.accomplishedTodo;
  }

  getToday() {
    return new Date();
  }

  setAccomplishedCount() {
    const count = this.accomplishedTodo.length;
    this.accomplishedCount = count;
    return this.accomplishedCount;
  }

  getAccomplishedCount() {
    return this.setAccomplishedCount();
  }

  setProductivityScore() {
    this.productivityScore = this.getAccomplishedCount();
    return this.productivityScore;
  }

  getProductivityScore() {
    return this.setProductivityScore();
  }

  isInRow(todoDoc) {
    const id = todoDoc.id;
    let oldToNewSortedArr = this.accomplishedTodo.sort(
      (a, b) => a.date - b.date
    );
    let count = 0;
    for (let i = id; i < oldToNewSortedArr.length; i--) {
      if (oldToNewSortedArr[i].productivityScore > 10) {
        count += 1;
      }
    }
    if (count > 1) {
      return true;
    } else {
      return false;
    }
  }

  getInRowDuration(todoDoc) {
    const id = todoDoc.id;
    let oldToNewSortedArr = this.accomplishedTodo.sort(
      (a, b) => a.date - b.date
    );
    let idxOfTargetDocId;
    for (let i = 0; i < this.accomplishedTodo.length; i++) {
      if (this.accomplishedTodo.id.toString() === id.toString()) {
        idxOfTargetDocId = this.accomplishedTodo.id.toString();
      }
    }

    let count = 0;
    for (let i = idxOfTargetDocId; i < oldToNewSortedArr.length; i--) {
      if (oldToNewSortedArr[i].productivityScore > 10) {
        count += 1;
      } else {
        break;
      }
    }
    return count;
  }

  getLongestInRowDuration(todoDoc) {
    const id = todoDoc.id;
    let oldToNewSortedArr = this.accomplishedTodo.sort(
      (a, b) => a.date - b.date
    );
    let idxOfTargetDocId;
    for (let i = 0; i < this.accomplishedTodo.length; i++) {
      if (this.accomplishedTodo.id.toString() === id.toString()) {
        idxOfTargetDocId = this.accomplishedTodo.id.toString();
      }
    }
    let countArr = [];
    let count = 0;
    for (let i = idxOfTargetDocId; i < oldToNewSortedArr.length; i--) {
      if (oldToNewSortedArr[i].productivityScore > 10) {
        count += 1;
      } else {
        countArr.push(count);
        count = 0;
      }
    }
    const maxInRow = Math.max(...countArr);
    return maxInRow;
  }

  static async saveToDatabase() {
    // save to database
  }

  static async getAllFromDatabase() {}
}

class Logbook {}

class Trash {}

class Upcoming {}

class Anytime {}

class Someday {}
