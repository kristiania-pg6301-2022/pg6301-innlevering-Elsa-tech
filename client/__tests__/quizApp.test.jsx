import * as React from "react";
import * as ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { FrontPage, ShowQuestion, QuestionContext } from "../quizApp.jsx";

describe("Quiz Application", () => {
  it("Shows Frontpage", () => {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <FrontPage />
      </MemoryRouter>,
      element
    );
    expect(element.querySelector("h1").innerHTML).toEqual("Quiz Application");
    expect(element.innerHTML).toMatchSnapshot();
  });

  it("Shows question with answer-options", () => {
    const question = {
      id: "1",
      question: "Does this function work?",
      answers: {
        answer_a: "yes",
        answer_b: "no",
        answer_c: "maybe",
      },
    };
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter initialEntries={"/question"}>
        <QuestionContext.Provider value={{ randomQuestion: () => question }}>
          <ShowQuestion />
        </QuestionContext.Provider>
      </MemoryRouter>,
      element
    );
    expect(element.innerHTML).toMatchSnapshot();
  });
});
