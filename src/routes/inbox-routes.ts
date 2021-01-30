import { inboxAll } from "./../controllers/inbox-controllers";
import express, { Request, Response, NextFunction } from "express";
import { InboxRoutesLogic } from "../class/inboxRoutesLogic";

const router = express.Router();

router.get("/inbox", inboxAll);

export default router;
