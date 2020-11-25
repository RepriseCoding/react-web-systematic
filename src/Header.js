import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab);
library.add(fas);

function Header() {
  return (
    <div className="header-main">
      <div className="container">
        <div className="header-main-grid">
          <div className="header-brand">
            <h1>SYSTEMATIC</h1>
            <span>Free PSD Website Template</span>
          </div>
          <div className="social-icon-box">
            <div className="social-icon">
              <a href="#">
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
              </a>
            </div>
            <div className="social-icon">
              <a href="#">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
            </div>
            <div className="social-icon">
              <a href="#">
                <FontAwesomeIcon icon={["fab", "pinterest"]} />
              </a>
            </div>
            <div className="social-icon">
              <a href="#">
                <FontAwesomeIcon icon={["fab", "google-plus"]} />
              </a>
            </div>
            <div className="social-icon">
              <a href="#">
                <FontAwesomeIcon icon={["fas", "rss"]} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
