import React, { useRef } from "react";

import "./App.css";

import WelcomeMessage from "./components/UI/WelcomeMessage";
import Tests from "./components/Tests";
import Terminal from "./components/Terminal/Terminal";
import MediaIcon from "./components/UI/Contact/MediaIcon";
import Navbar from "./components/UI/Navbar/Navbar";
import Footer from "./components/UI/Contact/Footer";

function App() {
  const terminalRef = useRef();

  return (
    <React.Fragment>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <WelcomeMessage />
        </header>
        <Tests testTool="cypress" buttonId="cypress-menu" />
        <Tests testTool="selenium" buttonId="selenium-menu" />
        <Terminal ref={terminalRef} />
        <MediaIcon />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
