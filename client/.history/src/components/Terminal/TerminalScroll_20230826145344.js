import React, { useRef } from "react";

const TerminalScroll = () => {
  const terminalRef = useRef();
  const scrollToBottom = () => {
    const terminal = terminalRef.current;
    terminal.scrollTop = terminal.scrollHeight;
  };
};
