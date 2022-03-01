import express from "express";
import path from "path";
import { QuizApp } from "./QuizApp.js";

const app = express();

app.use("/question", QuizApp);

app.use(express.static("../client/dist"));

app.use((req, res, next) => {
  if (req.method === "GET") {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`started on http://localhost:${server.address().port}`);
});
