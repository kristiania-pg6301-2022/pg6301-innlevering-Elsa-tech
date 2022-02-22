import * as React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export function FrontPage() {
  return (
    <div>
      <h1>Quiz Application</h1>
    </div>
  );
}

function ShowQuestion() {
  return (
    <div>
      <h1>Question</h1>
    </div>
  );
}

export function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<FrontPage />} />
        <Route path={"/question"} element={<ShowQuestion />} />
      </Routes>
    </BrowserRouter>
  );
}
