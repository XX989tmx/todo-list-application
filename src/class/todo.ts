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
  static TodoSchema: ITodoSchema;
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
  static setTodoSchema(todoSchemaInstance: ITodoSchema | any, todo: any) {
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
    todoSchemaInstance: ITodoSchema | any,
    userSchemaInstance: IUserSchema | any
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

  async updateTodoSchema(todoId) {
    const updateObject = {
      title: this.title,
      notes: this.notes,
      priority: this.priority,
      scheduledDate: this.scheduledDate,
      deadline: this.deadline,
    };
    try {
      await TodoSchema.findByIdAndUpdate(todoId, updateObject);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  static async updateTodoSchema(
    todoId: string,
    title?,
    notes?,
    priority?,
    scheduledDate?,
    deadline?
  ) {
    const updateObject = {
      title,
      notes,
      priority: +priority,
      scheduledDate,
      deadline,
    };
    try {
      await TodoSchema.findByIdAndUpdate(todoId, updateObject);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  static async getTodoSchema(todoId: string) {
    let todoSchema;
    try {
      todoSchema = await TodoSchema.findById(todoId);
      Todo.TodoSchema = todoSchema;
    } catch (error) {
      console.log(error);
    }
    if (!todoSchema) {
      console.log("error");
    }
    return todoSchema;
  }

  static async save() {
    try {
      await Todo.TodoSchema.save();
    } catch (error) {
      console.log(error);
    }
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
