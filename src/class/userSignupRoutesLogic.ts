import axios from 'axios';
import {Todo,Inbox,Today,Project,Activity,Logbook,TrashBox} from './todo';
import {User} from './user';
import { todoModel as TodoSchema } from "../model/todoSchema";
import { todaysModel as TodaySchema } from "../model/todaysSchema";
import { inboxModel as inboxSchema } from "../model/inboxSchema";
import { projectModel as ProjectSchema } from "../model/projectSchema";
import { activityModel as ActivitySchema } from "../model/activitySchema";
import { logbookModel as LogbookSchema } from "../model/logbookSchema";
import { trashBoxModel as TrashBoxSchema } from "../model/trashBoxSchema";
// const TodoSchema = require("../model/todoSchema");
// const UserSchema = require("../model/userSchema");
// const InboxSchema = require("../model/inboxSchema");
// const TodaysSchema = require("../model/todaysSchema");
// const LogbookSchema = require("../model/logbookSchema");
// const ActivitySchema = require("../model/activitySchema");
import {userModel as UserSchema} from '../model/userSchema';
import { Document } from 'mongoose';
import { Request } from 'express';

interface userInputsData {
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

  static parseReqBodyFieldOfUserData(req:Request) {
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
    userSchemaInstance: Document,
    userClassInstance: User
  ):Document {
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
    todoSchemaInstance: Document,
    userSchemaInstance: Document
  ): Document {
    const updatedUserSchemaInstance: Document = User.setTodoIdToUserSchema(
      userSchemaInstance,
      [todoSchemaInstance]
    );
    return updatedUserSchemaInstance;
  }

  static setUserIdToTodoSchema(
    todoSchemaInstance: Document,
    userSchemaInstance: Document
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
    todaySchemaInstance: Document,
    userSchemaInstance: Document
  ) {
    const updatedUserSchemaInstance = User.setTodayIdToUserSchema(
      userSchemaInstance,
      todaySchemaInstance
    );
    return updatedUserSchemaInstance;
  }

  static setUserIdToTodaysSchema(
    userSchemaInstance: Document,
    todaySchemaInstance: Document
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
    inboxSchemaInstance: Document,
    userSchemaInstance: Document
  ) {
    const updatedUserSchemaInstance = User.setInboxIdToUserSchema(
      userSchemaInstance,
      inboxSchemaInstance
    );
    return updatedUserSchemaInstance;
  }

  static setUserIdToInboxSchema(
    userSchemaInstance: Document,
    inboxSchemaInstance: Document
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
    projectSchemaInstance: Document,
    userSchemaInstance: Document
  ) {
    const updatedUserSchemaInstance = User.setProjectIdToUserSchema(
      userSchemaInstance,
      projectSchemaInstance
    );
    return updatedUserSchemaInstance;
  }
}
