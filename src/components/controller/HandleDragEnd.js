//import { useContext } from "react";
//import { TierListContext } from "./TierListProvider";

export default function HandleDragEnd(result, list, changeList) {
  //const { list, changeList } = useContext(TierListContext);
  console.log(
    `Source row ${result.source.droppableId} item ${result.source.index}`
  );
  if (!result.destination) {
    console.log("Wrong destiantion");
    return;
  }
  console.log(
    `to destination row ${result.destination.droppableId} item ${result.destination.index}`
  );
  const {
    source: { index: sourceIndex, droppableId: sourceLabel },
    destination: { index: destIndex, droppableId: destLabel },
  } = result;
  if (sourceIndex === destIndex && sourceLabel === destLabel) return; // Skip rerender if the place is the same

  const searchQuery = (index, id) => (item) =>
    item["row order"] == index && item["label"] == id; //Harold.jpg
  let newList = [...list];
  const sourceItemIndex = newList.findIndex(
    searchQuery(sourceIndex, sourceLabel)
  );
  if (sourceLabel === destLabel && sourceIndex < destIndex) { //special arrangement if item dragged to the same row, further in order
    newList.forEach((item) => {
      if (item["label"] == destLabel && item["row order"] <= destIndex) {
        item["row order"] = (1 * item["row order"] - 1).toString();
        console.log(item);
      }
    });
  } else {
    //items in the destination row arrange by one unit forward
    newList.forEach((item) => {
      if (item["label"] == destLabel && item["row order"] >= destIndex) {
        item["row order"] = (1 * item["row order"] + 1).toString();
        console.log(item);
      }
    });
    //closing the gap in the source row
    newList.forEach((item) => {
      if (item["label"] == sourceLabel && item["row order"] > sourceIndex) {
        item["row order"] = (1 * item["row order"] - 1).toString();
        console.log(item);
      }
    });
  }
  //assigning dragged item to the destination place;
  newList[sourceItemIndex] = {
    ...newList[sourceItemIndex],
    "row order": destIndex.toString(),
    label: destLabel.toString(),
  };
  console.log(newList[sourceItemIndex]);

  changeList(newList);
}
