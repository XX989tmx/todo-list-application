import express from 'express'

const router = express.Router();

router.get("/whatToDoNext", async (req, res, next) => {
  res.status(200).render("whatToDoNext");
});

export default router;