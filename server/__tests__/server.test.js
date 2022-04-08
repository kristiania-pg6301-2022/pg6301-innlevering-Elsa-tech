import express from "express";
import request from "supertest";
import bodyParser from "body-parser";
import { QuizApp } from "../QuizApp";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use("/api", QuizApp);

describe("Amazing quiz application", () => {
  it("returns a random question", async () => {
    const response = await request(app).get("/api/question").expect(200);
    expect(response.body).toMatchObject({
      id: expect.any(Number),
      answers: expect.any(Object),
      category: expect.any(String),
    });
    expect(response.body).not.toHaveProperty("correct_answers");
  });

  it("gives a 404 response if there is no question", async () => {
    await request(app).post("/api/answer").send({ id: -42 }).expect(404);
  });

  it("returns correct if correct answer", async () => {
    await request(app)
      .post("/api/answer")
      .send({ id: 21, answer: "answer_a" })
      .expect({ result: "correct" });
  });

  it("returns incorrect if incorrect answer", async () => {
    await request(app)
      .post("/api/answer")
      .send({ id: 1060, answer: "answer_a" })
      .expect({ result: "incorrect" });
  });
});
