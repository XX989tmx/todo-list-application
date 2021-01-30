import { trashBoxModel as TrashBoxSchema } from './../model/trashBoxSchema'; 
import { ObjectId,Document } from "mongoose";
import { ITodoSchema } from "../model/todoSchema";
import { ITrashBoxSchema } from "../model/trashBoxSchema";
import { IUserSchema } from "../model/userSchema";
import { Todo } from "./todo";

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
