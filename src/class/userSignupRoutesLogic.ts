import { ILogbookSchema } from "./../model/logbookSchema";
import { ITodoSchema } from "./../model/todoSchema";
import { ITodaysSchema } from "./../model/todaysSchema";
import axios from "axios";
import {
  Todo
} from "./todo";
import { User } from "./user";
import { todoModel as TodoSchema } from "../model/todoSchema";
import { todaysModel as TodaySchema } from "../model/todaysSchema";
import { IInboxSchema, inboxModel as inboxSchema } from "../model/inboxSchema";
import {
  IProjectSchema,
  projectModel as ProjectSchema,
} from "../model/projectSchema";
import { activityModel as ActivitySchema } from "../model/activitySchema";
import { logbookModel as LogbookSchema } from "../model/logbookSchema";
import { trashBoxModel as TrashBoxSchema } from "../model/trashBoxSchema";
// const TodoSchema = require("../model/todoSchema");
// const UserSchema = require("../model/userSchema");
// const InboxSchema = require("../model/inboxSchema");
// const TodaysSchema = require("../model/todaysSchema");
// const LogbookSchema = require("../model/logbookSchema");
// const ActivitySchema = require("../model/activitySchema");
import { userModel as UserSchema, IUserSchema } from "../model/userSchema";
import { Document } from "mongoose";
import { Request } from "express";
import { Activity } from "./activity";
import { Inbox } from "./inbox";
import { Logbook } from "./logbook";
import { Project } from "./project";
import { Today } from "./today";
import { TrashBox } from "./trashBox";

export interface userInputsData {
  name: string;
  email: string;
  password: string;
}

export class UserSignupRoutesLogic {
  // User　Schema　インスタンスをInitialize
  // User class instance を initialize
  // req body からUser field をOBD

  // req body のUserDataを元に、User　Class　Instanceにデータをセットする。
  // todoIdをUser　Schema　インスタンスにセット（Nullかダミーデータ）
  // todo schema instance を initialize
  // user id をTodoSchemaにセット
  // today schema instance をInitialize
  // today schema instance のIdを、User　Schema　Instanceにセット
  // user id をToday　Schemaにセット
  // inbox schema instance をInitialize
  // inbox schema instance のIdを　User　Schema　Instanceにセット
  // user id を inbox schema にセット

  // project schema instance をInitialize
  // project schema instance のIdを　User　Schema　Instanceにセット
  // user id を project schema にセット

  // logbook schema instance をInitialize
  // logbook schema instance のIdを　User　Schema　Instanceにセット
  // user id を　logbook schema にセット
  // trashBox Schema Instance をInitialize
  // trashBox Schema Instance のIdを　UserSchema　Instanceにセット
  // user id を　trashBox Schema にセット
  // activity schema instance をInitialize
  // activity schema Instance のIdを　User　Schema　Instanceにセット
  // user id を　activity schema にセット

  //
  // todo schema を保存
  // inbox schema を保存
  // today schemaを保存
  // logbook schema を保存
  // trashBox schema を保存
  // activity schema を保存
  // user schema を保存

