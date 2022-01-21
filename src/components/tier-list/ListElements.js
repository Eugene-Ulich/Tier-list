import ElementItem from "./ElementItem";
import { Droppable } from "react-beautiful-dnd";
//import OrderBtn from "../ui/OrderBtn";
//import classes from "./ListElements.module.css";

export default function ListElements({ elements, label }) {
  // function nameChangeHandler (target) {

  // }

  return (
      <Droppable droppableId={label} direction="horizontal">
        {(provided) => (
          <div
            className="list-elements"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {elements.map((item, index) => (
              <ElementItem key={index} name={item} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
  );
}
