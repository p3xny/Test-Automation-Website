import React, { useRef } from "react";

import "./App.css";

import WelcomeMessage from "./components/UI/WelcomeMessage";
import Tests from "./components/Tests";
import Terminal from "./components/Terminal/Terminal";

import TestDND from "./components/TestDND";

function App() {
  const terminalRef = useRef();

  return (
    <div className="App">
      <header className="App-header">
        <WelcomeMessage />
      </header>
      <Tests testTool="cypress" buttonId="cypress-menu" />
      <Tests testTool="selenium" buttonId="selenium-menu" />
      <Terminal ref={terminalRef} />

      <TestDragAndDrop />

      {/* <DraggableElement /> */}
    </div>
  );
}

export default App;
