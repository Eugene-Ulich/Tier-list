//import { useContext } from "react";
//import { TierListContext } from "./TierListProvider";

export default function HandleDragEnd(result, list, changeList) {
  //const { list, changeList } = useContext(TierListContext);
  if (!result.destination) return;

  const {
    source: { index: sourceIndex, droppableId: sourceID },
    destination: { index: destIndex, droppableId: destID },
  } = result;
  if (sourceIndex === destIndex && sourceID === destID) return; // Skip rerender if the place is the same

  let newList = { ...list };
  let deletedItem = newList[sourceID].splice(sourceIndex, 1);
  newList[destID].splice(destIndex, 0, deletedItem[0]);
  changeList(newList);
}
