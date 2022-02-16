import express from "express";

const app = express();

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`started on http://localhost:${server.address().port}`);
});

app.get("/quiz", (req, res) => {
  res.json({ username: "Gila og Elsa" });
});
