import React, { useState } from "react";

import styles from "./DragAndDropElement.module.css";

const DragAndDropElement = (props) => {
  const [item, setItem] = useState([]);

  const handleOnDrag = (event, item) => {
    event.dataTransfer.setData("item", item);
  };

  return (
    <div
      draggable={true}
      onDragStart={(event) => {
        event.dataTransfer.setData("text/plain", JSON.stringify(props.model));
      }}
      className={styles["draggable-element"]}
    >
      {props.name}
    </div>
  );
};

export default DragAndDropElement;
