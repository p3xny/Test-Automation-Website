import React from "react";

import "./App.css";

import WelcomeMessage from "./components/UI/WelcomeMessage";
import Tests from "./components/Tests";
import Terminal from "./components/Terminal/Terminal";
import DragAndDropElement from "./components/UI/DragAndDropElement";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeMessage />
      </header>
      <Tests testTool="cypress" buttonId="cypress-menu" />
      <Tests testTool="selenium" buttonId="selenium-menu" />
      <Terminal />
      <DragAndDropElement name="Test 1" model="shit" />
    </div>
  );
}

export default App;
