import expressValidator, { check } from "express-validator";
import { signup, login } from "./../controllers/auth-controllers";
import express, { Request, Response, NextFunction } from "express";
import { UserSignupRoutesLogic } from "../class/userSignupRoutesLogic";

const router = express.Router();

router.post(
  "/auth/signup",
  [
    check("name").notEmpty().trim().isLength({ max: 30, min: 5 }),
    check("email").notEmpty().isEmail().normalizeEmail().trim(),
    check("password").notEmpty().trim(),
    check("passwordConfirmation").notEmpty().trim(),
  ],
  signup
);

router.post(
  "/auth/login",
  [
    check("email").notEmpty().isEmail().normalizeEmail().trim(),
    check("password").notEmpty().trim(),
  ],
  login
);

export default router;
