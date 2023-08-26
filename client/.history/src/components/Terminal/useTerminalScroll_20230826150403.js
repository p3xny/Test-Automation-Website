import React, { useRef, useEffect } from "react";

const TerminalScroll = () => {
  const terminalRef = useRef();

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
    scrollToBottom();
  }, []);

  return { terminalRef, addOutput };
};
