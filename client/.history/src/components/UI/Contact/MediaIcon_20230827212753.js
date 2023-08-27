import React from "react";

const MediaIcon = (props) => {
  return (
    <div>
      <a href={props.link} target="_blank">
        <img src={props.icon} alt={props.alt} />
      </a>
    </div>
  );
};

export default MediaIcon;
