import { InboxRoutesLogic } from "./inboxRoutesLogic";
import { User } from "./user";
// const UserSchema = require("../model/userSchema");
// const InboxSchema = require("../model/inboxSchema");
// const todo = require("./todo");
// const Todo = todo.todo;
// const Inbox = todo.inbox;
// const user = require("./user");
import { Todo, Inbox } from "./todo";
import { inboxModel as InboxSchema } from "../model/inboxSchema";
import { userModel as UserSchema } from "../model/userSchema";

// const User = user.user;

export class CreateTodoRoutesLogic {
  // todoデータを新規作成保存し、User,InboxスキーマのTodoが関連する値を更新し、保存する。その後、Inboxデータを再度読み出し、Inboxページに渡しRerenderする。
  // -Userデータをデータベースから読み出す
  // -Inboxデータをデータベースから読み出す

  //- req.bodyからTodoフィールドの値をOBD

  //- user class instance をinitialize
  // -inbox class instanceをinitialize
  // todo class instanceをinitialize
  // todo class instanceにreq.bodyのTodoフィールドの値をセットする。

  // todo dataの保存処理
  // -todo schema instance をinitialize : createTodoSchemaInstace()
  // -todo schema instance に todo class instance の値をセット：setTodoSchema();
  // -userIdをtodo schema instanceにセット（UserIdをTodoSchemaに関連付け）:setUserIdToTodoSchema();
  // - todo schema instanceをデータベースに保存: saveTodoSchemaToDatabase();

  // inbox dataの更新保存処理
  // -inbox class instanceにInboxDataをセットする：A　set methodでセット　or B inbox class instance initialize時に、InboxDataをセット
  // -inbox class instance　のinbox fieldにTodoSchema　を追加：inbox.addNewTodo(todoSchema);
  // -inbox data(databaseから読み出したInboxData)の各フィールドを、inbox class instanceのそれに更新する for n times: inboxData.x = inbox.x
  // -inbox schemaを保存 saveInboxSchemaToDatabase();

  // user dataの更新保存処理
  //  -user dataのtodo fieldにTodo新規追加：todo schema instance をuser.todo にPush（）
  // -user dataを保存　　saveUserSchemaToDatabase();
  // -inbox fieldについてはRefキーで参照する方式のため、手動更新不要。

  // inbox class instance をReturn

  // 2
  static async create(req) {
    // todoデータを新規作成保存し、User,InboxスキーマのTodoが関連する値を更新し、保存する。その後、Inboxデータを再度読み出し、Inboxページに渡しRerenderする。
    // -Userデータをデータベースから読み出す
    const userId = req.params.userId;
    console.log(userId);

    const userData = await User.getUserFromDatabase(userId);
    console.log(userData);

    // -Inboxデータをデータベースから読み出す
    const inboxData = await Inbox.fetchInboxDataFromDatabase(userId);
    console.log("inboxData");

    console.log(inboxData);
    //- req.bodyからTodoフィールドの値をOBD
    const { title, notes, priority, scheduledDate, deadline } = req.body;
    //- user class instance をinitialize
    const userClassInstance = new User(
      userId,
      userData.name,
      userData.email,
      userData.password,
      userData.confirmPassword,
      userData.todo,
      userData.inbox,
      userData.today,
      userData.logbook,
      userData.trashBox,
      userData.activity,
      userData.lastLoggedIns
    );
    console.log(userClassInstance);
    // -inbox class instanceをinitialize
    const inboxClassInstance = new Inbox(inboxData.list, userId);
    console.log(inboxClassInstance);

    // todo class instanceをinitialize
    // todo class instanceにreq.bodyのTodoフィールドの値をセットする。
    const todoClassInstance = new Todo(
      title,
      notes,
      priority,
      scheduledDate,
      deadline,
      userId
    );
    console.log(todoClassInstance);
    // todo dataの保存処理
    // -todo schema instance をinitialize : createTodoSchemaInstace()
    const todoSchemaInstance = Todo.createTodoSchemaInstance();

    // -todo schema instance に todo class instance の値をセット：setTodoSchema();
    const updatedTodoSchemaInstance = Todo.setTodoSchema(
      todoSchemaInstance,
      todoClassInstance
    );
    console.log("updated");

    console.log(updatedTodoSchemaInstance);
    // -userIdをtodo schema instanceにセット（UserIdをTodoSchemaに関連付け）:setUserIdToTodoSchema();
    const updatedTodoSchemaInstance2 = Todo.setUserIdToTodoSchema(
      updatedTodoSchemaInstance,
      userData
    );
    console.log("user id set");

    console.log(updatedTodoSchemaInstance2);

    //-todoSchemaIdをUserSchemaにセット保存
    const updatedUserData = User.setTodoIdToUserSchema(userData, [
      updatedTodoSchemaInstance2,
    ]);
    console.log(updatedUserData);

    // - todo schema instanceをデータベースに保存: saveTodoSchemaToDatabase();
    await Todo.saveTodoSchemaToDatabase(updatedTodoSchemaInstance2);

    // inbox dataの更新保存処理
    // -inbox class instanceにInboxDataをセットする：A　set methodでセット　or B inbox class instance initialize時に、InboxDataをセット
    // -inbox class instance　のinbox fieldにTodoSchema　を追加：inbox.addNewTodo(todoSchema);
    const updatedInboxClassInstance = inboxClassInstance.add(
      updatedTodoSchemaInstance2
    );
    console.log(updatedInboxClassInstance);

    // -inbox data(databaseから読み出したInboxData)の各フィールドを、inbox class instanceのそれに更新する for n times: inboxData.x = inbox.x
    const addedInboxData = Inbox.setInboxSchema(
      inboxData,
      updatedInboxClassInstance
    );
    console.log(addedInboxData);

    // -inbox schemaを保存 saveInboxSchemaToDatabase();
    await Inbox.saveInboxSchemaToDatabase(addedInboxData);
    // user dataの更新保存処理
    //  -user dataのtodo fieldにTodo新規追加：todo schema instance をuser.todo にPush（）
    // -user dataを保存　　saveUserSchemaToDatabase();
    await User.saveUserSchemaToDatabase(updatedUserData);
    // -inbox fieldについてはRefキーで参照する方式のため、手動更新不要。
    // inbox class instance をReturn
    const inboxList:any = await InboxRoutesLogic.renderInbox(userId);
    console.log('inboxList');
    console.log(inboxList);
    
    
    return inboxList;
  }

