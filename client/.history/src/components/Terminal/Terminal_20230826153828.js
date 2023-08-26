import React, { useRef, useState, useEffect } from "react";

import styles from "./Terminal.module.css";

const Terminal = (props) => {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState([]);
  const terminalRef = useRef();

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
    const greenWords = [
      "success",
      "Success",
      "SUCCESS",
      "passed",
      "Passed",
      "PASSED",
    ];
    const redWords = [
      // "error",
      // "Error",
      // "ERROR",
      "failed",
      "Failed",
      "FAILED",
      "FAILURES",
    ];
    const parts = message.split(
      new RegExp(`(${greenWords.concat(redWords).join("|")})`, "g")
    );

    return parts.map((part, index) => {
      if (greenWords.includes(part.toLowerCase())) {
        return (
          <span className={styles["highlighted-green"]} key={index}>
            {part}
          </span>
        );
      } else if (redWords.includes(part.toLowerCase())) {
        return (
          <span className={styles["highlighted-red"]} key={index}>
            {part}
          </span>
        );
      }
      return part;
    });
  };

  const checkAndScrollToBottom = () => {
    const terminal = terminalRef.current;
    const isScrolledToBottom =
      terminal.scrollHeight - terminal.scrollTop === terminal.clientHeight;

    if (isScrolledToBottom) {
      scrollToBottom();
    }
  };

  const scrollToBottom = () => {
    const terminal = terminalRef.current;
    terminal.scrollTop = terminal.scrollHeight;
  };

  const addOutput = (content) => {
    const terminal = terminalRef.current;
    terminal.innerHTML += content;
    scrollToBottom();
  };

  // Example effect to scroll to bottom on initial render
  useEffect(() => {
    terminalRef.current.scrollIntoView((behavior = "smooth"));
  }, [terminalOutput]);

  return (
    <div className={styles.terminal}>
      <div id="output">
        {terminalOutput.map((message, index) => (
          <pre key={index} className={styles.outputContent}>
            {highlightWords(message)}
          </pre>
        ))}

        <div ref={terminalRef}></div>
      </div>
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
