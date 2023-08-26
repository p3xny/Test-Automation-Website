import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

const StoreList = ({ name, items, id }) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}></div>
      )}
    </Droppable>
  );
};
