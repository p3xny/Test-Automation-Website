import React from "react";

import styles from "./MediaIcon.module.css";

const MediaIcon = (props) => {
  return (
    <a href={props.link} target="_blank">
      <img src={props.icon} alt={props.alt} />
      <span>{props.text}</span>
    </a>
  );
};

export default MediaIcon;
