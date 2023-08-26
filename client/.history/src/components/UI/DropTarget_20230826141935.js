import React from "react";

import styles from "DropTarget.module.css";

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
