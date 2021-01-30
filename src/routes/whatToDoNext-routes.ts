import { showWHatToDoNext } from './../controllers/whatToDoNext-controllers';
import express from 'express'

const router = express.Router();

router.get("/whatToDoNext", showWHatToDoNext);

export default router;