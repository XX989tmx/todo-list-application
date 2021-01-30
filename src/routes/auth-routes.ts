import { signup, login } from './../controllers/auth-controllers';
import express ,{Request,Response,NextFunction}from 'express'
import { UserSignupRoutesLogic } from '../class/userSignupRoutesLogic';

const router = express.Router();

router.post("/auth/signup",signup);

router.post(
  "/auth/login",login
);


export default router;