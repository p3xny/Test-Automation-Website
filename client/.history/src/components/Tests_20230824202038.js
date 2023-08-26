import React, { useState, useEffect } from "react";

import styles from "./UI/Button.module.css";

import TestMenu from "./UI/TestMenu";
import Button from "./UI/Button";
import Card from "./UI/Card";

const testCases = [
  {
    cypress: [
      { id: 1, name: "Cypress Full Test", command: "" },
      { id: 2, name: "Cypress Buttons Test", command: "" },
      { id: 3, name: "Cypress Terminal Test", command: "" },
    ],
    selenium: [
      { id: 1, name: "Selenium Full Test", command: "pytest -v" },
      {
        id: 2,
        name: "Selenium Buttons Test",
        command: "pytest -v test_client_buttons.py",
      },
      {
        id: 3,
        name: "Selenium Terminal Test",
        command: "pytest -v test_client_terminal.py",
      },
    ],
  },
];

const Tests = (props) => {
  const [isActive, setIsActive] = useState(false);

  const makeActiveHandler = (event) => {
    setIsActive(true);
    console.log("Activated!");
  };

  const makeInactiveHandler = (event) => {
    setIsActive(false);
  };

  const filterButtons = testCases.find((test) =>
    test.hasOwnProperty(props.testTool)
  );

  return (
    <div>
      {!isActive && (
        <Button
          name={`TEST ${props.testTool.toUpperCase()}`}
          id={`test-button-${props.buttonId}`}
          testFamily={props.testTool}
          onActivate={makeActiveHandler}
        />
      )}
      {isActive && (
        <Card>
          <TestMenu tests={filterButtons[props.testTool]} testTool="cypress" />
          <button
            className={styles.button}
            id={"back-button"}
            onClick={makeInactiveHandler}
          >
            BACK
          </button>
        </Card>
      )}
    </div>
  );
};

export default Tests;
