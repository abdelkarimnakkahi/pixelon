import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>
          Photos provided by{" "}
          <a
            href="https://unsplash.com/?utm_source=pixelon&utm_medium=referral"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash
          </a>
        </p>
        <p>
          Coded by{" "}
          <a href="https://www.nakkahistudio.com/" target="_blank">
            Abdelkarim Nakkahi
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
