import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import styles from "./TestDND.module.css";

const TestDND = () => {
  return (
    <div>
      <div>
        <h1>Drag And Drop</h1>
      </div>
      <DragDropContext>
        <Droppable droppableId="ROOT" type="group">
          {(provided) => (
            <div>
              {stores.map((store) => (
                <React.Fragment>
                  <div className={styles["store-container"]}></div>
                </React.Fragment>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

// {stores.map((store) => (
//   <React.Fragment>
//     <div className={styles["store-container"]}>
//       <h3>{store.name}</h3>
//     </div>
//   </React.Fragment>
// ))}
