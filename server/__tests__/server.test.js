import express from "express";
import request from "supertest";
import bodyParser from "body-parser";
import { QuizApp } from "../QuizApp";

const app = express();

app.use(bodyParser.json);

app.use("/api", QuizApp);

describe("Amazing quiz application", () => {
  it("returns a random question", async () => {
    const response = await request(app).get("/question").expect(200);
    expect(response.body).toMatchObject({
      id: expect.any(Number),
      answers: expect.any(Object),
      category: expect.any(String),
    });
    expect(response.body).not.toHaveProperty("correct_answers");
  });
});
