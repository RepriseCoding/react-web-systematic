import React from "react";

function Header_nav() {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="header-nav-grid">
            <ul className="menu-link">
              <li>
                <a className="nav-link">Sign Up</a>
              </li>

              <li>
                <a className="nav-link-seperator">|</a>
              </li>

              <li>
                <a className="nav-link">Login</a>
              </li>

              <li>
                <a className="nav-link-seperator">|</a>
              </li>

              <li>
                <a className="nav-link">RSS Feeds</a>
              </li>

              <li>
                <a className="nav-link-seperator">|</a>
              </li>

              <li>
                <a className="nav-link">Archived News</a>
              </li>
            </ul>

            <div className="header-search">
              <form name="search-header">
                <input type="text" className="search-input" />
                <button className="search-button" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header_nav;
