import React from "react";

const MediaIcon = (props) => {
  return (
    <div>
      <a href="https://github.com/p3xny">
        {/* <img src={props.src} alt={props.alt} /> */}
        <img
          src="https://img.icons8.com/ios-filled/50/000000/github.png"
          alt={props.alt}
        />
      </a>
    </div>
  );
};

export default MediaIcon;
