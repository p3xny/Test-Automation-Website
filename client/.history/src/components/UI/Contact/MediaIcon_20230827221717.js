import React from "react";

import styles from "./MediaIcon.module.css";

const MediaIcon = (props) => {
  return (
    <div className={styles["icon-link"]}>
      <a href={props.link} target="_blank">
        <img src={props.icon} alt={props.alt} />
      </a>
      <div className={styles["icon-text"]}>{props.text}</div>
    </div>
  );
};

export default MediaIcon;
