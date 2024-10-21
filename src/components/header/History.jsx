import React from "react";
import { Link } from "react-router-dom";
import icon from "./logo/иконка домой.png"
import "./history.css"

// function Color() {
//   document.getElementById("para").style.color = "blue";
//   document.getElementById("para").style.fontSize = "25px";
//   document.getElementById("para").style.display = "none"
// }
// function Color1() {
//   document.getElementById("para").style.color = "black";
//   document.getElementById("para").style.fontSize = "50px";
//    document.getElementById("para").style.display = "block"
// }
function myFunction() {
  var x = document.getElementById("para");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function History() {
  return (
    <div className="history">
      <div className="change__color">
        <button id="button" onClick={myFunction}>
          CHANGE COLOR 1
        </button>

        <div id="para">
          <ul className="list">
            <li>
              <Link to="/house">House</Link>
            </li>
            <li>
              <Link to="/apartment">Apartment</Link>
            </li>
            <li>
              <Link to="/kitchen">Kitchen</Link>
            </li>
            <li>
              <Link to="/hol">Hol</Link>
            </li>
          </ul>
        </div>
      </div>
<div className="icon__home">
      <Link to="/"><img src={icon} alt="home"/></Link>
</div>
    </div>
  );
}
export { History };