  static async createTodo(req) {
    // todoデータを新規作成保存し、User,InboxスキーマのTodoが関連する値を更新し、保存する。その後、Inboxデータを再度読み出し、Inboxページに渡しRerenderする。
    const userId = req.params.userId;
    // -Userデータをデータベースから読み出す
    const userData = await this.readUserDataFromDatabase(userId);
    // -Inboxデータをデータベースから読み出す
    const inboxData = await this.readInboxDataFromDatabase(userId);
    //- req.bodyからTodoフィールドの値をOBD
    const todoInputs = this.parseReqBody(req);
    //- user class instance をinitialize
    const userClassInstance = await this.initializeUserClassInstance(userData);
    // -inbox class instanceをinitialize
    const inboxClassInstance = await this.initializeInboxClassInstance(
      inboxData,
      userId
    );
    // todo class instanceをinitialize
    // todo class instanceにreq.bodyのTodoフィールドの値をセットする。
    const todoClassInstance = await this.initializeTodoClassInstance(
      todoInputs,
      userId
    );

    // todo dataの保存処理
    // -todo schema instance をinitialize : createTodoSchemaInstace()
    const todoSchemaInstance = this.initializeTodoSchemaInstance();
    // -todo schema instance に todo class instance の値をセット：setTodoSchema();
    const updatedTodoSchemaInstance = this.setTodoSchemaInstance(
      todoSchemaInstance,
      todoClassInstance
    );
    // -userIdをtodo schema instanceにセット（UserIdをTodoSchemaに関連付け）:setUserIdToTodoSchema();
    const updatedTodoSchemaInstance2 = Todo.setUserIdToTodoSchema(
      updatedTodoSchemaInstance,
      userData
    );
    // - todo schema instanceをデータベースに保存: saveTodoSchemaToDatabase();
    await this.saveTodoSchemaInstance(updatedTodoSchemaInstance2);

    // inbox dataの更新保存処理
    // -inbox class instanceにInboxDataをセットする：A　set methodでセット　or B inbox class instance initialize時に、InboxDataをセット
    // -inbox class instance　のinbox fieldにTodoSchema　を追加：inbox.addNewTodo(todoSchema);
    const updatedInboxClassInstance = this.appendTodoSchemaToInboxClassInstance(
      inboxClassInstance,
      updatedTodoSchemaInstance
    );
    console.log(updatedInboxClassInstance);

    // -inbox data(databaseから読み出したInboxData)の各フィールドを、inbox class instanceのそれに更新する for n times: inboxData.x = inbox.x
    const updatedInboxData = this.updateInboxDataWithInboxClassInstance(
      inboxData,
      updatedInboxClassInstance
    );
    // -inbox schemaを保存 saveInboxSchemaToDatabase();
    await this.saveInboxSchemaDataToDatabase(updatedInboxData);

    // user dataの更新保存処理
    //  -user dataのtodo fieldにTodo新規追加：todo schema instance をuser.todo にPush（）
    const updatedUserData = this.setTodoSchemaInstanceToUserData(
      updatedTodoSchemaInstance,
      userData
    );
    // -user dataを保存　　saveUserSchemaToDatabase();
    await this.saveUserSchemaDataToDatabase(updatedUserData);
    // -inbox fieldについてはRefキーで参照する方式のため、手動更新不要。

    // inbox class instance をReturn
    // return updatedInboxClassInstance;

    // Inboxデータをサイド読み出し、配列のみを変数に入れ返す。InboxテンプレートにInbox変数として渡す。
    const inboxList = await InboxRoutesLogic.renderInbox(userId);
    return inboxList;

    //database への保存処理3つは、transaction methodでまとめて同時にやる。
  }

