import ListRows from "./ListRows";
import OuterContainer from "./OuterContainer";
import TextField from "../ui/TextField";
import { TierListContext } from "../controller/TierListProvider";
import HandleDragEnd from "../controller/HandleDragEnd";

import { useContext } from "react";
import { MdDownloading } from "react-icons/md";
import { DragDropContext } from "react-beautiful-dnd";

export default function TierList() {
  const {
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
  } = useContext(TierListContext);
  //----------------------------------------------------// save changes to DB should be moved to component
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
  const checkUnordered = (item) => item.label === "unordered"; //check if the provided list have items without label

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
          <DragDropContext
            onDragEnd={(result) =>
              HandleDragEnd(result, list, labels, changeList)
            }
          >
            {labels.map((value, index) => (
              <ListRows key={index} labelValue={value} labelIndex={index} />
            ))}
            {list.some(checkUnordered) ? ( //move to a new component
              <OuterContainer elements={list.filter(checkUnordered)} />
            ) : null}
          </DragDropContext>
        </section>
        <button onClick={handleSaveChanges}>Save</button>
      </div>
    );
  }
}
