import express, {Request,Response, NextFunction } from 'express'
import { InboxRoutesLogic } from '../class/inboxRoutesLogic';

const router = express.Router();

router.get(
  "/inbox",
  async (req: Request, res: Response, next: NextFunction) => {
    // get todo data from database

    //   // initialize todo class
    //   const todo = new Todo("uuu", "www", 3, new Date(), new Date(), false, "1234");
    //   console.log(todo);

    //   const emptyTodoSchemaInstance = Todo.createTodoSchemaInstance();
    //  const settedTodoSchemaInstance = Todo.setTodoSchema(emptyTodoSchemaInstance,todo);
    //  console.log(settedTodoSchemaInstance);

    //   // get inbox data from database

    //   // initialize inbox class
    //   const inbox = new Inbox();

    //   inbox.add(todo);
    //   console.log(inbox);
    // let inbox = [
    //   new Todo("todo1", "note11111111", 3, new Date(), new Date(), null),
    //   new Todo("todo2", "note2", 2, new Date(), new Date(), null),
    //   new Todo("todo3", "note3", 1, new Date(), new Date(), null),
    // ];
    const userId = "600ac39664b8571ed5b8ef2b";
    const inbox: any = await InboxRoutesLogic.renderInbox(userId);
    console.log(inbox);

    // pass inbox data
    res.status(200).render("inbox", { inbox: inbox.list });
  }
);

export default router;