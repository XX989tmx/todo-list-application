import express,{Request,Response,NextFunction} from 'express'

export const activityAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).render("activity");
};