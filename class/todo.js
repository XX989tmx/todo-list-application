const { v4: uuidv4 } = require("uuid");
const TodoSchema = require("../model/todoSchema");
const InboxSchema = require("../model/inboxSchema");

class Todo {
  // priority 1 , 2 ,3.  1 = lowest, 3 = highest
  constructor(title, notes, priority, scheduledDate, deadline, isDone, userId) {
    this.id = null;
    this.title = title ? title : null;
    this.notes = notes ? notes : null;
    this.priority = priority ? priority : null;
    this.dateCreated = new Date();
    this.scheduledDate = scheduledDate ? scheduledDate : null;
    this.deadline = deadline ? deadline : null;
    this.isDone = isDone ? isDone : false;
    this.userId = userId ? userId : null;
    this.dateCompleted = null;
  }

  set(id, title, notes, priority, scheduledDate, deadline, userId) {
    this.id = id ? id : null;
    this.title = title ? title : null;
    this.notes = notes ? notes : null;
    this.priority = priority ? priority : null;
    this.dateCreated = new Date();
    this.scheduledDate = scheduledDate ? new Date(scheduledDate) : null;
    this.deadline = deadline ? new Date(deadline) : null;
    this.isDone = null;
    this.userId = userId ? userId : null;
    this.dateCompleted = null;
    return this;
  }

  get() {
    return this;
  }

  completeTodo() {
    this.isDone = true;
    this.dateCompleted = new Date();
    return this;
  }

  setPriority(priority) {
    this.priority = priority;
    return this;
  }

  getPriority() {
    return this.priority;
  }

  setDeadline(deadLine) {
    this.deadline = deadLine;
    return this;
  }

  setScheduledDate(scheduledDate) {
    this.scheduledDate = scheduledDate;
    return this;
  }

  updateTitle(title) {
    this.title = title;
    return this;
  }

  updateNotes(notes) {
    this.notes = notes;
    return this;
  }

  updateScheduledDate(scheduledDate) {
    this.scheduledDate = scheduledDate;
    return this;
  }

