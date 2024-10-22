import React from "react";
import { Link } from "react-router-dom";
import icon from "./logo/иконка домой.png";
import "./history.css";
import { useState } from "react";

function History() {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <>
      <div>
        <select value={value} onChange={handleChange}>
          <option selected>
            <p>Change house</p>
          </option>
          <option>
            <Link to="/house">House</Link>
          </option>
          <option>
            <Link to="/apartment">Apartment</Link>
          </option>
          <option>
            <Link to="/kitchen">Kitchen</Link>
          </option>
          <option>
            <Link to="/hol">Hol</Link>
          </option>
        </select>
      </div>
      <p>ваш выбор: {value}</p>

      <div class="dropdown" >
      <button class="dropbtn">Left</button>
      <div class="dropdown-content" >
        <Link to="/house">House</Link>
         <Link to="/apartment">Apartment</Link>
      </div>
    </div>

      <div className="icon__home">
        <Link to="/">
          <img src={icon} alt="home" />
        </Link>
      </div>
    </>
  );
}
export { History };
