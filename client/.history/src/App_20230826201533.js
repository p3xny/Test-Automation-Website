import React, { useRef } from "react";
import { provider } from "react-wrap-balancer";

import "./App.css";

import WelcomeMessage from "./components/UI/WelcomeMessage";
import Tests from "./components/Tests";
import Terminal from "./components/Terminal/Terminal";

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

      {/* <TestDND /> */}

      {/* <DraggableElement /> */}
    </div>
  );
}

export default App;