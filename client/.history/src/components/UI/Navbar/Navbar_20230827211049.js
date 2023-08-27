import React from "react";

const Navbar = (props) => {
  return (
    <nav className={styles["navbar navbar-expand-lg navbar-dark bg-dark"]}>
      <ul className={styles["nav-list"]}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Tests</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
