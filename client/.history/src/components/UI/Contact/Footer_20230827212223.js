import React from "react";

import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div class="footer-content">
        <div class="footer-section about">
          <h1 class="logo-text">
            <span>Code</span>Blog
          </h1>
          <p>
            CodeBlog is a blog for developers looking for inspiration and
            advice.
          </p>
          <div class="contact">
            <span>
              <i class="fas fa-phone"></i> &nbsp; 123-456-789
            </span>
            <span>
              <i class="fas fa-envelope"></i> &nbsp; github/p3xny
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
