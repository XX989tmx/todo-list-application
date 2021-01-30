import express, {Request,Response,NextFunction} from 'express'

const router = express.Router();


router.get(
  "/activity",
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).render("activity");
  }
);

export default router;