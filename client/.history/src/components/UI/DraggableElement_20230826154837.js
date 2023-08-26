import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

import styles from "./DraggableElement.module.css";

const DraggableElement = () => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", "Drag me!");
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className={styles["draggable-element"]}
    >
      Drag
    </div>
  );
};

export default DraggableElement;
