import { Draggable } from 'react-beautiful-dnd'
function ElementItem ({index, item: {name, img}}) {

    return (
    <Draggable index={index} draggableId={name+"-"+index}>
        { (provided) => (
            <span 
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            ><img height="80" src={img} alt={name} />
            </span>
        )}
    </Draggable>)
}

export default ElementItem;