import express from "express";
import path from "path";

const app = express();

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`started on http://localhost:${server.address().port}`);
});

app.get("/quiz/randomQuestion", (req, res) => {
  res.json({ username: "Gila og Elsa" });
});

app.use(express.static("../client/dist"));

app.use((req, res, next) => {
  if (req.method === "GET") {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});
