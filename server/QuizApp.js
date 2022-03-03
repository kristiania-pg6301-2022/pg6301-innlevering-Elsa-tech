import express from "express";
import { isCorrectAnswer, Questions, randomQuestion } from "./quiz.js";

export const QuizApp = express.Router();

QuizApp.get("/question", (req, res) => {
  const question = randomQuestion();

  res.json({
    id: question.id,
    question: question.question,
    answers: question.answers,
    category: question.category,
  });
});

QuizApp.post("/answer", (req, res) => {
  const id = req.body.id;
  const answer = req.body.answers;

  const question = Questions.find((question) => question.id === id);
  if (!question) {
    return res.sendStatus(404);
  }
  if (isCorrectAnswer(question, answer)) {
    return res.json({ result: "correct" });
  } else {
    return res.json({ result: "stupid bastard" });
  }
});
