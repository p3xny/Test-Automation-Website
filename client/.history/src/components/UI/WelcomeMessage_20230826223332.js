import React from "react";
import Balancer from "react-wrap-balancer";

import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = (props) => {
  return (
    <Balancer>
      <div className={styles.WelcomeMessage}>
        <h1>Welcome To Pexny's Test Automation Website!</h1>
        <p>
          You can run automated test suites with either Selenium or Cypress by
          clicking on the adequate test buttons or typing appropriate commands
          in the website's terminal:
          <ul>
            <li>$ run cypress test suite</li>
            <li>$ run selenium test suite</li>
          </ul>
        </p>
      </div>
    </Balancer>
  );
};

export default WelcomeMessage;