  async signup(req: Request) {
    // User　Schema　インスタンスをInitialize
    const userSchemaInstance = User.createUserSchema();
    // User class instance を initialize
    const userClassInstance = new User();
    // req body からUser field をOBD
    const userInputsData = UserSignupRoutesLogic.parseReqBodyFieldOfUserData(
      req
    );
    // req body のUserDataを元に、User　Class　Instanceにデータをセットする。
   const updatedUserSchemaInstance = UserSignupRoutesLogic.setUserInputsDataToUserSchemaInstance(
      userInputsData,
      userSchemaInstance,
      userClassInstance
    );
    // todoIdをUser　Schema　インスタンスにセット（Nullかダミーデータ）

    // todo schema instance を initialize
    const todoSchemaInstance = Todo.createTodoSchemaInstance();
    console.log(todoSchemaInstance);

    // user id をTodoSchemaにセット

    const updatedUserSchemaInstance2 = UserSignupRoutesLogic.setTodoSchemaIdToUserSchema(
      todoSchemaInstance,
      userSchemaInstance
    );


    // today schema instance をInitialize
    const todaySchemaInstance = Today.createTodaySchemaInstance();
    // today schema instance のIdを、User　Schema　Instanceにセット
    const updatedUserSchemaInstance3 = User.setTodayIdToUserSchema(updatedUserSchemaInstance2,todaySchemaInstance)
    // user id をToday　Schemaにセット
    const updatedTodaySchema = Today.setUserIdToTodaySchema(todaySchemaInstance,updatedUserSchemaInstance3);
    // inbox schema instance をInitialize
    const inboxSchemaInstance = Inbox.createInboxSchemaInstance();
    // inbox schema instance のIdを　User　Schema　Instanceにセット
    const updatedUserSchemaInstance4 = User.setInboxIdToUserSchema(updatedUserSchemaInstance3,inboxSchemaInstance)
    // user id を inbox schema にセット
    const updatedInboxSchemaInstance = Inbox.setUserIdToInboxSchema(inboxSchemaInstance,updatedUserSchemaInstance4)
    //
    //
    // project schema instance をInitialize
    const projectSchemaInstance = Project.createProjectSchemaInstance()
    // project schema instance のIdを　User　Schema　Instanceにセット
    const updatedUserSchemaInstance5 = User.setProjectIdToUserSchema(updatedUserSchemaInstance4,projectSchemaInstance)
    // user id を project schema にセット
    const updatedProjectSchemaInstance = Project.setUserIdToProjectSchema(projectSchemaInstance,updatedUserSchemaInstance5)
    //
    //
    // logbook schema instance をInitialize
    const logbookSchemaInstance = Logbook.createLogbookSchemaInstance();
    // logbook schema instance のIdを　User　Schema　Instanceにセット
    const updatedUserSchemaInstance6 = User.setLogbookIdToUserSchema(updatedUserSchemaInstance5,logbookSchemaInstance);
    // user id を　logbook schema にセット
    const updatedLogbookSchemaInstance = Logbook.setUserIdToLogbookSchema(logbookSchemaInstance,updatedUserSchemaInstance5)
    //
    //
    // trashBox Schema Instance をInitialize
    const trashBoxSchemaInstance = TrashBox.createTrashBoxSchemaInstance();
    // trashBox Schema Instance のIdを　UserSchema　Instanceにセット
    const updatedUserSchemaInstance7 = User.setTrashBoxIdToUserSchema(
      updatedUserSchemaInstance6,
      trashBoxSchemaInstance
    );

    // user id を　trashBox Schema にセット
    const updatedTrashBoxSchemaInstance = TrashBox.setUserIdToTrashBoxSchema(
      trashBoxSchemaInstance,
      updatedUserSchemaInstance7
    );
    // activity schema instance をInitialize
    const activitySchemaInstance = Activity.createActivitySchemaInstance();
    // activity schema Instance のIdを　User　Schema　Instanceにセット
    const updatedUserSchemaInstance8 = User.setActivityIdToUserSchema(
      updatedUserSchemaInstance7,
      activitySchemaInstance
    );

    // user id を　activity schema にセット
    const updatedActivitySchemaInstance = Activity.setUserIdToActivitySchema(
      activitySchemaInstance,
      updatedUserSchemaInstance8
    );
    console.log("todo");

    console.log(todoSchemaInstance);
    console.log("inbox");
    console.log(updatedInboxSchemaInstance);
    console.log("today");

    console.log(todaySchemaInstance);
    console.log("logbook");

    console.log(updatedLogbookSchemaInstance);
    console.log("trashbox");

    console.log(updatedTrashBoxSchemaInstance);
    console.log("activity");

    console.log(updatedActivitySchemaInstance);
    console.log("user");

    console.log(updatedUserSchemaInstance8);

    // 各スキーマをデータベースに保存
    // todo schema を保存
    await Todo.saveTodoSchemaToDatabase(todoSchemaInstance);
    // inbox schema を保存
    await Inbox.saveInboxSchemaToDatabase(updatedInboxSchemaInstance);

    // today schemaを保存
    await Today.saveTodaySchemaToDatabase(todaySchemaInstance);

    // logbook schema を保存
    await Logbook.saveLogbookSchemaToDatabase(updatedLogbookSchemaInstance);

    // trashBox schema を保存
    await TrashBox.saveTrashBoxSchemaToDatabase(updatedTrashBoxSchemaInstance);

    // activity schema を保存
    await Activity.saveActivitySchemaToDatabase(updatedActivitySchemaInstance);

    // user schema を保存
    await User.saveUserSchemaToDatabase(updatedUserSchemaInstance8);
  }

  static initializeUserSchemaInstance() {
    const userSchemaInstance = User.createUserSchema();
    return userSchemaInstance;
  }

  static initializeUserClassInstance(): User {
    // return new User();
    const userClassInstance = new User();
    return userClassInstance;
  }

  static parseReqBodyFieldOfUserData(req: Request) {
    const { name, email, password } = req.body;
    const userInputsData = {
      name,
      email,
      password,
    };
    return userInputsData;
  }

  static setUserInputsDataToUserSchemaInstance(
    userInputsData: userInputsData,
    userSchemaInstance: IUserSchema | any, // any は全てDocument<any>に変更,
    userClassInstance: User
  ) {
    userClassInstance.name = userInputsData.name;
    userClassInstance.email = userInputsData.email;
    userClassInstance.password = userInputsData.password;
    const updatedUserSchemaInstance = User.setUserSchema(
      userSchemaInstance,
      userClassInstance
    );
    return updatedUserSchemaInstance;
  }

