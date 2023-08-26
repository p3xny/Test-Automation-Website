import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import styles from "./DraggableElement.module.css";

const DraggableElement = () => {
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
                <div></div>
              </li>
            </Draggable>
          </ul>;
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableElement;
