import express, { Request, Response, NextFunction } from "express";
import { CreateTodoRoutesLogic } from "../class/createTodoRoutesLogic";
import { InboxRoutesLogic } from "../class/inboxRoutesLogic";
import { Todo } from "../class/todo";

const router = express.Router();

router.post(
  "todo/createTodo",
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, notes, priority, scheduledDate, deadline } = req.body;

    // // initialize todo class
    // const todo = new Todo(title, notes, priority, scheduledDate, deadline);
    console.log(req.body);

    // // initialize inbox class
    // const inbox = new Inbox();
    // get inbox data from database;
    // initialize inbox class with inbox data;
    // update inbox class with todo data; inbox.addNewTodo(title, notes, priority, scheduledDate, deadline)
    // initialize user class

    // save todo to database
    // todo save
    // user save
    // save inbox to database
    // inbox save
    // user save

    const inbox = await CreateTodoRoutesLogic.create(req);

    // let inbox = [
    //   new Todo("todo1", "note11111111", 3, new Date(), new Date(), null),
    //   new Todo("todo2", "note2", 2, new Date(), new Date(), null),
    //   new Todo("todo3", "note3", 1, new Date(), new Date(), null),
    //   new Todo(title, notes, priority, scheduledDate, deadline, null),
    // ];
    // const addedTodo = inbox[inbox.length - 1];
    res.redirect("/inbox");
    // res.status(200).render('inbox',{inbox})

    // res.status(200).send({ m:1 });
    // res.status(302).redirect("/inbox");
  }
);

router.post("todo/updateTodo", async (req, res, next) => {
  const { title, notes, priority, scheduledDate, deadline } = req.body;
  // const targetTodoId = req.params.targetTodoId;
  const todoId = req.body["target-todo-id"].trim();
  const userId = "600ac39664b8571ed5b8ef2b";
  console.log(todoId);
  console.log(req.body);

  //- Update の手順
  // - targetTodoIdにマッチする todo schemaをデータベースから読み出す
  // - todo instanceをinitialize
  // - todo schemaをTodoInstanceにセットする
  // - user input(req.body)のデータをtodo instanceにセットする（Update)
  // - todo instanceの内容をtodo schemaに代入（スキーマUpdate)
  // - todo schemaを保存
  try {
    const todo = new Todo(
      title,
      notes,
      priority,
      scheduledDate,
      deadline,
      null
    );
    todo.updateTodoSchema(todoId);
  } catch (error) {
    console.log(error);
  }

  // - Inboxスキーマをデータベースから読み出す
  // - inboxスキーマ配列をループし、Inbox　インスタンスをInitialize＆セットし、Inbox　Instance配列を作る。
  // - Inbox instance配列をInbox ejsのVariableとしてわたして、inbox ejsをrender

  const inboxList: any = await InboxRoutesLogic.renderInbox(userId);

  // let inbox = [
  //   new Todo("todo1", "note11111111", 3, new Date(), new Date(), null),
  //   new Todo("todo2", "note2", 2, new Date(), new Date(), null),
  //   new Todo("todo3", "note3", 1, new Date(), new Date(), null),
  //   new Todo(title, notes, priority, scheduledDate, deadline, null),
  // ];
  // if page is inbox
  res.status(200).render("inbox", { inbox: inboxList.list });
});

router.get("todo/completeTodo/:todoId", async (req, res, next) => {
  const completedTodoId = req.params.todoId;
  console.log(completedTodoId);

  // -*todo schemaの更新
  // -todo schemaをデータベースから読み出す
  // -todo schemaのisDone fieldをTrueにする
  // *Inboxのlistから当該TOdoスキーマを削除 これはInbox routeで行われた際のアクションであり、もしtoday routeで行われた場合は、inboxではなくtoday list から削除をする
  // - inboxスキーマをデータベースから読み出す
  // -inbox instance をInitialize
  // - instance methodでinbox listから当該todoIdに合致するtodoSchemaを削除（Filter or indexOf & splice)
  // inbox instanceの状態をinbox schemaにセットしデータベースに保存
  // *logbook スキーマのlistにtodo schemaを追加

  // *Activity スキーマを更新

  res.status(200).json({ a: 2 });
});

router.get("todo/moveToTrash/:todoId", async (req, res, next) => {
  const movedToTrashTodoId = req.params.todoId;
  console.log(movedToTrashTodoId);

  res.status(200).json({ a: 3 });

  // move todo into trashBox class
});

router.delete("todo/deleteTodo", async (req, res, next) => {
  // delete todo doc permanently
});

export default router;
