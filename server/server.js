import express from "express";
import path from "path";
import { QuizApp } from "./QuizApp.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/question", QuizApp);

app.use(express.static(path.resolve("../client/dist")));

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`started on http://localhost:${server.address().port}`);
});
