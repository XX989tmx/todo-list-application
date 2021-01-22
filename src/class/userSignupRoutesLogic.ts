import { ILogbookSchema } from "./../model/logbookSchema";
import { ITodoSchema } from "./../model/todoSchema";
import { ITodaysSchema } from "./../model/todaysSchema";
import axios from "axios";
import {
  Todo,
  Inbox,
  Today,
  Project,
  Activity,
  Logbook,
  TrashBox,
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

export interface userInputsData {
  name: string;
  email: string;
  password: string;
}

class UserSignupRoutesLogic {
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

  signup(req: Request) {
    // User　Schema　インスタンスをInitialize
    const userSchemaInstance:
      | IUserSchema
      | Document<any> = UserSignupRoutesLogic.initializeUserSchemaInstance();
    // User class instance を initialize
    const userClassInstance = UserSignupRoutesLogic.initializeUserClassInstance();
    // req body からUser field をOBD
    const userInputsData = UserSignupRoutesLogic.parseReqBodyFieldOfUserData(
      req
    );
    // req body のUserDataを元に、User　Class　Instanceにデータをセットする。
    UserSignupRoutesLogic.setUserInputsDataToUserSchemaInstance(
      userInputsData,
      userSchemaInstance,
      userClassInstance
    );
    // todoIdをUser　Schema　インスタンスにセット（Nullかダミーデータ）

    // todo schema instance を initialize
    const todoSchemaInstance = UserSignupRoutesLogic.initializeTodoSchemaInstance();
    // user id をTodoSchemaにセット

    const updatedUserSchemaInstance = UserSignupRoutesLogic.setTodoSchemaIdToUserSchema(
      todoSchemaInstance,
      userSchemaInstance
    );
    // today schema instance をInitialize
    const todaySchemaInstance = UserSignupRoutesLogic.initializeTodaySchemaInstance();
    // today schema instance のIdを、User　Schema　Instanceにセット
    const updatedUserSchemaInstance2 = UserSignupRoutesLogic.setTodaysSchemaIdToUserSchemaInstance(
      todaySchemaInstance,
      updatedUserSchemaInstance
    );
    // user id をToday　Schemaにセット
    const updatedUserSchemaInstance3 = UserSignupRoutesLogic.setUserIdToTodaysSchema(
      todaySchemaInstance,
      updatedUserSchemaInstance2
    );
    // inbox schema instance をInitialize
    const inboxSchemaInstance = UserSignupRoutesLogic.initializeInboxSchemaInstance();
    // inbox schema instance のIdを　User　Schema　Instanceにセット
    const updatedUserSchemaInstance4 = UserSignupRoutesLogic.setInboxSchemaIdToUserSchemaInstance(
      inboxSchemaInstance,
      updatedUserSchemaInstance3
    );
    // user id を inbox schema にセット
    const updatedInboxSchemaInstance = UserSignupRoutesLogic.setUserIdToInboxSchema(
      updatedUserSchemaInstance4,
      inboxSchemaInstance
    );
    // project schema instance をInitialize
    const projectSchemaInstance = UserSignupRoutesLogic.initializeProjectSchemaInstance();
    // project schema instance のIdを　User　Schema　Instanceにセット
    const updatedUserSchemaInstance5 = UserSignupRoutesLogic.setProjectSchemaIdToUserSchemaInstance(
      projectSchemaInstance,
      updatedUserSchemaInstance4
    );
    // user id を project schema にセット
    const updatedProjectSchemaInstance = UserSignupRoutesLogic.setUserSchemaIdToProjectSchema(
      updatedUserSchemaInstance5,
      projectSchemaInstance
    );
    // logbook schema instance をInitialize
    const logbookSchemaInstance = UserSignupRoutesLogic.initializeLogbookSchemaInstance();
    // logbook schema instance のIdを　User　Schema　Instanceにセット
    const updatedUserSchemaInstance6 = UserSignupRoutesLogic.setLogbookSchemaIdToUserSchemaId(
      logbookSchemaInstance,
      updatedUserSchemaInstance5
    );
    // user id を　logbook schema にセット
    const updatedLogbookSchemaInstance = UserSignupRoutesLogic.setUserSchemaIdToLogbookSchema(
      updatedUserSchemaInstance6,
      logbookSchemaInstance
    );
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
    // 各スキーマをデータベースに保存
    // todo schema を保存
    Todo.saveTodoSchemaToDatabase(todoSchemaInstance)
      .then((result) => {})
      .catch((err) => {
        console.log(err);
      });
    // inbox schema を保存
    Inbox.saveInboxSchemaToDatabase(updatedInboxSchemaInstance)
      .then((result) => {})
      .catch((err) => {
        console.log(err);
      });
    // today schemaを保存
    Today.saveTodaySchemaToDatabase(todaySchemaInstance)
      .then((result) => {})
      .catch((err) => {
        console.log(err);
      });
    // logbook schema を保存
    Logbook.saveLogbookSchemaToDatabase(updatedLogbookSchemaInstance)
      .then((result) => {})
      .catch((err) => {
        console.log(err);
      });
    // trashBox schema を保存
    TrashBox.saveTrashBoxSchemaToDatabase(updatedTrashBoxSchemaInstance)
      .then((result) => {})
      .catch((err) => {
        console.log(err);
      });
    // activity schema を保存
    Activity.saveActivitySchemaToDatabase(updatedActivitySchemaInstance)
      .then((result) => {})
      .catch((err) => {
        console.log(err);
      });
    // user schema を保存
    User.saveUserSchemaToDatabase(updatedUserSchemaInstance8)
      .then((result) => {})
      .catch((err) => {
        console.log(err);
      });
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
