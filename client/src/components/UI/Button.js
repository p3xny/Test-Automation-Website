import React, { useState } from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button id={props.id} className={styles.button} onClick={props.onActivate}>
      {props.name}
    </button>
  );
};

export default Button;
