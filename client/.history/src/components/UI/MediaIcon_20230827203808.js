import React from "react";

const MediaIcon = (props) => {
  return (
    <div>
      <a href="https://github.com/p3xny" target="_blank">
        <img
          src="https://img.icons8.com/ios-filled/50/000000/github.png"
          alt={props.alt}
        />
      </a>

      <a
        href="https://www.linkedin.com/in/piotr-%C5%82aty%C5%84ski-6b5678195/"
        target="_blank"
      >
        <img
          src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
          alt={props.alt}
        />
      </a>
    </div>
  );
};

export default MediaIcon;
