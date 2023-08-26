import React, { useState } from "react";

import styles from "./DragAndDropElement.module.css";

const DragAndDropElement = (props) => {
  render() {
    return (
      <div
      draggable={true}
      onDragStart={event => {
        event.dataTransfer.setData("text/plain", JSON.stringify(this.props.model));
      }}
      className={styles["draggable-element"]}
      >
        {this.props.name}
      </div>
    )
  }

};
