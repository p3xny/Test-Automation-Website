import React from "react";

import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={styles["navbar"]}>
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

export default Navbar;