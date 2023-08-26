import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import styles from "./DraggableElement.module.css";

const DraggableElement = () => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", "Drag me!");
  };

  return (
    <DragDropContext>
      <Droppable droppableId="draggable-element">
        {(provided) => {
          <ul
            className="draggable-element"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <Draggable key={id} draggableId={id} index={index}>
              <li>
                <div className="draggable-element-icon"></div>
              </li>
            </Draggable>
          </ul>;
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableElement;
