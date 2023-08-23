import React, { useState } from "react";

import styles from "./Terminal.module.css";

import Card from "../UI/Card";

const Terminal = (props) => {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState([]);

  const terminalInputHandler = (event) => {
    setTerminalInput(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    writeToTerminal(`$ ${terminalInput}\n`);
    processCommand(terminalInput);
    setTerminalInput("");
  };

  const writeToTerminal = (message) => {
    setTerminalOutput((prevOutput) => [...prevOutput, message]);
  };

  const processCommand = async (command) => {
    try {
      const response = await fetch("http://localhost:5000/run_tests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ command }),
      });

      if (command === "clear" || command === "cls") {
        setTerminalOutput([]);
        return;
      }

      const data = await response.json();

      if (data.success) {
        writeToTerminal(data.output);
      } else {
        writeToTerminal(`Error: ${data.error}\n`);
      }
    } catch (error) {
      writeToTerminal(`Error: ${error}\n`);
    }
  };

  const highlightWords = (message) => {
    const greenWords = ["Success", "success", "passed", "Passed"];
    const redWords = ["Error", "error", "failed", "Failed"];

    const parts = message.split(new RegExp(`(${greenWords.join("|")})`, "g"));

    return parts.map((part, index) => {
      if (greenWords.includes(part)) {
        return (
          <span className={styles.highlighted} key={index}>
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className={styles.terminal}>
      <pre id="output">
        {terminalOutput.map((message, index) => (
          <span className={styles.content} key={index}>
            {message}
          </span>
        ))}
      </pre>
      <form id="input-form" onSubmit={submitHandler}>
        <span>$</span>
        <input
          className={styles.input}
          type="text"
          id="command-input"
          value={terminalInput}
          onChange={terminalInputHandler}
          autoFocus
        />
      </form>
    </div>
  );
};

export default Terminal;
