import { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";

export const TierListContext = createContext();

export const defaultLabel = ["S", "A", "B", "C", "F"]; //Why are we still here? Just to suffer?

export default function TierListProvider({ children }) {
  const [list, changeList] = useState([]);
  const [name, changeName] = useState("");
  const [description, changeDescription] = useState("");
  const [labels, changeLabels] = useState(defaultLabel);
  const [loading, setLoading] = useState(true);
  const [fetchURI] = useState(
    `https://tier-list-70ad0-default-rtdb.europe-west1.firebasedatabase.app/tier-lists/${
      useParams().listName
    }.json`
  );

  useEffect(
    (_) => {
      fetch(fetchURI)
        .then((response) => response.json())
        .then((result) => {
          changeList(result.list);
          changeName(result.name);
          changeDescription(result.description);
          changeLabels(result.labels);
          setLoading(false);
        })
        .catch(console.error);
    },
    [fetchURI]
  );

  return (
    <TierListContext.Provider
      value={{
        list,
        changeList,
        name,
        changeName,
        description,
        changeDescription,
        labels,
        changeLabels,
        loading,
        fetchURI,
      }}
    >
      {children}
    </TierListContext.Provider>
  );
}
