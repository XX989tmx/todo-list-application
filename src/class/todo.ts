import { ITodaysSchema } from "./../model/todaysSchema";
import { IInboxSchema } from "./../model/inboxSchema";
import { IProjectSchema } from "./../model/projectSchema";
import { ITodoSchema } from "./../model/todoSchema";
import { IActivitySchema } from "./../model/activitySchema";
import { ILogbookSchema } from "./../model/logbookSchema";
import { IUserSchema } from "./../model/userSchema";
import { ITrashBoxSchema } from "./../model/trashBoxSchema";
import { v4 as uuidv4 } from "uuid";
import { todoModel as TodoSchema } from "../model/todoSchema";
import { todaysModel as TodaySchema } from "../model/todaysSchema";
import { inboxModel as InboxSchema } from "../model/inboxSchema";
import { projectModel as ProjectSchema } from "../model/projectSchema";
import { activityModel as ActivitySchema } from "../model/activitySchema";
import { logbookModel as LogbookSchema } from "../model/logbookSchema";
import { trashBoxModel as TrashBoxSchema } from "../model/trashBoxSchema";
import { Document, ObjectId } from "mongoose";

export interface TodoInterface {
  id: string | ObjectId | null;
  title: string | null;
  notes: string | null;
  priority: number | null;
  dateCreated: Date | any;
  scheduledDate: Date | any;
  deadline: Date | any;
  isDone: boolean | null;
  userId: ObjectId | IUserSchema | string | null;
  dateCompleted: Date | any;
}