  updateDeadline(deadLine) {
    this.deadline = deadLine;
    return this;
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

  countDownToDeadline() {
    return this;
  }

  // インスタンスデータをデータベースに保存する処理 //
  // - todoSchemaインスタンスの作成　createTodoSchemaInstance()
  // - todoSchemaインスタンスにTodoインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setTodoSchema()
  // - todoSchemaインスタンスにuserIdを保存する処理 setUserIdToTodoSchema(userId)
  // - todoSchemaインスタンス(mongooseDocument)を保存する処理　　saveTodoSchemaToDatabase() {doc.save()}

  static async saveToDatabase(todo) {
    // save specific todo item to database
    const createdTodoSchema = new TodoSchema({
      title: todo.title,
      notes: todo.notes,
      priority: todo.priority,
      dateCreated: todo.dateCreated,
      scheduledDate: todo.scheduledDate,
      deadline: todo.deadline,
      isDone: todo.isDone,
      userId: todo.userId,
    });
    try {
      await createdTodoSchema.save();
    } catch (error) {
      console.log(error);
    }

    // initialize user class;
    // User.saveToDatabase(createdTodoSchema.id); exc static method
    return this;
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

class Today {
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
    return this;
  }

  removeTodoFromToday(id) {
    const target = this.todaysList.findIndex(
      (v) => v.id.toString() === id.toString()
    );
    this.todaysList.splice(target, 1);
    return this;
  }

  empty(params) {
    this.todaysList = [];
    return this;
  }

  count() {
    return this.todaysList.length;
  }

  getTodaysTodoFromAll(todoAll) {
    // todoAll = todoDoc[];
    // get todo matched with todays date or scheduled at today from outer list such as inbox or allTodo or schedule class.
    // 起動するごと実行し、todayにスケジュールされたTodoをTodaysListに入れる。
    let today = new Date().getDate();
    for (const todo of todoAll) {
      const todoDate = todo.scheduledDate.getDate();
      if (todoDate === today) {
        this.todaysList.push(todo);
        this.size++;
      }
    }

    return this;
  }

  // インスタンスデータをデータベースに保存する処理 //
  // - TodaySchemaインスタンスの作成　createTodaySchemaInstance()
  // - TodaySchemaインスタンスにTodayインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setTodaySchema()
  // - TodaySchemaインスタンスにuserIdを保存する処理 setUserIdToTodaySchema(userId)
  // - TodaySchemaインスタンス(mongooseDocument)を保存する処理　　saveTodaySchemaToDatabase() {doc.save()}

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

  addNewTodo(title, notes, priority, scheduledDate, deadline) {
    let todo = new Todo();
    let newTodo = todo.set(title, notes, priority, scheduledDate, deadline);
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
    return this;
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
    return this;
  }

  // インスタンスデータをデータベースに保存する処理 //
  // - InboxSchemaインスタンスの作成　createInboxSchemaInstance()
  // - InboxSchemaインスタンスにInboxインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setInboxSchema()
  // - InboxSchemaインスタンスにuserIdを保存する処理 setUserIdToInboxSchema(userId)
  // - InboxSchemaインスタンス(mongooseDocument)を保存する処理　　saveInboxSchemaToDatabase() {doc.save()}

  static async saveInboxData(inboxInstance) {
    // save inbox data to database;
    const createdInboxSchema = new InboxSchema({
      list: inboxInstance.list,
      size: inboxInstance.size,
      userId: inboxInstance.userId,
    });
    try {
      await createdInboxSchema.save();
    } catch (error) {
      console.log(error);
    }

    return createdInboxSchema;
  }

  static async fetchInboxDataFromDatabase(inboxId) {
    // { userId:userId,
    //   inbox:[todoId]
    //   size: x
    // {
    let inboxData;
    try {
      inboxData = await InboxSchema.findById(inboxId);
    } catch (error) {
      console.log(error);
    }
    return inboxData;
  }

  setUserId(userId) {
    this.userId = userId;
    return userId;
  }
}

// const inbox = new Inbox();
// console.log(inbox);

// const inbox2 = new Inbox(
//   [
//     { title: "abc", notes: "gggg" },
//     { title: "dadads", notes: "ggggg" },
//   ],
//   "user1"
// );
// console.log(inbox2);
// inbox2.add(new Todo("77777", "77777"));
// console.log(inbox2);
// inbox.addNewTodo('abc123','gggg','now','now');
// inbox.setUserId('eeee')
// console.log(inbox);
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
    return this;
  }

  complete() {
    this.isDone = true;
    return this;
  }

  addTodo(todo) {
    this.todoLists.push(todo);
    return this;
  }

  removeTodo(id) {
    const target = this.todoLists.findIndex(
      (v) => v.id.toString() === id.toString()
    );
    this.todoLists.splice(target, 1);
    return this;
  }

  getDeadline() {
    return this.deadLine;
  }

  updateDeadline(deadLine) {
    this.deadLine = deadLine;
    return this;
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

  // インスタンスデータをデータベースに保存する処理 //
  // - ProjectSchemaインスタンスの作成　createProjectSchemaInstance()
  // - ProjectSchemaインスタンスにProjectインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setProjectSchema()
  // - ProjectSchemaインスタンスにuserIdを保存する処理 setUserIdToProjectSchema(userId)
  // - ProjectSchemaインスタンス(mongooseDocument)を保存する処理　　saveProjectSchemaToDatabase() {doc.save()}
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
    return this;
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
    return this;
  }

  static async getAllFromDatabase() {
    return this;
  }

  setUserId(userId) {
    this.userId = userId;
    return this.userId;
  }

