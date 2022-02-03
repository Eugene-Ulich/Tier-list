import { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";

export const TierListContext = createContext();

export default function TierListProvider ({children}) {
    const [list, changeList] = useState();
    const [name, changeName] = useState();
    const [description, changeDescription] = useState();
    const [loading, setLoading] = useState(true);
    const [fetchURI] = useState(`https://tier-list-70ad0-default-rtdb.europe-west1.firebasedatabase.app/tier-lists/${
    useParams().listName
  }.json`);

    useEffect((_) => {
        fetch(fetchURI)
          .then((response) => response.json())
          .then((result) => {
            changeList(result.list);
            changeName(result.name);
            changeDescription(result.description);
            setLoading(false);
          })
          .catch(console.error);
      }, []);

    return (
        <TierListContext.Provider value={{list, changeList, name, changeName, description, changeDescription, loading, fetchURI}}>
            {children}
        </TierListContext.Provider>
    )
}