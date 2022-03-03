import * as React from "react";
import { Link } from "react-router-dom";
import { useLoader } from "./useLoader.jsx";
import { fetchJSON } from "./http";

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

export function QuestionComponent() {
  const { reload, quizData } = useLoader(
    async () => await fetchJSON("/api/question")
  );

  const question = quizData;

  if (!question) {
    return <div>Something went wrong</div>;
  }

  return <ShowQuestion question={question} />;
}

export function ShowScore() {
  return (
    <div>
      <h1>Score board</h1>
      <div>You have 0 correct answers out of 0 questions.</div>
    </div>
  );
}

export function QuizApp() {
  return (
    <div>
      <h1>Amazing quiz application!</h1>
      <div>
        <Link to={"/question"}>Take a quiz!</Link>
      </div>
      <div>
        <Link to={"score"}>See your quiz score here</Link>
      </div>
    </div>
  );
}
