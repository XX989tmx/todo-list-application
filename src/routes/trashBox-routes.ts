import { trashBoxAll } from './../controllers/trashBox-controllers';
import express from 'express'

const router = express.Router();

router.get("/trashBox",trashBoxAll);

export default router;