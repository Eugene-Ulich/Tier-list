import ListRows from "./ListRows";
import OuterContainer from "./OuterContainer";
import TextField from "../ui/TextField";
import { TierListContext } from "../controller/TierListProvider";
import HandleDragEnd from "../controller/HandleDragEnd";

import { useContext } from "react";
import { MdDownloading } from "react-icons/md";
import { DragDropContext } from "react-beautiful-dnd";

export default function TierList() {  
  const { list, changeList, name, changeName, description, changeDescription, loading, fetchURI } = useContext(TierListContext);
  //----------------------------------------------------// save changes to DB
  function handleSaveChanges() {
    fetch(fetchURI, {
      method: "PUT",
      body: JSON.stringify({ list, name, description }),
      headers: { "Content-Type": "application/json" },
    })
      .then((_) => alert("Saved"))
      .catch(console.error);
  }
  //----------------------------------------------------// render section
  if (loading)
    return (
      <div>
        Loading... <MdDownloading />
      </div>
    );
  else {
    return (
      <div className="main">
        <TextField text={name} Tag="h1" onEdit={changeName} />
        <TextField text={description} onEdit={changeDescription} />
        <section className="list-container">
          <DragDropContext onDragEnd={ result => HandleDragEnd(result, list, changeList) }>
            {Object.keys(list)
              .filter((label) => label !== "unordered")
              .map((rowLabel, index) => (
                <ListRows
                  key={index}
                  rowLabel={rowLabel}
                  rowListElements={list[rowLabel]}
                  listIndex={index}
                />
              ))}
            {list.unordered ? (
              <OuterContainer elements={list.unordered} />
            ) : null}
          </DragDropContext>
        </section>
        <button onClick={handleSaveChanges}>Save</button>
      </div>
    );
  }
}
