import React, { useRef } from "react";
// import { Provider } from "react-wrap-balancer";

import "./App.css";

import WelcomeMessage from "./components/UI/WelcomeMessage";
import Tests from "./components/Tests";
import Terminal from "./components/Terminal/Terminal";
import MediaIcon from "./components/UI/MediaIcon";

function App() {
  const terminalRef = useRef();

  return (
    // <Provider>
    <div className="App">
      <header className="App-header">
        <WelcomeMessage />
      </header>
      <Tests testTool="cypress" buttonId="cypress-menu" />
      <Tests testTool="selenium" buttonId="selenium-menu" />
      <Terminal ref={terminalRef} />
      <MediaIcon />
    </div>
    // </Provider>
  );
}

export default App;
