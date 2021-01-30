import express from 'express'

export const showWHatToDoNext = async (req, res, next) => {
  res.status(200).render("whatToDoNext");
};