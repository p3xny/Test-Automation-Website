import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import styles from "./TestDND.module.css";

const TestDND = () => {
  return (
    <div>
      <DragDropContext>
        <Droppable droppableId="ROOT" type="group">
          {stores.map((store) => (
            <React.Fragment>
              <div className={styles["store-container"]}></div>
            </React.Fragment>
          ))}
        </Droppable>
      </DragDropContext>
    </div>
  );
};