const TerminalScroll = () => {
  const terminalRef = React.useRef();
  const scrollToBottom = () => {
    const terminal = terminalRef.current;
    terminal.scrollTop = terminal.scrollHeight;
  };
};
