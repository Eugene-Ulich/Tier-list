import { Draggable } from 'react-beautiful-dnd'
function ElementItem ({index, name}) {
    return (
    <Draggable index={index} draggableId={name+"-"+index}>
        { (provided) => (
            <span 
            className="element-item"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            >{name}</span>
        )}
    </Draggable>)
}

export default ElementItem;