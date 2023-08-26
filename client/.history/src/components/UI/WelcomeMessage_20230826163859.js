import React from "react";

import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = (props) => {
  return (
    <div className={styles.WelcomeMessage}>
      <h1>Welcome To Pexny's Test Automation Website!</h1>
      <p>
        You can run automated test suites with either Selenium or Cypress by
        clicking on the adequate test buttons or typing appropriate commands in
        the website's terminal:
        <ul>
          <li>
            <p>run cypress test suite</p>
          </li>
          <li>
            <p>run selenium test suite</p>
          </li>
        </ul>
      </p>
    </div>
  );
};

export default WelcomeMessage;

// const describeOriginal = require("mocha").describe;

// require("mocha").describe = (describeTitle) => {
//   TestListener.watch(describeTitle);
//   describeOriginal(describeTitle);
// };
