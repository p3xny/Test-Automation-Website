import React, { useRef } from "react";

import "./App.css";

import WelcomeMessage from "./components/UI/WelcomeMessage";
import Tests from "./components/Tests";
import Terminal from "./components/Terminal/Terminal";
import MediaIcon from "./components/UI/Contact/MediaIcon";
import Navbar from "./components/UI/Navbar/Navbar";

function App() {
  const terminalRef = useRef();

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <WelcomeMessage />
      </header>
      <Tests testTool="cypress" buttonId="cypress-menu" />
      <Tests testTool="selenium" buttonId="selenium-menu" />
      <Terminal ref={terminalRef} />
      <MediaIcon />
    </div>
  );
}

export default App;
