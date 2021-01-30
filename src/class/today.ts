import { Document } from 'mongoose';
import { ITodoSchema } from './../model/todoSchema';
import { IUserSchema } from './../model/userSchema';
import { ObjectId } from 'mongoose';
import { ITodaysSchema, todaysModel as TodaySchema } from './../model/todaysSchema';
import { Todo } from './todo';
export interface TodayInterface {
  todaysList: Todo[] | ITodoSchema[] | any[];
  userId: ObjectId | IUserSchema | string | null;
}

export class Today implements TodayInterface {
  static TodaySchema: ITodaysSchema;
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

  // static async save() {
  //   // save todaysList to database;
  // }

  static async getTodaysList() {
    // get todays list from; database
  }

  setUserId(userId) {
    this.userId = userId;
    return this.userId;
  }

  static async getTodaySchemaFromDatabase(userId) {
    let todaySchema;
    try {
      todaySchema = await TodaySchema.findOne({ userId });
      Today.TodaySchema = todaySchema;
    } catch (error) {
      console.log(error);
    }

    return todaySchema;
  }

  static async save() {
    try {
      await Today.TodaySchema.save();
    } catch (error) {
      console.log(error);
    }
  }
}
