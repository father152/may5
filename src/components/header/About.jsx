import React from "react";
import "./about.css";
import picture2 from "./logo/home-3150464_1280.jpg";
import home from "./logo/иконка домой.png";
import { Link } from "react-router-dom";


function About() {
  const xx = document.getElementById("pop");
  function changeColor() {
    xx.style.color = "red";
  }
  function changeColor1() {
    xx.style.color = "green";
  }
  return (
    <div className="about">
      <h1>ABOUT AS</h1>
      <span className="text">
        <div className="description2">
          <img className="pic" src={picture2} alt=""></img>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Dolor penatibus
            suscipit lacus viverra ex proin. Sit torquent erat sit metus justo.
            Dolor pretium habitasse platea in praesent neque. Maximus facilisis
            in dolor ex proin urna aptent primis iaculis. Tincidunt diam ante
            urna, orci potenti consectetur. Duis euismod tincidunt malesuada
            consequat lectus ornare. Imperdiet lobortis ornare rutrum sapien
            sodales suspendisse. Risus justo integer praesent ornare gravida
            tellus egestas. Odio mi phasellus mattis sem luctus est parturient.
            Inceptos molestie mauris mi nisi urna. Blandit sagittis potenti ac
            facilisi sit vulputate. Pulvinar finibus dignissim metus ullamcorper
            nascetur lectus. Dignissim purus erat tempor purus netus nisl nam
            litora etiam. Mauris donec praesent sem rhoncus sodales conubia
            tempus phasellus. Et turpis cubilia; enim malesuada augue sem quam.
            Metus rutrum dis lobortis, magnis mauris urna. Dolor nostra senectus
            habitasse rhoncus est venenatis diam at. Pretium curabitur sem sed
            tristique eu. Risus venenatis litora bibendum varius nulla phasellus
            class. Gravida pulvinar commodo a sollicitudin felis himenaeos.
            Pellentesque a urna suscipit pretium ridiculus consectetur. Velit
            vel sapien laoreet duis facilisi donec enim ante. Commodo sociosqu
            netus pellentesque phasellus maximus taciti nisi arcu etiam.
            Pulvinar aptent tristique nibh metus ut suscipit; placerat mollis.
          </p>
        </div>
      </span>
      <img
        className="step"
        src="https://picsum.photos/id/116/3504/2336"
        alt=""
      ></img>
      <button type="button" className="button" onClick={changeColor}>
        Red
      </button>
      <button type="button" className="button" onClick={changeColor1}>
        Green
      </button>
      <p id="pop" className="popp">
        WELCOME!
      </p>

      <div className="home">
        <Link to="/">
          <img src={home} alt="home" />
        </Link>
      </div>
    </div>
  );
}
export { About };
