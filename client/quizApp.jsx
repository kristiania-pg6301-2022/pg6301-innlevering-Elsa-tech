import * as React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { isCorrectAnswer, randomQuestion } from "./quiz";
import { useState } from "react";

export function FrontPage() {
  return (
    <div>
      <h1>Quiz Application</h1>
      <ul>
        <li>
          <Link to={"/question"}>Answer random question</Link>
        </li>
      </ul>
    </div>
  );
}

function ShowQuestion() {
  const [question] = useState(randomQuestion);

  return (
    <div>
      <h1>{question.question}</h1>
      {Object.keys(question.answers)
        .filter((a) => question.answers[a])
        .map((a) => (
          <div key={a}>
            <button>{question.answers[a]}</button>
          </div>
        ))}
    </div>
  );
}

function ShowScore() {
  return <div></div>;
}

export function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<FrontPage />} />
        <Route path={"/question"} element={<ShowQuestion />} />
        <Route path={"/score"} element={<ShowScore />} />
      </Routes>
    </BrowserRouter>
  );
}
