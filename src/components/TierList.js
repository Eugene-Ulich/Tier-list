//import ListElements from "./tier-list/ListElements";
import ListRows from "./tier-list/ListRows";
import ElementsContainer from "./tier-list/ElementsContainer";
import {DragDropContext} from "react-beautiful-dnd"
import React, { useState } from "react";

const DATA = {
  name: "Stellaris DLC",
  description: "Template description of tierlist.",
  list: {
    "S": ["Apocalypsis", "Leviathan"],
    "A": ["Utopia", "Distant Stars Stories pack", "MegaCorp"],
    "B": ["Lithoids", "Synthetic Dawn"],
    "C": ["Necroids", "Nemesis", "Federations"],
    "D": ["Plantoids Species Pack", "Humanoids Species Pack"],
    "F": ["Ancient Relics"]
  }
};

function TierList() {
  const [list, changeList] = useState(DATA.list);
  const [name, changeName] = useState(DATA.name);
  const [description, changeDescription] = useState(DATA.description);

  function handleDragEnd (result) {
    if (!result.destination) return;

    const {source: {index: sourceIndex, droppableId: sourceID}, destination: {index: destIndex, droppableId: destID}} = result;
    if (sourceIndex === destIndex && sourceID === destID) return;

    let newList = Object.assign({}, list);
    let deletedItem = newList[sourceID].splice(sourceIndex, 1);
    newList[destID].splice(destIndex, 0, deletedItem[0]);
    changeList(newList);
    // console.log(sourceID, sourceIndex, destID, destIndex);
    // console.log(newList, list);
  }

  return (
    <div className="main">
      <h2>{name}</h2>
      <div>{description}</div>
      <section className="list-container">
        <DragDropContext onDragEnd={handleDragEnd}>
          {Object.keys(list).map((rowLabel, index) =>
            <ListRows key={index} rowLabel={rowLabel} rowListElements={list[rowLabel]} listIndex={index} />
          )}
          <ElementsContainer />
        </DragDropContext>
      </section>
    </div>
  );
}

export default TierList;