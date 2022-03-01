import * as React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { questionApi } from "./questionApi.js";

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

export function ShowQuestion({ questionApi }) {
  const [question, setQuestion] = useState({});

  useEffect(async () => {
    setQuestion(await questionApi.getQuestion());
  }, []);

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
      {JSON.stringify({ questionApi })}
    </div>
  );
}

function ShowScore() {
  return <div>Working</div>;
}

export function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<FrontPage />} />
        <Route
          path={"/question"}
          element={<ShowQuestion questionApi={questionApi} />}
        />
        <Route path={"/score"} element={<ShowScore />} />
      </Routes>
    </BrowserRouter>
  );
}
