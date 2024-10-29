import React from "react";
import "./about.css";
import { LoremIpsum } from "react-lorem-ipsum";


function About() {
  const xx = document.getElementById("pop");
  function changeColor() {
    xx.style.color = "red";
    xx.style.fontSize = "20px"
  }
  function changeColor1() {
    xx.style.color = "green";
    xx.style.fontSize = "50px"
  }
  return (
    <div className="about">
      <h1>ABOUT AS</h1>
      <LoremIpsum />
      <LoremIpsum />
      <button type="button" className="button" onClick={changeColor}>
        Red
      </button>
      <button type="button" className="button" onClick={changeColor1}>
        Green
      </button>
      <p id="pop" className="popp">
        WELCOME!
      </p>
    </div>
  );
}
export { About };
