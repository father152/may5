import React from "react";
import "./dropdown.css";
import { Link } from "react-router-dom";
import home from "./logo/иконка домой.png";

function Dropdown() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="dropdown">
      <button onClick={handleOpen}>Dropdown</button>
      {open ? (
        <ul className="menu-dropdown">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      ) : null}

      <div className="home">
        <Link to="/">
          <img src={home} alt="home" />
        </Link>
      </div>
    </div>
  );
}
export { Dropdown };
