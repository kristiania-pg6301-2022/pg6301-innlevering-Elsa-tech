import express from "express";
import request from "supertest";
import bodyParser from "body-parser";
import { QuizApp } from "../QuizApp";

const app = express();

app.use(bodyParser.json);

app.use("/api", QuizApp);

describe("Amazing quiz application", () => {
  it("should do nothing", () => {});
});