  static initializeTodoSchemaInstance() {
    const todoSchemaInstance = Todo.createTodoSchemaInstance();
    return todoSchemaInstance;
  }

  static setTodoSchemaIdToUserSchema(
    todoSchemaInstance: ITodoSchema | any,
    userSchemaInstance: IUserSchema | any
  ) {
    const updatedUserSchemaInstance = User.setTodoIdToUserSchema(
      userSchemaInstance,
      [todoSchemaInstance]
    );
    return updatedUserSchemaInstance;
  }

  static setUserIdToTodoSchema(
    todoSchemaInstance: ITodoSchema | any,
    userSchemaInstance: IUserSchema | any
  ) {
    const updatedTodoSchemaInstance = Todo.setUserIdToTodoSchema(
      todoSchemaInstance,
      userSchemaInstance
    );
    return updatedTodoSchemaInstance;
  }

  static initializeTodaySchemaInstance() {
    const todaySchemaInstance = Today.createTodaySchemaInstance();
    return todaySchemaInstance;
  }

  static setTodaysSchemaIdToUserSchemaInstance(
    todaySchemaInstance: ITodaysSchema | any,
    userSchemaInstance: IUserSchema | any
  ) {
    const updatedUserSchemaInstance = User.setTodayIdToUserSchema(
      userSchemaInstance,
      todaySchemaInstance
    );
    return updatedUserSchemaInstance;
  }

  static setUserIdToTodaysSchema(
    userSchemaInstance: IUserSchema | any,
    todaySchemaInstance: ITodaysSchema | any
  ) {
    const updatedTodaySchemaInstance = Today.setUserIdToTodaySchema(
      todaySchemaInstance,
      userSchemaInstance
    );
    return updatedTodaySchemaInstance;
  }

  static initializeInboxSchemaInstance() {
    const inboxSchemaInstance = Inbox.createInboxSchemaInstance();
    return inboxSchemaInstance;
  }

  static setInboxSchemaIdToUserSchemaInstance(
    inboxSchemaInstance: IInboxSchema | any,
    userSchemaInstance: IUserSchema | any
  ) {
    const updatedUserSchemaInstance = User.setInboxIdToUserSchema(
      userSchemaInstance,
      inboxSchemaInstance
    );
    return updatedUserSchemaInstance;
  }

  static setUserIdToInboxSchema(
    userSchemaInstance: IUserSchema | any,
    inboxSchemaInstance: IInboxSchema | any
  ) {
    const updatedInboxSchemaInstance = Inbox.setUserIdToInboxSchema(
      inboxSchemaInstance,
      userSchemaInstance
    );
    return updatedInboxSchemaInstance;
  }

  static initializeProjectSchemaInstance() {
    const projectSchemaInstance = Project.createProjectSchemaInstance();
    return projectSchemaInstance;
  }

  static setProjectSchemaIdToUserSchemaInstance(
    projectSchemaInstance: IProjectSchema | any,
    userSchemaInstance: IUserSchema | any
  ) {
    const updatedUserSchemaInstance = User.setProjectIdToUserSchema(
      userSchemaInstance,
      projectSchemaInstance
    );
    return updatedUserSchemaInstance;
  }

  static setUserSchemaIdToProjectSchema(
    userSchemaInstance: IUserSchema | any,
    projectSchemaInstance: IProjectSchema | any
  ) {
    const updatedProjectSchemaInstance = Project.setUserIdToProjectSchema(
      projectSchemaInstance,
      userSchemaInstance
    );
    return updatedProjectSchemaInstance;
  }

  static initializeLogbookSchemaInstance() {
    const logbookSchemaInstance = Logbook.createLogbookSchemaInstance();
    return logbookSchemaInstance;
  }

  static setLogbookSchemaIdToUserSchemaId(
    logbookSchemaInstance: ILogbookSchema | any,
    userSchemaInstance: IUserSchema | any
  ) {
    const updatedUserSchemaInstance = User.setLogbookIdToUserSchema(
      logbookSchemaInstance,
      userSchemaInstance
    );
    return updatedUserSchemaInstance;
  }

  static setUserSchemaIdToLogbookSchema(
    userSchemaInstance: IUserSchema | any,
    logbookSchemaInstance: ILogbookSchema | any
  ) {
    const updatedLogbookSchemaInstance = Logbook.setUserIdToLogbookSchema(
      logbookSchemaInstance,
      userSchemaInstance
    );
    return updatedLogbookSchemaInstance;
  }
}
