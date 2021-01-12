const { v4: uuidv4 } = require("uuid");

class Todo {
  constructor(
    title,
    notes,
    dateCreated,
    deadline,
    scheduledDate,
    isDone,
    userId
  ) {
    this.id = null;
    this.title = title ? title : null;
    this.notes = notes ? notes : null;
    this.dateCreated = dateCreated ? dateCreated : new Date();
    this.scheduledDate = scheduledDate ? scheduledDate : null;
    this.deadline = deadline ? deadline : null;
    this.isDone = isDone ? isDone : false;
    this.userId = userId ? userId : null;
  }

  set(id, title, notes, scheduledDate, deadline) {
    this.id = id ? id : null;
    this.title = title ? title : null;
    this.notes = notes ? notes : null;
    this.dateCreated = new Date();
    this.scheduledDate = scheduledDate ? new Date(scheduledDate) : null;
    this.deadline = deadline ? new Date(deadline) : null;
  }

  get() {
    return this;
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

  setUserId(userId) {
    this.userId = userId;
    return this.userId;
  }
}


// todo.set("12345","todo", "buy milk", "2021-1-23", "2021-2-23");
// console.log(todo);
// todo.completeTodo();
// const todo2 = new Todo();
// todo2.set("6789","todo2", "buy milk2", "2021-1-23", "2021-2-23");
// console.log(todo);
// todo.completeTodo();
// console.log(todo);
// const todo3 = new Todo();
// console.log(todo3);

class Tody {
  constructor() {
    this.todaysList = [];
    this.userId = null;
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
    return this;
  }

  count() {
    return this.todaysList.length;
  }

  static async save() {
    // save todaysList to database;
  }

  static async getTodaysList() {
    // get todays list from; database
  }

  setUserId(userId) {
    this.userId = userId;
    return this.userId;
  }
}

class Inbox {
  constructor(listData, userId) {
    this.list = listData ? listData : [];
    this.size = listData ? listData.length : 0;
    this.userId = userId ? userId : null;
  }

  addNewTodo(title, notes, scheduledDate, deadline) {
    let todo = new Todo();
    let newTodo = todo.set(title, notes, scheduledDate, deadline);
    console.log(newTodo);
    this.add(newTodo);
    return this;
  }

  getAll() {
    return this.list;
  }

  add(todo) {
    this.list.push(todo);
    this.size++;
    return this;
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

  setUserId(userId) {
    this.userId = userId;
    return userId;
  }
}

const inbox = new Inbox();
console.log(inbox);

const inbox2 = new Inbox(
  [
    { title: "abc", notes: "gggg" },
    { title: "dadads", notes: "ggggg" },
  ],
  "user1"
);
console.log(inbox2);
inbox2.add(new Todo("77777", "77777" ));
console.log(inbox2);
// inbox.add(todo);
// inbox.add(todo2);
// console.log(inbox);
// inbox.removeCompletedTodo("12345");
// console.log(inbox);
// console.log(inbox.count);
// console.log(inbox.getAll());

class Project {
  constructor(title, notes, isDone, dateCreated, deadLine, scheduledDate) {
    this.todoLists = [];
    this.title = null;
    this.notes = null;
    this.isDone = false;
    this.dateCreated = new Date();
    this.deadLine = null;
    this.scheduledDate = null;
    this.progressStatus = 0; // 0 - 100;
    this.userId = null;
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
    this.deadLine = deadLine;
  }

  getDateCreated() {
    return this.dateCreated;
  }

  getCountOfTodo() {
    return this.todoLists.length;
  }

  setUserId(userId) {
    this.userId = userId;
    return userId;
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
    this.userId = null;
  }

  set(todoDoc, date, accomplishedTodo, userId) {
    this.id = todoDoc.id;
    this.date = this.getToday();
    this.accomplishedTodo = this.setAccomplishedTodo();
    this.accomplishedCount = this.setAccomplishedCount();
    this.productivityScore = this.getProductivityScore();
    this.isInRow = this.isInRow(todoDoc);
    this.InRowDuration = this.getInRowDuration(todoDoc);
    this.longestInRowDuration = this.getLongestInRowDuration(todoDoc);
    this.userId = this.setUserId(userId);
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

  setUserId(userId) {
    this.userId = userId;
    return this.userId;
  }
}

class Logbook {}

class Trash {}

class Upcoming {}

class Anytime {}

class Someday {}
