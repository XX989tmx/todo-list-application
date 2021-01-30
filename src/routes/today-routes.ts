import { todayAll } from './../controllers/today-controllers';
import express from 'express'

const router = express.Router();

router.get("/today",todayAll);

export default router;