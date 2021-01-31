import express, { Request, Response, NextFunction } from "express";
import { UserSignupRoutesLogic } from "../class/userSignupRoutesLogic";

// passport.authenticate("local", {
  //   successRedirect: "/",
  //   failureRedirect: "/user/signup",
  //   failureFlash: "サインアップに失敗しました",
  //   successFlash: "サインアップに成功しました",
  // }),
export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    console.log(req.body);
    
  // singup
  const SignupLogic = new UserSignupRoutesLogic();
  SignupLogic.signup(req);

  res.status(200).json({ res: "signup succeed" });
};

export const login = async(req:Request,res:Response,next:NextFunction) => {
    console.log(req.body);
    res.status(200).json({res:"login"})
}