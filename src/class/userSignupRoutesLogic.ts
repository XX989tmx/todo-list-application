import { ITodoSchema } from './../model/todoSchema';
import { ITodaysSchema } from './../model/todaysSchema';
import axios from 'axios';
import {Todo,Inbox,Today,Project,Activity,Logbook,TrashBox} from './todo';
import {User} from './user';
import { todoModel as TodoSchema } from "../model/todoSchema";
import { todaysModel as TodaySchema } from "../model/todaysSchema";
import { IInboxSchema, inboxModel as inboxSchema } from "../model/inboxSchema";
import { IProjectSchema, projectModel as ProjectSchema } from "../model/projectSchema";
import { activityModel as ActivitySchema } from "../model/activitySchema";
import { logbookModel as LogbookSchema } from "../model/logbookSchema";
import { trashBoxModel as TrashBoxSchema } from "../model/trashBoxSchema";
// const TodoSchema = require("../model/todoSchema");
// const UserSchema = require("../model/userSchema");
// const InboxSchema = require("../model/inboxSchema");
// const TodaysSchema = require("../model/todaysSchema");
// const LogbookSchema = require("../model/logbookSchema");
// const ActivitySchema = require("../model/activitySchema");
import {userModel as UserSchema,IUserSchema} from '../model/userSchema';
import { Document } from 'mongoose';
import { Request } from 'express';

export interface userInputsData {
  name:string,
  email:string,password:string
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

  static signup() {}

  static initializeUserSchemaInstance() {
    const userSchemaInstance = User.createUserSchema();
    return userSchemaInstance;
  }

  static initializeUserClassInstance() {
    // return new User();
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
    userSchemaInstance: IUserSchema,
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
    todoSchemaInstance: ITodoSchema,
    userSchemaInstance: IUserSchema
  ): Document {
    const updatedUserSchemaInstance = User.setTodoIdToUserSchema(
      userSchemaInstance,
      [todoSchemaInstance]
    );
    return updatedUserSchemaInstance;
  }

  static setUserIdToTodoSchema(
    todoSchemaInstance: ITodoSchema,
    userSchemaInstance: IUserSchema
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
    todaySchemaInstance: ITodaysSchema,
    userSchemaInstance: IUserSchema
  ) {
    const updatedUserSchemaInstance = User.setTodayIdToUserSchema(
      userSchemaInstance,
      todaySchemaInstance
    );
    return updatedUserSchemaInstance;
  }

  static setUserIdToTodaysSchema(
    userSchemaInstance: IUserSchema,
    todaySchemaInstance: ITodaysSchema
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
    inboxSchemaInstance: IInboxSchema,
    userSchemaInstance: IUserSchema
  ) {
    const updatedUserSchemaInstance = User.setInboxIdToUserSchema(
      userSchemaInstance,
      inboxSchemaInstance
    );
    return updatedUserSchemaInstance;
  }

  static setUserIdToInboxSchema(
    userSchemaInstance: IUserSchema,
    inboxSchemaInstance: IInboxSchema
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
    projectSchemaInstance: IProjectSchema,
    userSchemaInstance: IUserSchema
  ) {
    const updatedUserSchemaInstance = User.setProjectIdToUserSchema(
      userSchemaInstance,
      projectSchemaInstance
    );
    return updatedUserSchemaInstance;
  }
}
