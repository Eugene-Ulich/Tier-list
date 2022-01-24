//import ListElements from "./tier-list/ListElements";
import ListRows from "./tier-list/ListRows";
import OuterContainer from "./tier-list/OuterContainer";
import { DragDropContext } from "react-beautiful-dnd"
import React, { useState, useEffect } from "react";
import { MdDownloading } from "react-icons/md";
import TextField from "./TextField";

function TierList() {
  const [list, changeList] = useState();
  const [name, changeName] = useState();
  const [description, changeDescription] = useState();
  const [loading, setLoading] = useState(true);
//----------------------------------------------------// fetching tier-list drom DB
  useEffect(_=> {
    fetch('https://tier-list-70ad0-default-rtdb.europe-west1.firebasedatabase.app/Stellaris.json')
    .then(response=>response.json())
    .then(result=>{
      changeList(result.list);
      changeName(result.name);
      changeDescription(result.description);
      setLoading(false);
    })
    .catch(console.error);
  }, []);
//----------------------------------------------------// managing drag results
  function handleDragEnd (result) {
    if (!result.destination) return;

    const {source: {index: sourceIndex, droppableId: sourceID}, destination: {index: destIndex, droppableId: destID}} = result;
    if (sourceIndex === destIndex && sourceID === destID) return; // Skip rerender if the place is the same
    
    let newList = Object.assign({}, list);
    let deletedItem = newList[sourceID].splice(sourceIndex, 1);
    newList[destID].splice(destIndex, 0, deletedItem[0]);
    changeList(newList);
  }
//----------------------------------------------------// render section
  if (loading) return <div>Loading...         <MdDownloading /></div>;
  else {
    return (
      <div className="main">
        <TextField text={name} Tag="h1" onEdit={changeName} />
        <TextField text={description} onEdit={changeDescription}/>
        <section className="list-container">
          <DragDropContext onDragEnd={handleDragEnd}>
            {Object.keys(list)
            .filter(label => label!=="unordered")
            .map((rowLabel, index) =>
              <ListRows key={index} rowLabel={rowLabel} rowListElements={list[rowLabel]} listIndex={index} />
            )}
            {(list.unordered) ? <OuterContainer elements={list.unordered}/> : null }
          </DragDropContext>
        </section>
      </div>
    );
  }
}

export default TierList;