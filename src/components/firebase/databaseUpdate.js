export default function databaseUpdate({ tierListObj, fetchURI }) {
  fetch(fetchURI, {
    method: "PUT",
    body: JSON.stringify(tierListObj),
    headers: { "Content-Type": "application/json" },
  })
    .then((_) => alert("Saved"))
    .catch(console.error);
}
