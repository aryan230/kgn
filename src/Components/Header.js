import React from "react";

function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="header-left">
          <img className="logo-image" src="./assets/logo.png" alt="" />
        </div>
        <nav>
          <div className="header-responsive">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M5 8H13.75M5 12H19M10.25 16L19 16"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            <ul className="header-ul-responsive">
              <li>
                <a href className="header-element">
                  Home
                </a>
              </li>
              <li>
                <a href className="header-element">
                  About Us
                </a>
              </li>
              <li>
                <a href className="header-element">
                  Our Client’s
                </a>
              </li>
              <li>
                <a href className="header-element">
                  Work with us
                </a>
              </li>
              <li>
                <button className="header-button">
                  <i className="fa-sharp fa-regular fa-user" />
                  Login
                </button>
              </li>
            </ul>
          </div>
          <ul className="header-ul">
            <li>
              <a href className="header-element">
                Home
              </a>
            </li>
            <li>
              <a href className="header-element">
                About Us
              </a>
            </li>
            <li>
              <a href className="header-element">
                Our Client’s
              </a>
            </li>
            <li>
              <a href className="header-element">
                Work with us
              </a>
            </li>
            <li>
              <button className="header-button">
                <i className="fa-sharp fa-regular fa-user" />
                Login
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
