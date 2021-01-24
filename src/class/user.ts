import { Activity, Inbox, Logbook, Today, Todo, TrashBox } from "./todo";

import { userModel as userSchema, IUserSchema } from "../model/userSchema";
import { ObjectID } from "bson";
import { Document, MongooseDocument, ObjectId } from "mongoose";
import { IActivitySchema } from "../model/activitySchema";
import { ITrashBoxSchema } from "../model/trashBoxSchema";
import { ILogbookSchema } from "../model/logbookSchema";
import { IProjectSchema } from "../model/projectSchema";
import { ITodaysSchema } from "../model/todaysSchema";
import { IInboxSchema } from "../model/inboxSchema";
import { ITodoSchema } from "../model/todoSchema";

export interface UserInterface {
  id: string | null;
  name: string | null;
  email: string | null;
  password: string | null;
  confirmPassword: string | null;
  todo: Todo[] | ITodoSchema[] | ObjectId[] | any[];
  inbox: Inbox | IInboxSchema | ObjectId | string | null;
  today: Today | ITodaysSchema | ObjectId | string | null;
  logbook: Logbook | ILogbookSchema | ObjectId | string | null;
  trashBox: TrashBox | ITrashBoxSchema | ObjectId | string | null;
  activity: Activity | IActivitySchema | ObjectId | string | null;
  lastLoggedIns: Date[] | any[];
}
export class User implements UserInterface {
  id: string | null;
  name: string | null;
  email: string | null;
  password: string | null;
  confirmPassword: string | null;
  todo: Todo[] | ITodoSchema[] | ObjectId[] | any[];
  inbox: Inbox | IInboxSchema | ObjectId | string | null;
  today: Today | ITodaysSchema | ObjectId | string | null;
  logbook: Logbook | ILogbookSchema | ObjectId | string | null;
  trashBox: TrashBox | ITrashBoxSchema | ObjectId | string | null;
  activity: Activity | IActivitySchema | ObjectId | string | null;
  lastLoggedIns: Date[] | any[];

  static allUsersInDatabase : IUserSchema[];

  constructor(
    userId?,
    name?,
    email?,
    password?,
    confirmPassword?,
    todo?,
    inbox?,
    today?,
    logbook?,
    trashBox?,
    activity?,
    lastLoggedIns?
  ) {
    this.id = userId ? userId : null;
    this.name = name ? name : null;
    this.email = email ? email : null;
    this.password = password ? password : null;
    this.confirmPassword = confirmPassword ? confirmPassword : null;
    this.todo = todo ? todo : [];
    this.inbox = inbox ? inbox : null;
    this.today = today ? today : null;
    this.logbook = logbook ? logbook : null;
    this.trashBox = trashBox ? trashBox : null;
    this.activity = activity ? activity : null;
    this.lastLoggedIns = lastLoggedIns ? lastLoggedIns : [];
  }

  set(
    id,
    name,
    email,
    password,
    confirmPassword,
    todo,
    inbox,
    today,
    logbook,
    trashBox,
    activity,
    userDoc
  ) {
    this.id = this.setId(id);
    this.name = this.setName(name);
    this.email = this.setEmail(email);
    this.password = this.setPassword(password);
    this.confirmPassword = this.setConfirmPassword(confirmPassword);
    this.todo = this.setTodo(todo);
    this.inbox = this.setInbox(inbox);
    this.today = this.setToday(today);
    this.logbook = this.setLogbook(logbook);
    this.trashBox = this.setTrashBox(trashBox);
    this.activity = this.setActivity(activity);
    this.lastLoggedIns = this.setLastLoggedIns(userDoc);
  }

  setId(id: string) {
    this.id = id;
    return this.id;
  }

  setName(name: string) {
    this.name = name;
    return this.name;
  }
  setEmail(email: string) {
    this.email = email;
    return this.email;
  }

  setPassword(password: string) {
    this.password = password;
    return password;
  }

  setConfirmPassword(confirmPassword: string) {
    this.confirmPassword = confirmPassword;
    return this.confirmPassword;
  }

  setTodo(todo: ITodoSchema) {
    this.todo.push(todo);
    return this.todo;
  }

  setInbox(inbox: IInboxSchema) {
    this.inbox = inbox.id;
    return this.inbox;
  }

  setToday(today: ITodaysSchema) {
    this.today = today.id;
    return this.today;
  }

  setLogbook(logbook: ILogbookSchema) {
    this.logbook = logbook.id;
    return this.logbook;
  }

  setTrashBox(trashBox: ITrashBoxSchema) {
    this.trashBox = trashBox.id;
    return this.trashBox;
  }

  setActivity(activity: IActivitySchema) {
    this.activity = activity.id;
    return this.activity;
  }

  checkPasswordEquity() {
    if (this.password && this.confirmPassword) {
      if (this.password.toString() === this.confirmPassword.toString()) {
        return true;
      } else {
        return false;
      }
    }
  }

  isEmailUnique(email: string) {
    let found = false;
    for (let i = 0; i < User.allUsersInDatabase.length; i++) {
      if (email.toString() === User.allUsersInDatabase[i].email) {
        found = true;
      }
    }
    if (found) {
      return false;
    } else {
      return true;
    }
  }

