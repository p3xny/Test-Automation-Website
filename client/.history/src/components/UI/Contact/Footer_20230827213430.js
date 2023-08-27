import React from "react";

import styles from "./Footer.module.css";

import MediaIcon from "./MediaIcon";

const linksArray = [
  {
    id: 1,
    href: "https://github.com/p3xny",
    icon: "https://img.icons8.com/ios-filled/50/000000/github.png",
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/piotr-%C5%82aty%C5%84ski-6b5678195/",
    icon: "https://img.icons8.com/ios-filled/50/000000/linkedin.png",
  },
];

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
              <MediaIcon link={linksArray[0].href} icon={linksArray[0].icon}>
                <i class="fas fa-envelope"></i> &nbsp; https://github.com/p3xny
              </MediaIcon>
            </span>
            <span>
              <i class="fas fa-phone"></i> &nbsp; +48 517-926-305
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
