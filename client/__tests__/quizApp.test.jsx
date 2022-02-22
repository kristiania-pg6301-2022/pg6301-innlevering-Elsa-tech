import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FrontPage } from "../quizApp.jsx";

describe("Quiz Application", () => {
  it("Shows Frontpage", () => {
    const element = document.createElement("div");
    ReactDOM.render(<FrontPage />, element);
    expect(element.querySelector("h1").innerHTML).toEqual("Quiz Application");
    expect(element.innerHTML).toMatchSnapshot();
  });
});