  // インスタンスデータをデータベースに保存する処理 //
  // - ActivitySchemaインスタンスの作成　createActivitySchemaInstance()
  // - ActivitySchemaインスタンスにActivityインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setActivitySchema()
  // - ActivitySchemaインスタンスにuserIdを保存する処理 setUserIdToActivitySchema(userId)
  // - ActivitySchemaインスタンス(mongooseDocument)を保存する処理　　saveActivitySchemaToDatabase() {doc.save()}
}

class Logbook {
  // Logbook
  constructor() {
    this.list = [];
    this.size = 0;
  }

  set(completedTodoList) {
    this.list = completedTodoList;
    this.size = this.list.length;
    return this;
  }

  get() {
    return this;
  }

  add(completedTodo) {
    this.list.push(completedTodo);
    this.size++;
    return this;
  }

  organizeByDate(order) {
    let list = this.list;
    let res = {};
    let currentDate;
    let completedTodo = [];
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      const nextElement = list[i + 1];
      currentDate = element.dateCompleted;
      completedTodo.push(element);
      if (currentDate !== nextElement.dateCompleted) {
        res[currentDate] = completedTodo;
        completedTodo = [];
        currentDate = nextElement.dateCompleted;
        continue;
      }
    }

    return res;
  }

  sortByDate(order) {
    // 0 ase 1 des
    let list = this.list;
    if (order === 0) {
      // ase
      list.sort((a, b) => a.dateCompleted - b.dateCompleted);
    } else {
      // des
      list.sort((a, b) => b.dateCompleted - a.dateCompleted);
    }
    return list;
  }

  static async saveToDatabase() {
    // save
    return this;
  }

  static async getAll() {
    // get all doc from database;
    return this;
  }

  // インスタンスデータをデータベースに保存する処理 //
  // - LogbookSchemaインスタンスの作成　createLogbookSchemaInstance()
  // - LogbookSchemaインスタンスにLogbookインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setLogbookSchema()
  // - LogbookSchemaインスタンスにuserIdを保存する処理 setUserIdToLogbookSchema(userId)
  // - LogbookSchemaインスタンス(mongooseDocument)を保存する処理　　saveLogbookSchemaToDatabase() {doc.save()}
}

class TrashBox {
  constructor() {
    this.list = [];
    this.size = 0;
  }

  set(list) {
    this.list = list;
    this.size = this.list.length;
    return this;
  }

  putBack(id, destName, destObj) {
    const targetTodo = this.find(id);
    let oldLength = destObj.list.length;
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
  }

  find(id) {
    const target = this.list.findIndex(
      (v) => v.id.toString() === id.toString()
    );
    return list[target];
  }

  remove(id) {
    this.list = this.list.filter((v) => {
      v.id.toString() !== id.toString();
    });
    this.size--;
    return this;
  }

  getSize() {
    return this.list.length;
  }

  empty() {
    this.list = [];
    this.size = 0;
    return this;
  }

  static async saveToDatabase() {
    // save
    return this;
  }

  static async getAll() {
    // get all doc from database;
    return this;
  }

  // インスタンスデータをデータベースに保存する処理 //
  // - TrashBoxSchemaインスタンスの作成　createTrashBoxSchemaInstance()
  // - TrashBoxSchemaインスタンスにTrashBoxインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setTrashBoxSchema()
  // - TrashBoxSchemaインスタンスにuserIdを保存する処理 setUserIdToTrashBoxSchema(userId)
  // - TrashBoxSchemaインスタンス(mongooseDocument)を保存する処理　　saveTrashBoxSchemaToDatabase() {doc.save()}
}

class WhatToDoNext {}
class Schedule {}

class Upcoming {}

class Anytime {}

class Someday {}

module.exports.todo = Todo;
module.exports.inbox = Inbox;
module.exports.today = Today;
module.exports.project = Project;
module.exports.activity = Activity;
module.exports.trash = TrashBox;
module.exports.logbook = Logbook;
