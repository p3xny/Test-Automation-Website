import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

import styles from "./DraggableElement.module.css";

const DraggableElement = () => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", "Drag me!");
  };

  return (
    <DragDropContext>
      <Droppable>
        {(provided) => {
          <ul className="draggable-element"></ul>;
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableElement;
