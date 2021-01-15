const UserSchema = require("../model/userSchema");
const InboxSchema = require("../model/inboxSchema");
const todo = require("./todo");
const Todo = todo.todo;
const Inbox = todo.inbox;
const user = require("./user");
const User = user.user;

class CreateTodoRoutesLogic {
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

  static createTodo() {}

  static async readUserDataFromDatabase(userId) {
    let userData;
    try {
      userData = await UserSchema.findById(userId);
    } catch (error) {
      console.log(error);
    }

    return userData;
  }
  static async readInboxDataFromDatabase(userId) {
    let inboxData;
    try {
      inboxData = await InboxSchema.findById(userId);
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
  static initializeInboxClassInstance(inboxData) {
    const inboxInstance = new Inbox(inboxData.list, inboxData.userId);
    return inboxInstance;
  }
  static initializeTodoClassInstance(todoInputs, isDone, userId) {
    const todoInstance = new Todo(
      todoInputs.title,
      todoInputs.notes,
      todoInputs.priority,
      todoInputs.scheduledDate,
      todoInputs.deadline,
      isDone,
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
    const todoSchemaInstance = Todo.setTodoSchema(
      todoSchemaInstance,
      todoClassInstance
    );
    return todoSchemaInstance;
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

  static setTodoSchemaInstanceToUserData(
    todoSchemaInstance,
    readUserDataFromDatabase
  ) {
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
