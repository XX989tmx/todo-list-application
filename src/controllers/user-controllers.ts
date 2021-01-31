import express, { Request, Response, NextFunction } from "express";

export const showSignupPage = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).render("signup_page");
};

export const showLoginPage = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).render("login_page");
};
