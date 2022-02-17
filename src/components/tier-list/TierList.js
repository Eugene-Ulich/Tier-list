import ListRows from "./ListRows";
import OuterContainer from "./OuterContainer";
import TextField from "../ui/TextField";
import { TierListContext } from "../controller/TierListProvider";
import HandleDragEnd from "../controller/HandleDragEnd";
import databaseUpdate from "../firebase/databaseUpdate";

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
    loading,
    fetchURI,
  } = useContext(TierListContext);

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
          <DragDropContext
            onDragEnd={(result) => HandleDragEnd(result, list, changeList)}
          >
            {labels.map((value, index) => (
              <ListRows key={index} labelValue={value} labelIndex={index} />
            ))}
            <OuterContainer />
          </DragDropContext>
        </section>
        <button
          onClick={() =>
            databaseUpdate({ name, description, list, labels }, fetchURI)
          }
        >
          Save
        </button>
      </div>
    );
  }
}
