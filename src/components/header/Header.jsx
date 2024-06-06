import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo/icon.jpg";
import "./header.css"



function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/"><img src={logo} alt="logo"/></Link>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/about">ABOUT AS</Link>{" "}
          </li>
          <li>
            <Link to="/history">HISTORY</Link>{" "}
          </li>
          <li>
            <Link to="/portfolio">PORTFOLIO</Link>{" "}
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
export { Header };
