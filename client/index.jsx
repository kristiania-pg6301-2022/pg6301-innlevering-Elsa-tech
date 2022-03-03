import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QuizApp, QuestionComponent, ShowScore } from "../client/quizApp.jsx";

export function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<QuizApp />} />
        <Route path={"/question"} element={<QuestionComponent />} />
        <Route path={"/score"} element={<ShowScore />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
