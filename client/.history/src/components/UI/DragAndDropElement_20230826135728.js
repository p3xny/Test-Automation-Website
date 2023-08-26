import React, { useState, DragEvent } from "react";

import styles from "./DragAndDropElement.module.css";

const DragAndDropElement = (props) => {
  const [item, setItem] = useState<string[]>([]);

  const handleOnDrag = (event: DragEvent, widgetType: string) => {
    event.dataTransfer.setData("widgetType", widgetType);
  }
  
};