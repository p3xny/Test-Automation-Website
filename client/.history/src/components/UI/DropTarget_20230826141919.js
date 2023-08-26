import React from "react";

const DropTarget = ({ onDrop, children }) => {
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    onDrop(data);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={styles["drop-target"]}
    >
      {children}
    </div>
  );
};
