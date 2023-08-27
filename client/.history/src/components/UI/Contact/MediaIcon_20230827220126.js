import React from "react";

import styles from "./MediaIcon.module.css";

const MediaIcon = (props) => {
  return (
    <React.Fragment className={styles["icon-link"]}>
      <a href={props.link} target="_blank">
        <img src={props.icon} alt={props.alt} />
        <div className={styles["icon-text"]}>{props.text}</div>
      </a>
    </React.Fragment>
  );
};

export default MediaIcon;
