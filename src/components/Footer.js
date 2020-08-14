import React from "react";
import { Icon } from "semantic-ui-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div>
        <hr color="silver" className="line"></hr>
      </div>
      <span className="footer-text"> &copy; {year} Surelis Segarra</span>
      <div className="footer-container">
        <a href="https://github.com/SuriSegarra" className="contact-logo">
          <Icon name="github"></Icon>
        </a>
        <a
          href="https://www.linkedin.com/in/surelis-segarra-bbbba3186/"
          className="contact-logo"
        >
          <Icon name="linkedin alternate"></Icon>
        </a>
        <a href="https://twitter.com/surisegarra" className="contact-logo">
          <Icon name="twitter square"></Icon>
        </a>
      </div>
    </footer>
  );
}