export class Todo implements TodoInterface {
  // priority 1 , 2 ,3.  1 = lowest, 3 = highest
  id: string | ObjectId | null;
  title: string | null;
  notes: string | null;
  priority: number | null;
  dateCreated: Date | any;
  scheduledDate: Date | any;
  deadline: Date | any;
  isDone: boolean | null;
  userId: ObjectId | IUserSchema | string | null;
  dateCompleted: Date | any;
  constructor(title, notes, priority, scheduledDate, deadline, userId) {
    this.id = null;
    this.title = title ? title : null;
    this.notes = notes ? notes : null;
    this.priority = priority ? priority : null;
    this.dateCreated = new Date();
    this.scheduledDate = scheduledDate ? scheduledDate : null;
    this.deadline = deadline ? deadline : null;
    this.isDone = false;
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

  setPriority(priority: number) {
    this.priority = priority;
    return this;
  }

  getPriority() {
    return this.priority;
  }

  setDeadline(deadLine: Date) {
    this.deadline = deadLine;
    return this;
  }

  setScheduledDate(scheduledDate: Date) {
    this.scheduledDate = scheduledDate;
    return this;
  }

  updateTitle(title: string) {
    this.title = title;
    return this;
  }

  updateNotes(notes: string) {
    this.notes = notes;
    return this;
  }

  updateScheduledDate(scheduledDate: Date) {
    this.scheduledDate = scheduledDate;
    return this;
  }

  updateDeadline(deadLine: Date) {
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
  static createTodoSchemaInstance() {
    const todoSchemaInstance = new TodoSchema({
      title: null,
      notes: null,
      priority: null,
      dateCreated: new Date(),
      scheduledDate: null,
      deadline: null,
      isDone: null,
      userId: null,
    });
    return todoSchemaInstance;
  }
  // - todoSchemaインスタンスにTodoインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setTodoSchema()
  static setTodoSchema(todoSchemaInstance: ITodoSchema|any, todo: any) {
    todoSchemaInstance.title = todo.title;
    todoSchemaInstance.notes = todo.notes;
    todoSchemaInstance.priority = todo.priority;
    todoSchemaInstance.dateCreated = todo.dateCreated;
    todoSchemaInstance.scheduledDate = todo.scheduledDate;
    todoSchemaInstance.deadline = todo.deadline;
    todoSchemaInstance.isDone = todo.isDone;

    return todoSchemaInstance;
  }
  // - todoSchemaインスタンスにuserIdを保存する処理 setUserIdToTodoSchema(userId)
  static setUserIdToTodoSchema(
    todoSchemaInstance: ITodoSchema|any,
    userSchemaInstance: IUserSchema|any
  ) {
    todoSchemaInstance.userId = userSchemaInstance._id;
    return todoSchemaInstance;
  }
  // - todoSchemaインスタンス(mongooseDocument)を保存する処理　　saveTodoSchemaToDatabase() {doc.save()}
  static async saveTodoSchemaToDatabase(todoSchemaInstance: ITodoSchema | any) {
    
    try {
      await todoSchemaInstance.save();
    } catch (error) {
      console.log(error);
    }
  }

  static async saveToDatabase(todo: Todo) {
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

  setUserId(userId: string) {
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

export interface TodayInterface {
  todaysList: Todo[] | ITodoSchema[] | any[];
  userId: ObjectId | IUserSchema | string | null;
}

export class Today implements TodayInterface {
  todaysList: Todo[] | ITodoSchema[] | any[];
  userId: ObjectId | IUserSchema | string | null;
  constructor() {
    this.todaysList = [];
    this.userId = null;
  }

  getAll(): Todo[] | ITodoSchema[] {
    return this.todaysList;
  }

  completeTodo(id: string) {
    for (let i = 0; i < this.todaysList.length; i++) {
      if (
        this.todaysList[i].toString() === id.toString() &&
        this.todaysList[i].isDone === false
      ) {
        this.todaysList[i].isDone = true;
        this.removeTodoFromToday(id);
        return this.todaysList[i];
      }
    }
  }

  setTodoAsToday(todo: Todo | ITodoSchema) {
    this.todaysList.push(todo);
    return this;
  }

  removeTodoFromToday(id: string): Today {
    const target = this.todaysList.findIndex(
      (v) => v._id.toString() === id.toString()
    );
    this.todaysList.splice(target, 1);
    return this;
  }

  empty(params): Today {
    this.todaysList = [];
    return this;
  }

  count(): number {
    return this.todaysList.length;
  }

  getTodaysTodoFromAll(todoAll: any[]) {
    // todoAll = todoDoc[];
    // get todo matched with todays date or scheduled at today from outer list such as inbox or allTodo or schedule class.
    // 起動するごと実行し、todayにスケジュールされたTodoをTodaysListに入れる。
    let today = new Date().getDate();
    for (const todo of todoAll) {
      const todoDate = todo.scheduledDate.getDate();
      if (todoDate === today) {
        this.todaysList.push(todo);
        // this.size++;
      }
    }

    return this;
  }

  // インスタンスデータをデータベースに保存する処理 //
  // - TodaySchemaインスタンスの作成　createTodaySchemaInstance();

  static createTodaySchemaInstance() {
    const todaySchemaInstance = new TodaySchema({
      todaysList: [],
      userId: null,
    });
    return todaySchemaInstance;
  }
  // - TodaySchemaインスタンスにTodayインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setTodaySchema()
  static setTodaySchema(
    todaySchemaInstance: ITodaysSchema,
    todayInstance: any
  ) {
    todaySchemaInstance.todaysList = todayInstance.todaysList;
    return todaySchemaInstance;
  }
  // - TodaySchemaインスタンスにuserIdを保存する処理 setUserIdToTodaySchema(userId)
  static setUserIdToTodaySchema(
    todaySchemaInstance: ITodaysSchema | any,
    userSchemaInstance: IUserSchema | any
  ) {
    todaySchemaInstance.userId = userSchemaInstance._id;
    return todaySchemaInstance;
  }
  // - TodaySchemaインスタンス(mongooseDocument)を保存する処理　　saveTodaySchemaToDatabase() {doc.save()}
  static async saveTodaySchemaToDatabase(
    todaySchemaInstance: ITodaysSchema | Document<any>
  ) {
    try {
      await todaySchemaInstance.save();
    } catch (error) {
      console.log(error);
    }
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

export interface InboxInterface {
  list: Todo[] | ITodoSchema[] | any[];
  size: number;
  userId: ObjectId | IUserSchema | string | null;
}

export class Inbox implements InboxInterface {
  list: Todo[] | ITodoSchema[] | any[];
  size: number;
  userId: ObjectId | IUserSchema | string | null;
  constructor(listData:any[], userId) {
    this.list = listData ? listData : [];
    this.size = listData ? listData.length : 0;
    this.userId = userId ? userId : null;
  }

  addNewTodo(title, notes, priority, scheduledDate, deadline) {
    let todo = new Todo(title, notes, priority, scheduledDate, deadline, null);
    let newTodo = todo;
    // .set(title, notes, priority, scheduledDate, deadline);
    console.log(newTodo);
    this.add(newTodo);
    return this;
  }

  getAll(): Todo[] | ITodoSchema[] | any[] {
    return this.list;
  }

  add(todo: Todo): Inbox {
    this.list.push(todo);
    this.size++;
    return this;
  }

  remove(id: string): Inbox {
    const target = this.list.findIndex(
      (v) => v.id.toString() === id.toString()
    );
    this.list.splice(target, 1);
    this.size--;
    return this;
  }

  find(id: string): Todo {
    const target = this.list.findIndex(
      (v) => v.id.toString() === id.toString()
    );
    return this.list[target];
  }

  count(): number {
    return this.size;
  }

  checkIsDone(id: string) {
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

  removeCompletedTodo(id: string) {
    let idx = this.checkIsDone(id);
    console.log(idx);
    this.list = this.list.filter((v) => v.isDone !== true);
    this.size--;
    return this;
  }

  // インスタンスデータをデータベースに保存する処理 //
  // - InboxSchemaインスタンスの作成　createInboxSchemaInstance()
  static createInboxSchemaInstance() {
    const inboxSchemaInstance = new InboxSchema({
      list: [],
      size: 0,
      userId: null,
    });
    return inboxSchemaInstance;
  }
  // - InboxSchemaインスタンスにInboxインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setInboxSchema()
  static setInboxSchema(inboxSchemaInstance: IInboxSchema, inboxInstance: any) {
    inboxSchemaInstance.list = inboxInstance.list;
    inboxSchemaInstance.size = inboxInstance.size;
    return inboxSchemaInstance;
  }
  // - InboxSchemaインスタンスにuserIdを保存する処理 setUserIdToInboxSchema(userId)
  static setUserIdToInboxSchema(
    inboxSchemaInstance: IInboxSchema | any,
    userSchemaInstance: IUserSchema | any
  ) {
    inboxSchemaInstance.userId = userSchemaInstance._id;
    return inboxSchemaInstance;
  }
  // - InboxSchemaインスタンス(mongooseDocument)を保存する処理　　saveInboxSchemaToDatabase() {doc.save()};

  static async saveInboxSchemaToDatabase(inboxSchemaInstance: IInboxSchema) {
    try {
      await inboxSchemaInstance.save();
    } catch (err) {
      console.log(err);
    }
  }

  static async saveInboxData(inboxInstance: Inbox) {
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

  static async fetchInboxDataFromDatabase(userId:string) {
    // { userId:userId,
    //   inbox:[todoId]
    //   size: x
    // {
    let inboxData;
    try {
      inboxData = await InboxSchema.find({userId});
    } catch (error) {
      console.log(error);
    }
    const res = inboxData[0]
    return res;
  }

  setUserId(userId: string) {
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

//複数の Project class instance をストアする。 Projectスキーマをデータベースから呼び出した際、スキーマ達をストアする。
class ProjectLists {}

export interface ProjectInterface {
  todoLists: Todo[] | ITodoSchema[] | any[];
  title: string | null;
  notes: string | null;
  isDone: boolean | null;
  dateCreated: Date | any;
  deadLine: Date | any;
  scheduledDate: Date | any;
  progressStatus: number | null;
  userId: ObjectId | IUserSchema | string | null;
}

export class Project {
  todoLists: Todo[] | ITodoSchema[] | any[];
  title: string | null;
  notes: string | null;
  isDone: boolean | null;
  dateCreated: Date | any;
  deadLine: Date | any;
  scheduledDate: Date | any;
  progressStatus: number;
  userId: ObjectId | IUserSchema | string | null;

  constructor(title, notes, deadLine, scheduledDate, userId) {
    this.todoLists = [];
    this.title = title ? title : null;
    this.notes = notes ? notes : null;
    this.isDone = false;
    this.dateCreated = new Date();
    this.deadLine = deadLine ? deadLine : null;
    this.scheduledDate = scheduledDate ? scheduledDate : null;
    this.progressStatus = 0; // 0 - 100;
    this.userId = userId ? userId : null;
  }

  getProgressStatus(): number {
    return this.progressStatus;
  }

  getCountOfCompletedTodo(): number {
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

  getCurrentProgressPercentage(): number {
    const totalCount = this.getCountOfTodo();
    const completeTodo = this.getCountOfCompletedTodo();

    const num = Math.floor(totalCount / completeTodo);
    const percentage = Math.floor(100 / num);
    return percentage;
  }

  updateProgressStatus(): Project {
    this.progressStatus = this.getCurrentProgressPercentage();
    return this;
  }

  complete(): Project {
    this.isDone = true;
    return this;
  }

  addTodo(todo: Todo): Project {
    this.todoLists.push(todo);
    return this;
  }

  removeTodo(id: string): Project {
    const target = this.todoLists.findIndex(
      (v) => v.id.toString() === id.toString()
    );
    this.todoLists.splice(target, 1);
    return this;
  }

  getDeadline() {
    return this.deadLine;
  }

  updateDeadline(deadLine: Date): Project {
    this.deadLine = deadLine;
    return this;
  }

  getDateCreated(): Date {
    return this.dateCreated;
  }

  getCountOfTodo(): number {
    return this.todoLists.length;
  }

  setUserId(userId: string) {
    this.userId = userId;
    return userId;
  }

  // インスタンスデータをデータベースに保存する処理 //
  // - ProjectSchemaインスタンスの作成　createProjectSchemaInstance()
  static createProjectSchemaInstance() {
    const projectSchemaInstance = new ProjectSchema({
      todoLists: [],
      title: null,
      notes: null,
      isDone: null,
      dateCreated: null,
      deadline: null,
      scheduledDate: null,
      progressStatus: null,
      userId: null,
    });
    return projectSchemaInstance;
  }
  // - ProjectSchemaインスタンスにProjectインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setProjectSchema()
  static setProjectSchema(
    projectSchemaInstance: IProjectSchema,
    projectInstance: any
  ) {
    projectSchemaInstance.todoLists = projectInstance.todoLists;
    projectSchemaInstance.title = projectInstance.title;
    projectSchemaInstance.notes = projectInstance.notes;
    projectSchemaInstance.isDone = projectInstance.isDone;
    projectSchemaInstance.dateCreated = projectInstance.dateCreated;
    projectSchemaInstance.deadLine = projectInstance.deadLine;
    projectSchemaInstance.scheduledDate = projectInstance.scheduledDate;
    projectSchemaInstance.progressStatus = projectInstance.progressStatus;

    return projectSchemaInstance;
  }
  // - ProjectSchemaインスタンスにuserIdを保存する処理 setUserIdToProjectSchema(userId)
  static setUserIdToProjectSchema(
    projectSchemaInstance: IProjectSchema | any,
    userSchemaInstance: IUserSchema | any
  ) {
    projectSchemaInstance.userId = userSchemaInstance._id;
    return projectSchemaInstance;
  }
  // - ProjectSchemaインスタンス(mongooseDocument)を保存する処理　　saveProjectSchemaToDatabase() {doc.save()}
  static async saveProjectSchemaToDatabase(
    projectSchemaInstance: IProjectSchema
  ) {
    try {
      await projectSchemaInstance.save();
    } catch (error) {
      console.log(error);
    }
  }
}

// todo 複数のActivity class instanceをストアする。データベースから複数のActivityスキーマを呼び出した際は、それをストアする。ここにActivityClassのメソッドをループでかけてもいいし、ActivityListクラスにメソッドを追加してもいい。データベースへの保存も同様。　ActivityListうクラスの状態をスキーマにセットしデータベースに保存するメソッドを追加する。
class ActivityList {}

export interface ActivityInterface {
  id: ObjectId | IUserSchema | string | null;
  date: Date | any;
  accomplishedTodo: Todo[] | ITodoSchema[] | any[];
  accomplishedCount: number;
  productivityScore: number;
  isInRowState: boolean;
  inRowDuration: number;
  longestInRowDuration: number;
  userId: ObjectId | IUserSchema | string | null;
}

export class Activity implements ActivityInterface {
  // 1日1Activityインスタンス（スキーマ）の関係性。それぞれの集合についてはActivityList,ActivitySchemaListで管理する。TodoとTodolistの関係とほぼ同様
  // 毎日計測
  // productivity scoreはクライアント側で色の濃度と連動
  // productivity score 基準
  // 0個達成：0, 1個以上達成:1, 5個以上達成:2, 10個以上達成:3
  // inRow bonus:
  // 2日以上highが連続するとtrueにする。クライアントサイドで金色に連動

  //!!! Activity class に加え、Activities classを追加する.
  //!!! また、Activity Schemaだけでなく、activities schemaも追加する. user Schemaにrefをつける
  // !! 変更に従い、productivity scoreの集計ロジックのやり方と、配置するクラスに変更を加える必要があるかもしれない

  id: ObjectId | IUserSchema | string | null;
  date: Date | any;
  accomplishedTodo: Todo[] | ITodoSchema[] | any[];
  accomplishedCount: number;
  productivityScore: number;
  isInRowState: boolean;
  inRowDuration: number;
  longestInRowDuration: number;
  userId: ObjectId | IUserSchema | string | null;

  constructor() {
    this.id = null;
    this.date = null; // date of today
    this.accomplishedTodo = [];
    this.accomplishedCount = 0;
    this.productivityScore = 0; // 0:none,1:low,2:mid,3:high
    this.isInRowState = false;
    this.inRowDuration = 0;
    this.longestInRowDuration = 0; //n days
    this.userId = null;
  }

  // todoDocあたりがおかしいので変更
  set(todoDoc, date, accomplishedTodo, userId) {
    this.id = todoDoc.id;
    this.date = this.getToday();
    this.accomplishedTodo = this.setAccomplishedTodo(todoDoc);
    this.accomplishedCount = this.setAccomplishedCount();
    this.productivityScore = this.getProductivityScore();
    this.isInRowState = this.isInRow(todoDoc);
    this.inRowDuration = this.getInRowDuration(todoDoc);
    this.longestInRowDuration = 0;
    this.userId = this.setUserId(userId);
    return this;
  }

  setAccomplishedTodo(todo: Todo) {
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

  isInRow(todoDoc: Todo) {
    const id = todoDoc.id;
    let oldToNewSortedArr: Todo[] = this.accomplishedTodo.sort(
      (a, b) => a.dateCompleted - b.dateCompleted
    );
    let count = 0;
    // for (let i = id; i < oldToNewSortedArr.length; i--) {
    //   if (oldToNewSortedArr[i].productivityScore > 10) {
    //     count += 1;
    //   }
    // }
    if (count > 1) {
      return true;
    } else {
      return false;
    }
  }

  getInRowDuration(todoDoc: Todo | ITodoSchema) {
    const id = todoDoc.id;
    let oldToNewSortedArr: Todo[] = this.accomplishedTodo.sort(
      (a, b) => a.dateCompleted - b.dateCompleted
    );
    let idxOfTargetDocId: number;
    for (let i = 0; i < this.accomplishedTodo.length; i++) {
      if (this.accomplishedTodo[i].id.toString() === id.toString()) {
        idxOfTargetDocId = this.accomplishedTodo[i].id.toString();
      }
    }

    let count = 0;
    // for (let i = idxOfTargetDocId; i < oldToNewSortedArr.length; i--) {
    //   if (oldToNewSortedArr[i].productivityScore > 10) {
    //     count += 1;
    //   } else {
    //     break;
    //   }
    // }
    return count;
  }

  getLongestInRowDuration(todoDoc: Todo | ITodoSchema) {
    const id = todoDoc.id;
    let oldToNewSortedArr = this.accomplishedTodo.sort(
      (a, b) => a.dateCompleted - b.dateCompleted
    );
    let idxOfTargetDocId;
    if (id !== null) {
      for (let i = 0; i < this.accomplishedTodo.length; i++) {
        if (this.accomplishedTodo[i].id.toString() === id.toString()) {
          idxOfTargetDocId = this.accomplishedTodo[i].id.toString();
        }
      }
    }

    let countArr = [];
    let count = 0;
    // for (let i = idxOfTargetDocId; i < oldToNewSortedArr.length; i--) {
    //   if (oldToNewSortedArr[i].productivityScore > 10) {
    //     count += 1;
    //   } else {
    //     countArr.push(count);
    //     count = 0;
    //   }
    // }
    // const maxInRow = Math.max(...countArr);
    // return maxInRow;
  }

  static async saveToDatabase() {
    // save to database
    return this;
  }

  static async getAllFromDatabase() {
    return this;
  }

  setUserId(userId: string) {
    this.userId = userId;
    return this.userId;
  }

  // インスタンスデータをデータベースに保存する処理 //
  // - ActivitySchemaインスタンスの作成　createActivitySchemaInstance()
  static createActivitySchemaInstance() {
    const activitySchemaInstance = new ActivitySchema({
      date: null,
      accomplishedTodo: [],
      accomplishedCount: 0,
      productivityScore: 0,
      isInRow: null,
      inRowDuration: null,
      longestInRowDuration: 0,
      userId: null,
    });
    return activitySchemaInstance;
  }
  // - ActivitySchemaインスタンスにActivityインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setActivitySchema()
  static setActivitySchema(
    activitySchemaInstance: IActivitySchema,
    activityInstance: any
  ) {
    activitySchemaInstance.date = activityInstance.date;
    activitySchemaInstance.accomplishedTodo = activityInstance.accomplishedTodo;
    activitySchemaInstance.accomplishedCount =
      activityInstance.accomplishedCount;
    activitySchemaInstance.productivityScore =
      activityInstance.productivityScore;
    activitySchemaInstance.isInRow = activityInstance.isInRowState;
    activitySchemaInstance.inRowDuration = activityInstance.inRowDuration;
    activitySchemaInstance.longestInRowDuration =
      activityInstance.longestInRowDuration;

    return activitySchemaInstance;
  }
  // - ActivitySchemaインスタンスにuserIdを保存する処理 setUserIdToActivitySchema(userId)
  static setUserIdToActivitySchema(
    activitySchemaInstance: IActivitySchema | any,
    userSchemaInstance: IUserSchema | any
  ) {
    activitySchemaInstance.userId = userSchemaInstance._id;
    return activitySchemaInstance;
  }
  // - ActivitySchemaインスタンス(mongooseDocument)を保存する処理　　saveActivitySchemaToDatabase() {doc.save()}
  static async saveActivitySchemaToDatabase(
    activitySchemaInstance: IActivitySchema | Document<any>
  ) {
    try {
      await activitySchemaInstance.save();
    } catch (error) {
      console.log(error);
    }
  }
}

export interface LogbookSchema {
  list: Todo[] | ITodoSchema[] | any[];
  size: number;
}

export class Logbook implements LogbookSchema {
  // Logbook
  list: Todo[] | ITodoSchema[] | any[];
  size: number;
  constructor() {
    this.list = [];
    this.size = 0;
  }

  set(completedTodoList: Todo[] | ITodoSchema[]): Logbook {
    this.list = completedTodoList;
    this.size = this.list.length;
    return this;
  }

  get(): Logbook {
    return this;
  }

  add(completedTodo: Todo | ITodoSchema): Logbook {
    this.list.push(completedTodo);
    this.size++;
    return this;
  }

  organizeByDate(order) {
    let list = this.list;
    let res = {};
    let currentDate;
    let completedTodo: Todo[] = [];
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

  sortByDate(order: number) {
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
  static createLogbookSchemaInstance() {
    const logbookSchemaInstance = new LogbookSchema({
      list: [],
      size: 0,
    });
    return logbookSchemaInstance;
  }
  // - LogbookSchemaインスタンスにLogbookインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setLogbookSchema()
  static setLogbookSchema(
    logbookSchemaInstance: ILogbookSchema,
    logbookInstance: any
  ) {
    logbookSchemaInstance.list = logbookInstance.list;
    logbookSchemaInstance.size = logbookInstance.size;
    return logbookSchemaInstance;
  }
  // - LogbookSchemaインスタンスにuserIdを保存する処理 setUserIdToLogbookSchema(userId)
  static setUserIdToLogbookSchema(
    logbookSchemaInstance: ILogbookSchema | any,
    userSchemaInstance: IUserSchema | any
  ) {
    logbookSchemaInstance.userId = userSchemaInstance._id;
    return logbookSchemaInstance;
  }
  // - LogbookSchemaインスタンス(mongooseDocument)を保存する処理　　saveLogbookSchemaToDatabase() {doc.save()}
  static async saveLogbookSchemaToDatabase(
    logbookSchemaInstance: ILogbookSchema | Document<any>
  ) {
    try {
      await logbookSchemaInstance.save();
    } catch (error) {
      console.log(error);
    }
  }
}

export interface TrashBoxInterface {
  list: Todo[] | ITodoSchema[] | any[];
  size: number;
}

export class TrashBox implements TrashBoxInterface {
  list: Todo[] | ITodoSchema[] | any[];
  size: number;
  constructor() {
    this.list = [];
    this.size = 0;
  }

  set(list: Todo[] | ITodoSchema[]): TrashBox {
    this.list = list;
    this.size = this.list.length;
    return this;
  }

  putBack(id: ObjectId | string, destName: string, destObj) {
    //todo Today のtodaysListをlistに変更する。全てlistで一貫させる destObjをToday,Inbox,Project全てに対応できるように
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
    return this.list[target];
  }

  remove(id: string | ObjectId) {
    const updated = this.list.filter((v) => {
      return v.id.toString() !== id.toString();
    });
    this.list = updated;
    this.size--;

    return this;
  }

  getSize() {
    return this.list.length;
  }

  empty(): TrashBox {
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
  static createTrashBoxSchemaInstance() {
    const trashBoxSchemaInstance = new TrashBoxSchema({
      list: [],
      size: 0,
    });
    return trashBoxSchemaInstance;
  }
  // - TrashBoxSchemaインスタンスにTrashBoxインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setTrashBoxSchema()
  static setTrashBoxSchema(
    trashBoxSchemaInstance: ITrashBoxSchema,
    trashBoxInstance: any
  ) {
    trashBoxSchemaInstance.list = trashBoxInstance.list;
    trashBoxSchemaInstance = trashBoxInstance.size;
    return trashBoxSchemaInstance;
  }
  // - TrashBoxSchemaインスタンスにuserIdを保存する処理 setUserIdToTrashBoxSchema(userId)
  static setUserIdToTrashBoxSchema(
    trashBoxSchemaInstance: ITrashBoxSchema | any,
    userSchemaInstance: IUserSchema | any
  ) {
    trashBoxSchemaInstance.userId = userSchemaInstance._id;
    return trashBoxSchemaInstance;
  }
  // - TrashBoxSchemaインスタンス(mongooseDocument)を保存する処理　　saveTrashBoxSchemaToDatabase() {doc.save()}
  static async saveTrashBoxSchemaToDatabase(
    trashBoxSchemaInstance: ITrashBoxSchema | Document<any>
  ) {
    try {
      await trashBoxSchemaInstance.save();
    } catch (error) {
      console.log(error);
    }
  }
}

class WhatToDoNext {}
class Schedule {}

class Upcoming {}

class Anytime {}

class Someday {}

// export const todo = Todo;
// export const inbox = Inbox;
// export const today = Today;
// export const project = Project;
// export const activity = Activity;
// export const trashBox = TrashBox;
// export const logbook = Logbook;
