export async function fetchJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    console.log("not found");
  }
  return await response.json();
}

export async function postJSON(url, answer) {
  const response = await fetch(url, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(answer),
  });
  if (!response.ok) {
    console.log("not found");
  }
}
