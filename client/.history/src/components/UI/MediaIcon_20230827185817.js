import React from "react";

const MediaIcon = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} />
      <link rel="stylesheet" href={props.src} />
    </div>
  );
};
