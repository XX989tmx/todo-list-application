import { activityAll } from "./../controllers/activity-controllers";
import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.get("/activity", activityAll);

export default router;
