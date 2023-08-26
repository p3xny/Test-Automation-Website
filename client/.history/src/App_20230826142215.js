import React from "react";

import "./App.css";

import WelcomeMessage from "./components/UI/WelcomeMessage";
import Tests from "./components/Tests";
import Terminal from "./components/Terminal/Terminal";

import DraggableElement from "./components/UI/DragAndDropElement";
import DropTarget from "./components/UI/DropTarget";

function App() {
  const [droppedElement, setDroppedElement] = React.useState(null);

  const handleDrop = (element) => {
    setDroppedElement(element);
  };

  return (
    <div className="App">
      <header className="App-header">
        <WelcomeMessage />
      </header>
      <Tests testTool="cypress" buttonId="cypress-menu" />
      <Tests testTool="selenium" buttonId="selenium-menu" />
      <Terminal />
      <DraggableElement />
    </div>
  );
}

export default App;
