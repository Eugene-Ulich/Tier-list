import ElementItem from "./ElementItem";
import { Droppable } from "react-beautiful-dnd";
import classes from "./tier-list.module.css";

export default function ListElements({ elements, label="unordered" }) {

  return (
      <Droppable droppableId={label} direction="horizontal">
        {(provided) => (
          <div
            className={classes["list-elements"]}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {elements.map((item, index) => (
              <ElementItem key={index} item={item} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
  );
}
