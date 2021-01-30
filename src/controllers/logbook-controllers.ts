import express from 'express'

export const logbookAll = async (req, res, next) => {
  res.status(200).render("log");
};