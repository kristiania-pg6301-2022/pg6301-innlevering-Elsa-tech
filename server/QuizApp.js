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

QuizApp.get("/score", (req, res) => {
  const score = req.signedCookies.score
    ? JSON.parse(req.signedCookies.score)
    : {
        answers: 0,
        correct: 0,
      };
  res.json(score);
});

QuizApp.post("/answer", (req, res) => {
  const { id, answer } = req.body;

  const question = Questions.find((question) => question.id === id);
  if (!question) {
    return res.sendStatus(404);
  }

  const score = req.signedCookies.score
    ? JSON.parse(req.signedCookies.score)
    : { answers: 0, correct: 0 };
  score.answers += 1;

  if (isCorrectAnswer(question, answer)) {
    score.correct += 1;
    res.cookie("score", JSON.stringify(score), { signed: true });
    return res.json({ result: true });
  } else {
    res.cookie("score", JSON.stringify(score), { signed: true });
    return res.json({ result: false });
  }
});
