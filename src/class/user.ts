import { Todo } from './todo';

import {userModel as userSchema} from '../model/userSchema';

export class User {
  id:string 
  name : string 
  email :string 
  password : string 
  confirmPassword:string 
  todo:any[] 
  inbox:any
  today:any 
  logbook:any 
  trashBox:any 
  activity : any 
  lastLoggedIns : Date[]

  constructor(
    userId,
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
    lastLoggedIns
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

  setId(id) {
    this.id = id;
    return this.id;
  }

  setName(name) {
    this.name = name;
    return this.name;
  }
  setEmail(email) {
    this.email = email;
    return this.email;
  }

  setPassword(password) {
    this.password = password;
    return password;
  }

  setConfirmPassword(confirmPassword) {
    this.confirmPassword = confirmPassword;
    return this.confirmPassword;
  }

  setTodo(todo) {
    this.todo.push(todo);
    return this.todo
  }

  setInbox(inbox) {
    this.inbox = inbox.id;
    return this.inbox;
  }

  setToday(today) {
    this.today = today.id;
    return this.today;
  }

  setLogbook(logbook) {
    this.logbook = logbook.id;
    return this.logbook;
  }

  setTrashBox(trashBox) {
    this.trashBox = trashBox.id;
    return this.trashBox;
  }

  setActivity(activity) {
    this.activity = activity;
    return this.activity;
  }

  checkPasswordEquity() {
    if (this.password.toString() === this.confirmPassword.toString()) {
      return true;
    } else {
      return false;
    }
  }

  isEmailUnique(email, users) {
    let found = false;
    for (let i = 0; i < users.length; i++) {
      if (email.toString() === users[i].email) {
        found = true;
      }
    }
    if (found) {
      return false;
    } else {
      return true;
    }
  }

  setLastLoggedIns(userDoc) {
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
      todo: null,
      inbox: null,
      today: null,
      logbook: null,
      trashBox: null,
      activity: null,
      lastLoggedIns: null,
    });
    return userSchemaInstance;
  }
  //userSchemaインスタンスにuserインスタンスデータをセットする処理. refでつなぐ他のスキーマId等のフィールドは除く、userSchemaに固有のデータアトリビュートのみをセット(lastLoggedInsにはEmptyArrをセット)。他はNull setUserSchema()
  static setUserSchema(userSchemaInstance, userInstance) {
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
  static setTodoIdToUserSchema(userSchemaInstance, todoSchemaInstanceArr) {
    // signup時に少なくとも一つはTodoSchemaを作成保存する必要がある。サンプルTodoを強制作成保存する。
    for (let i = 0; i < todoSchemaInstanceArr.length; i++) {
      const todoSchemaInstance = todoSchemaInstanceArr[i];
      userSchemaInstance.todo.push(todoSchemaInstance._id);
    }

    return userSchemaInstance;
  }
  // -userSchemaインスタンスにinboxIdをセットする処理 setInboxIdToUserSchema(inboxId)
  static setInboxIdToUserSchema(userSchemaInstance, inboxSchemaInstance) {
    userSchemaInstance.inbox = inboxSchemaInstance._id;
    return userSchemaInstance;
  }
  // -userSchemaインスタンスにtodayIdをセットする処理　setTodayIdToUserSchema(todayId)
  static setTodayIdToUserSchema(userSchemaInstance, todaySchemaInstance) {
    userSchemaInstance.today = todaySchemaInstance._id;
    return userSchemaInstance;
  }
  // -userSchemaインスタンスにproject idをセットする処理
 //　　setProjectIdToUserSchema(projectId)
  static setProjectIdToUserSchema(userSchemaInstance,projectSchemaInstance) {
    userSchemaInstance.project = projectSchemaInstance._id;
    return userSchemaInstance;
  }
  // -userSchemaインスタンスにlogbookIdをセットする処理　setLogbookIdToUserSchema(logbookId)
  static setLogbookIdToUserSchema(userSchemaInstance, logbookSchemaInstance) {
    userSchemaInstance.logbook = logbookSchemaInstance._id;
    return userSchemaInstance;
  }
  // -userSchemaインスタンスにtrashBoxIdをセットする処理　setTrashBoxIdToUserSchema(trashBoxId)
  static setTrashBoxIdToUserSchema(userSchemaInstance, trashBoxSchemaInstance) {
    userSchemaInstance.trashBox = trashBoxSchemaInstance._id;
    return userSchemaInstance;
  }
  // -userSchemaインスタンスにactivityIdをセットする処理　setActivityIdToUserSchema(activityId)
  static setActivityIdToUserSchema(userSchemaInstance, activitySchemaInstance) {
    userSchemaInstance.activity = activitySchemaInstance._id;
    return userSchemaInstance;
  }

  // -userSchemaインスタンス（mongooseDocument)をデータベースに保存する処理 saveUserSchemaToDatabase() {userSchema.save()}
  static async saveUserSchemaToDatabase(userSchemaInstance) {
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

  static async getUserFromDatabase(userId) {
    // get userDoc from database;
  }
}