  setLastLoggedIns(userDoc: IUserSchema) {
    const lastLogin = userDoc ? userDoc.lastLoggedIns : [];
    this.lastLoggedIns = lastLogin;
    let now = new Date();
    this.lastLoggedIns.push(now);
    return this.lastLoggedIns;
  }
  getLastLoggedIn() {
    return this.lastLoggedIns.pop();
  }

  // userインスタンスをデータベースに保存する一連の処理
  // -userSchemaインスタンスを作成する処理 createUserSchema() { const userSchema = new userSchema({})}
  static createUserSchema() {
    const userSchemaInstance = new userSchema({
      name: null,
      email: null,
      password: null,
      todo: [],
      inbox: null,
      today: null,
      logbook: null,
      trashBox: null,
      activity: null,
      lastLoggedIns: [],
    });
    return userSchemaInstance;
  }
  //userSchemaインスタンスにuserインスタンスデータをセットする処理. refでつなぐ他のスキーマId等のフィールドは除く、userSchemaに固有のデータアトリビュートのみをセット(lastLoggedInsにはEmptyArrをセット)。他はNull setUserSchema()
  static setUserSchema(userSchemaInstance: IUserSchema, userInstance: User) {
    try {
      userSchemaInstance.name = userInstance.name;
      userSchemaInstance.email = userInstance.email;
      userSchemaInstance.password = userInstance.password;
      userSchemaInstance.lastLoggedIns = userInstance.lastLoggedIns;
    } catch (error) {
      console.log(error);
    }

    return userSchemaInstance;
  }
  // (signup時の処理を想定。各他スキーマインスタンスをInitializeする処理を他で実行し、各SchemaIDを得、それを以下メソッドにセット。(refを作る))

  // - -userSchemaインスタンスにtodoIdをセットする処理 setTodoIdToUserSchema(todoId);
  static setTodoIdToUserSchema(
    userSchemaInstance: IUserSchema,
    todoSchemaInstanceArr: ITodoSchema[]
  ) {
    // signup時に少なくとも一つはTodoSchemaを作成保存する必要がある。サンプルTodoを強制作成保存する。
    for (let i = 0; i < todoSchemaInstanceArr.length; i++) {
      const todoSchemaInstance = todoSchemaInstanceArr[i];
      userSchemaInstance.todo.push(todoSchemaInstance._id);
    }

    return userSchemaInstance;
  }
  // -userSchemaインスタンスにinboxIdをセットする処理 setInboxIdToUserSchema(inboxId)
  static setInboxIdToUserSchema(
    userSchemaInstance: IUserSchema | any,
    inboxSchemaInstance: IInboxSchema | any
  ) {
    userSchemaInstance.inbox = inboxSchemaInstance._id;
    return userSchemaInstance;
  }
  // -userSchemaインスタンスにtodayIdをセットする処理　setTodayIdToUserSchema(todayId)
  static setTodayIdToUserSchema(
    userSchemaInstance: IUserSchema | any,
    todaySchemaInstance: ITodaysSchema | any
  ) {
    userSchemaInstance.today = todaySchemaInstance._id;
    return userSchemaInstance;
  }
  // -userSchemaインスタンスにproject idをセットする処理
  //　　setProjectIdToUserSchema(projectId)
  static setProjectIdToUserSchema(
    userSchemaInstance: IUserSchema | any,
    projectSchemaInstance: IProjectSchema | any
  ) {
    userSchemaInstance.project = projectSchemaInstance._id;
    return userSchemaInstance;
  }
  // -userSchemaインスタンスにlogbookIdをセットする処理　setLogbookIdToUserSchema(logbookId)
  static setLogbookIdToUserSchema(
    userSchemaInstance: IUserSchema | any,
    logbookSchemaInstance: ILogbookSchema | any
  ) {
    userSchemaInstance.logbook = logbookSchemaInstance._id;
    return userSchemaInstance;
  }
  // -userSchemaインスタンスにtrashBoxIdをセットする処理　setTrashBoxIdToUserSchema(trashBoxId)
  static setTrashBoxIdToUserSchema(
    userSchemaInstance: IUserSchema | any,
    trashBoxSchemaInstance: ITrashBoxSchema | any
  ) {
    userSchemaInstance.trashBox = trashBoxSchemaInstance._id;
    return userSchemaInstance;
  }
  // -userSchemaインスタンスにactivityIdをセットする処理　setActivityIdToUserSchema(activityId)
  static setActivityIdToUserSchema(
    userSchemaInstance: IUserSchema | any,
    activitySchemaInstance: IActivitySchema | any
  ) {
    userSchemaInstance.activity = activitySchemaInstance._id;
    return userSchemaInstance;
  }

  // -userSchemaインスタンス（mongooseDocument)をデータベースに保存する処理 saveUserSchemaToDatabase() {userSchema.save()}
  static async saveUserSchemaToDatabase(
    userSchemaInstance: IUserSchema | Document<any>
  ) {
    try {
      await userSchemaInstance.save();
    } catch (error) {
      console.log(error);
    }
  }

  static async saveToDatabase() {
    // save to database;
  }

  static async updateAndSaveExistingUser() {
    // update and sav. this.set() + save();
  }

  static async getUserFromDatabase(userId: string) {
    // get userDoc from database;
    let userData;
    try {
      userData = await userSchema.findById(userId);
    } catch (error) {
      console.log(error);
    }

    return userData;
  }
}
