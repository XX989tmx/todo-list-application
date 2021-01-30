import express from 'express'

const router = express.Router();

router.get("/today", async (req, res, next) => {
  res.status(200).render("today");
});

export default router;