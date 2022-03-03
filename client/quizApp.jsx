import * as React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
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

export function ShowQuestion({ question }) {
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

function QuestionComponent() {
  const [question, setQuestion] = useState();

  async function handleLoadQuestion() {
    const res = await fetch("/api/question");
    setQuestion(await res.json());
  }

  if (!question) {
    return (
      <div>
        <button onClick={handleLoadQuestion}>Load New Question</button>
      </div>
    );
  }

  return <ShowQuestion question={question} />;
}

function ShowScore() {
  return <div>Working</div>;
}

export function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<FrontPage />} />
        <Route path={"/question"} element={<QuestionComponent />} />
        <Route path={"/score"} element={<ShowScore />} />
      </Routes>
    </BrowserRouter>
  );
}
