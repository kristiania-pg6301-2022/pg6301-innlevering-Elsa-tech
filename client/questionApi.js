export const questionApi = {
  getQuestion: async () => {
    const res = await fetch("api/question");
    return await res.json();
  },
};
