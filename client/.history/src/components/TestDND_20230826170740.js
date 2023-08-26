import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import styles from "./TestDND.module.css";

const TestDND = () => {
  return (
    <div>
      <h1>Drag And Drop</h1>
      <DragDropContext>
        <Droppable droppableId="ROOT" type="group">
          {stores.map((store) => (
            <React.Fragment>
              <div className={styles["store-container"]}>
                <h3>{store.name}</h3>
              </div>
            </React.Fragment>
          ))}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
