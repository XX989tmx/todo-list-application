import { projectModel as ProjectSchema } from './../model/projectSchema';
import { ObjectId } from "mongoose";
import { IProjectSchema } from "../model/projectSchema";
import { ITodoSchema } from "../model/todoSchema";
import { IUserSchema } from "../model/userSchema";
import { Todo } from "./todo";


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
  static ProjectSchema: IProjectSchema;
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
