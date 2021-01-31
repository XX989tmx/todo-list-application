import { showSignupPage, showLoginPage } from './../controllers/user-controllers';
import express from 'express'

const router = express.Router();

router.get('/user/signup_page',showSignupPage);

router.get('/user/login_page',showLoginPage);
export default router;