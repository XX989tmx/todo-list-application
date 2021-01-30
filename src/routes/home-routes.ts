import { homePage } from './../controllers/home-controllers';
import express from 'express'
const router = express.Router();

router.get('/home',homePage);

export default router;