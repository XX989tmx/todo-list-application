import { Document } from 'mongoose';
import { logbookModel as LogbookSchema} from './../model/logbookSchema';
import { ILogbookSchema } from "../model/logbookSchema";
import { ITodoSchema } from "../model/todoSchema";
import { IUserSchema } from "../model/userSchema";
import { Todo } from "./todo";

export interface LogbookSchema {
  list: Todo[] | ITodoSchema[] | any[];
  size: number;
}

export class Logbook implements LogbookSchema {
  // Logbook
  static LogbookSchema: ILogbookSchema;
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

  static pushTodoSchemaToLogbookSchemaList(todoSchema) {
    try {
      Logbook.LogbookSchema.list.push(todoSchema._id);
    } catch (error) {
      console.log(error);
    }
  }

  static async getLogbookSchema(userId: string) {
    let logbookSchema;
    try {
      logbookSchema = await LogbookSchema.findOne({ userId: userId });
    } catch (error) {}
    Logbook.LogbookSchema = logbookSchema;
    return logbookSchema;
  }

  static async save() {
    try {
      await Logbook.LogbookSchema.save();
    } catch (error) {
      console.log(error);
    }
  }
}
