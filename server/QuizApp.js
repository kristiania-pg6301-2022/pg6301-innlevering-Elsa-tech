import express from "express";

export const QuizApp = express.Router();

QuizApp.get("/random", (req, res, next) => {
  res.json({ username: "Gila & Elsa" });
});
