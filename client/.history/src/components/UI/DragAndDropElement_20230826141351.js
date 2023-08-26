import React, { useState } from "react";

import styles from "./DragAndDropElement.module.css";

const DragAndDropElement = () => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", "Drag me!");
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      style={{ width: "100px", height: "100px", backgroundColor: "lightblue" }}
    >
      Drag me
    </div>
  );
};

export default DragAndDropElement;
