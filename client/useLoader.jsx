import React, { useEffect, useState } from "react";

export function useLoader(fun) {
  const [quizData, setQuizData] = useState();

  async function reload() {
    setQuizData(await fun());
  }

  useEffect(reload, []);

  return { reload, quizData };
}
