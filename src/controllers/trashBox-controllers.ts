import express from 'express'

export const trashBoxAll = async (req, res, next) => {
  res.status(200).render("trashBox");
};