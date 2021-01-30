import { inboxModel as InboxSchema } from "./../model/inboxSchema";
import { ObjectId } from "mongoose";
import { IInboxSchema } from "../model/inboxSchema";
import { ITodoSchema } from "../model/todoSchema";
import { IUserSchema } from "../model/userSchema";
import { Todo } from "./todo";

export interface InboxInterface {
  list: Todo[] | ITodoSchema[] | any[];
  size: number;
  userId: ObjectId | IUserSchema | string | null;
}

export class Inbox implements InboxInterface {
  static InboxSchema: IInboxSchema;
  list: Todo[] | ITodoSchema[] | any[];
  size: number;
  userId: ObjectId | IUserSchema | string | null;
  constructor(listData: any[], userId) {
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

  static async fetchInboxDataFromDatabase(userId: string) {
    // { userId:userId,
    //   inbox:[todoId]
    //   size: x
    // {
    let inboxData;
    try {
      inboxData = await InboxSchema.find({ userId });
    } catch (error) {
      console.log(error);
    }
    Inbox.InboxSchema = inboxData[0];
    const res = inboxData[0];
    return res;
  }

  setUserId(userId: string) {
    this.userId = userId;
    return userId;
  }

  static async save() {
    try {
      await Inbox.InboxSchema.save();
    } catch (error) {
      console.log(error);
    }
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
