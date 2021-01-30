import express ,{Request,Response,NextFunction}from 'express'
import { UserSignupRoutesLogic } from '../class/userSignupRoutesLogic';

const router = express.Router();

router.post(
  "auth/signup",
  // passport.authenticate("local", {
  //   successRedirect: "/",
  //   failureRedirect: "/user/signup",
  //   failureFlash: "サインアップに失敗しました",
  //   successFlash: "サインアップに成功しました",
  // }),
  async (req: Request, res: Response, next: NextFunction) => {
    // singup
    const SignupLogic = new UserSignupRoutesLogic();
    SignupLogic.signup(req);

    res.status(200).json({ res: "signup succeed" });
  }
);

router.post(
  "auth/login",
  // passport.authenticate("local", {
  //   successRedirect: "/",
  //   failureRedirect: "/user/login",
  //   failureFlash: "ログインに失敗しました",
  //   successFlash: "ログインに成功しました",
  // }),
  async (req, res, next) => {
    // login
    res.redirect("/user/" + "req.user.username");
  }
);


export default router;