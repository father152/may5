import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-item">
        <div>
          <span className="title">{props.title}</span>
        </div>
        <img className="picture" src={props.image} alt={props.names} />
        <div>
          <span className="description">{props.description}</span>
        </div>
        <div>
          <span className="cost">COST: {props.cost}$</span>
        </div>
      </div>
    </div>
  );
}
export { Card };
