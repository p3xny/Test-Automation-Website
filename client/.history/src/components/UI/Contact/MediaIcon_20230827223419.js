import React from "react";

import styles from "./MediaIcon.module.css";

const MediaIcon = (props) => {
  return (
    <React.Fragment>
      <a className={styles["icon-link"]} href={props.link} target="_blank">
        <img src={props.icon} alt={props.alt} />
        <span className={styles["icon-text"]}>{props.text}</span>
      </a>
    </React.Fragment>
  );
};

export default MediaIcon;
