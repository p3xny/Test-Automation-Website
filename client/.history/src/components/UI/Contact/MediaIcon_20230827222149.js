import React from "react";

import styles from "./MediaIcon.module.css";

const MediaIcon = (props) => {
  return (
    <a className={styles["icon-link"]} href={props.link} target="_blank">
      <img src={props.icon} alt={props.alt} />
      <p className={styles["icon-text"]}>{props.text}</p>
    </a>
  );
};

export default MediaIcon;
