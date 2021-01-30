import express from 'express'

const router = express.Router();

router.get("/logbook", async (req, res, next) => {
  res.status(200).render("log");
});

export default router;