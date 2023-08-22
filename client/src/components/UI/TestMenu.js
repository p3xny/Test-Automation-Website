import React, { useState, useEffect } from "react";

import Button from "./Button";

const TestMenu = (props) => {
  const [runTest, setRunTest] = useState(false);

  const runTestHandler = (event, command) => {
    setRunTest(true); // Update testing state
    console.log("Activated!");

    // Make a POST request to trigger the tests
    fetch("http://localhost:5000/run_tests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        command: command,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response as needed
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    if (runTest) {
      setRunTest(false);
    }
  }, [runTest]);
  return (
    <ul>
      {props.tests.map((test) => (
        <Button
          key={test.id}
          name={test.name}
          command={test.command}
          testFamily={props.testTool}
          onActivate={
            test.command != ""
              ? (event) => runTestHandler(event, test.command)
              : null
          }
        />
      ))}
    </ul>
  );
};

export default TestMenu;
