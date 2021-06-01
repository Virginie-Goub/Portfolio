async function postData(url = "http://localhost:8000/contact", data = {}) {
  const response = await fetch(url, {
    method: "POST",

    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
