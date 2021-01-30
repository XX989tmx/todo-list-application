import express from 'express'

export const todayAll = async (req, res, next) => {
  res.status(200).render("today");
};