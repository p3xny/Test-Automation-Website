import React from "react";

import styles from "./DragAndDropElement.module.css";

const DragAndDropElement = () => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", "Drag me!");
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className={styles.DragAndDropElement}
    >
      Drag me
    </div>
  );
};

export default DragAndDropElement;
