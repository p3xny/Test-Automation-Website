import React from "react";

const MediaIcon = (props) => {
  return (
    <div>
      <a href="https://github.com/p3xny">
        {/* <img src={props.src} alt={props.alt} /> */}
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt={props.alt}
        />
      </a>
    </div>
  );
};
