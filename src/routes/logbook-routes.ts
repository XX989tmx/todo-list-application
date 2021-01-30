import { logbookAll } from './../controllers/logbook-controllers';
import express from 'express'

const router = express.Router();

router.get("/logbook", logbookAll);

export default router;