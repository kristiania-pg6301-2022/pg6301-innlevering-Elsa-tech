import express from "express";
import { isCorrectAnswer, randomQuestion } from "./quiz.js";

export const QuizApp = express.Router();

QuizApp.get("/", (req, res) => {
  const question = randomQuestion();

  res.json({
    id: question.id,
    question: question.question,
    answers: question.answers,
    category: question.category,
  });
});
