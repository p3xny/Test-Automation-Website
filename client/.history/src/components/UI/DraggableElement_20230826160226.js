import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import styles from "./DraggableElement.module.css";

const DraggableElement = () => {
  return (
    <DragDropContext>
      <Droppable droppableId="draggable-element">
        {(provided) => (
          <ul
            className="draggable-element"
            {...provided.droppableProps}
            ref={provided.innerRef}
          > {ArrayOfElements.map(({id, name}, index) => {
            return (
          
<Draggable key={id} draggableId={id} index={index}>
              <li>
                <div>{`Draggable-${name}${id}`}</div>
              </li>
              <li>
                <div>{`Draggable-${id}`}</div>
              </li>
              <li>
                <div>{`Draggable-${id}`}</div>
              </li>
            </Draggable>
            );
          </ul>;

          })
        }
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableElement;
