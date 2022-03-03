import * as React from "react";
import * as ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { QuizApp } from "../quizApp.jsx";

describe("Quiz Application", () => {
  it("Shows front page", () => {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <QuizApp />
      </MemoryRouter>,
      element
    );
    expect(element.querySelector("h1").innerHTML).toEqual(
      "Amazing quiz application!"
    );
    expect(element.innerHTML).toMatchSnapshot();
  });
});
