import React from "react";

import styles from "./Footer.module.css";

import MediaIcon from "./MediaIcon";

const linksArray = [
  {
    id: 1,
    href: "https://github.com/p3xny",
    icon: "https://img.icons8.com/ios-filled/50/000000/github.png",
    text: "GitHub Profile",
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/piotr-%C5%82aty%C5%84ski-6b5678195/",
    icon: "https://img.icons8.com/ios-filled/50/000000/linkedin.png",
    text: "LinkedIn Profile",
  },
];

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div class="footer-content">
        <div class="footer-section about">
          <h1 class="logo-text">
            <span>Contact And Socials</span>
          </h1>
          <div class="contact">
            <MediaIcon
              link={linksArray[0].href}
              icon={linksArray[0].icon}
              text={linksArray[0].text}
            />
            <MediaIcon
              link={linksArray[1].href}
              icon={linksArray[1].icon}
              text={linksArray[1].text}
            />
            <p>+48 517-926-305</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
