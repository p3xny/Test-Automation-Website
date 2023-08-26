import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

const StoreList = ({ name, items, id }) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <div className={styles["store-container"]}>
            <h3>{name}</h3>
          </div>
          <div className={styles["items-container"]}>
            {items.map((item, index) => (
              <Draggable draggableId={item.id} index={index} key={item.id}>
                {(provided) => (
                  <div
                    className={styles["item-container"]}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                  ></div>
                )}
              </Draggable>
            ))}
          </div>
        </div>
      )}
    </Droppable>
  );
};
