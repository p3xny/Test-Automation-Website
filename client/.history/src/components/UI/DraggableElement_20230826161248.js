import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import styles from "./DraggableElement.module.css";

const ArrayOfElements = [
  { id: 1, name: "Element" },
  { id: 2, name: "Element" },
  { id: 3, name: "Element" },
];

const DraggableElement = () => {
  const [elements, updateElements] = useState(ArrayOfElements);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(elements);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateElements(items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="draggable-element">
        {(provided) => (
          <ul
            className="draggable-element"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {" "}
            {ArrayOfElements.map(({ id, name }, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  <li>
                    <div>{`Draggable-${name}${id}`}</div>
                  </li>
                  <li>
                    <div>{`Draggable-${id}`}</div>
                  </li>
                  <li>
                    <div>{`Draggable-${id}`}</div>
                  </li>
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableElement;
