import { useContext } from "react";
import { TierListContext } from "./TierListProvider";

export default function useDBUpdate() {
  const { list, name, description, labels, fetchURI } =
    useContext(TierListContext);

  fetch(fetchURI, {
    method: "PUT",
    body: JSON.stringify({ list, name, description, labels }),
    headers: { "Content-Type": "application/json" },
  })
    .then((_) => alert("Saved"))
    .catch(console.error);
}
