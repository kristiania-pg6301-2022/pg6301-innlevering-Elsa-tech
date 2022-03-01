import express from "express";
import { isCorrectAnswer, randomQuestion, Questions } from "./quiz.js";

export const QuizApp = express.Router();

QuizApp.get("/", (req, res, next) => {
  const question = randomQuestion();
  res.json({
    id: question.id,
    question: question.question,
    answers: question.answers,
    category: question.category,
  });
});
