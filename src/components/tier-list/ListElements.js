import ElementItem from "./ElementItem";
import { Droppable } from "react-beautiful-dnd";
import classes from "./tier-list.module.css";
import { useContext } from "react";
import { TierListContext } from "../controller/TierListProvider";

export default function ListElements({ labelIndex = "unordered" }) {
  const { list } = useContext(TierListContext);

    return (
      <Droppable droppableId={labelIndex.toString()} direction="horizontal">
        {(provided) => (
          <div
            className={classes["list-elements"]}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {list.length > 0
              ? list
                  .filter((item) => item.label == labelIndex)
                  .sort((a, b) => a["row order"] - b["row order"])
                  .map((item, index) => (
                    <ElementItem key={index} value={item} index={index} />
                  ))
              : null}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
}
