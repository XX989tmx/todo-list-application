import express from 'express'

const router = express.Router();

router.get("/trashBox", async (req, res, next) => {
  res.status(200).render("trashBox");
});

export default router;