  static async readUserDataFromDatabase(userId: string) {
    let userData;
    try {
      userData = await UserSchema.findById(userId);
    } catch (error) {
      console.log(error);
    }

    return userData;
  }
  static async readInboxDataFromDatabase(userId: string) {
    let inboxData;
    try {
      inboxData = await InboxSchema.findById(userId);
      if (!inboxData) {
        inboxData = Inbox.createInboxSchemaInstance();
      }
    } catch (error) {
      console.log(error);
    }

    return inboxData;
  }
  static parseReqBody(req) {
    const { title, notes, priority, scheduledDate, deadline } = req.body;
    const todoInputs = {
      title,
      notes,
      priority,
      scheduledDate,
      deadline,
    };
    return todoInputs;
  }

  static initializeUserClassInstance(userData) {
    const userInstance = new User(
      userData.userId,
      userData.name,
      userData.email,
      userData.password,
      userData.confirmPassword,
      userData.todo,
      userData.inbox,
      userData.today,
      userData.logbook,
      userData.trashBox,
      userData.activity,
      userData.lastLoggedIns
    );
    return userInstance;
  }
  static initializeInboxClassInstance(inboxData, userId) {
    const inboxInstance = new Inbox(inboxData.list, userId);
    return inboxInstance;
  }
  static initializeTodoClassInstance(todoInputs, userId) {
    const todoInstance = new Todo(
      todoInputs.title,
      todoInputs.notes,
      todoInputs.priority,
      todoInputs.scheduledDate,
      todoInputs.deadline,
      userId
    );
    return todoInstance;
  }

  static setTodoClassInstance(todoInstance, todoInputs) {
    todoInstance;
  }

  static initializeTodoSchemaInstance() {
    const todoSchemaInstance = Todo.createTodoSchemaInstance();
    return todoSchemaInstance;
  }

  static setTodoSchemaInstance(todoSchemaInstance, todoClassInstance) {
    const settedTodoSchemaInstance = Todo.setTodoSchema(
      todoSchemaInstance,
      todoClassInstance
    );
    return settedTodoSchemaInstance;
  }

  static async saveTodoSchemaInstance(todoSchemaInstance) {
    try {
      await Todo.saveTodoSchemaToDatabase(todoSchemaInstance);
    } catch (error) {
      console.log(error);
    }
  }

  static appendTodoSchemaToInboxClassInstance(inboxClassInstance, todoSchema) {
    return inboxClassInstance.add(todoSchema);
  }

  static updateInboxDataWithInboxClassInstance(inboxData, inboxClassInstance) {
    return Inbox.setInboxSchema(inboxData, inboxClassInstance);
  }

  static async saveInboxSchemaDataToDatabase(inboxData) {
    try {
      await Inbox.saveInboxSchemaToDatabase(inboxData);
    } catch (error) {
      console.log(error);
    }
  }

  static setTodoSchemaInstanceToUserData(todoSchemaInstance, userData) {
    userData.todo.push(todoSchemaInstance._id);
    return userData;
  }

  static async saveUserSchemaDataToDatabase(userSchemaData) {
    try {
      await User.saveUserSchemaToDatabase(userSchemaData);
    } catch (error) {
      console.log(error);
    }
  }
}
