import "./history.css";
import { Link } from "react-router-dom";
import home from "./logo/иконка домой.png";
import { Card } from "./Card";
import picture1 from "./logo/home-3150464_1280.jpg"



const History = () => {
    return (
    <div className="history">
      <h1>HISTORY</h1>
      <div className="container-history">

      <Card 
      title="HOUSE"
      image={picture1} 
      description="We recommend naming props from the component’s own point of view rather than the context in which it is being used We recommend naming props from the component’s own point of view rather than the context in which it is being used We recommend naming props from the component’s own point of view rather than the context in which it is being used We recommend naming props from the component’s own point of view rather than the context in which it is being used"
      cost="21"
      />
      <Card 
      title="FLAT"
      image={picture1} 
      description="We recommend naming props from the component’s own point of view rather than the context in which it is being used We recommend naming props from the component’s own point of view rather than the context in which it is being used We recommend naming props from the component’s own point of view rather than the context in which it is being used We recommend naming props from the component’s own point of view rather than the context in which it is being used"
      cost="21"
      />
      <Card 
      title="VILLA"
      image={picture1} 
      description="We recommend naming props from the component’s own point of view rather than the context in which it is being used We recommend naming props from the component’s own point of view rather than the context in which it is being used We recommend naming props from the component’s own point of view rather than the context in which it is being used We recommend naming props from the component’s own point of view rather than the context in which it is being used"
      cost="21"
      />
      <Card 
      title="HOUSE"
      image={picture1} 
      description="We recommend naming props from the component’s own point of view rather than the context in which it is being used We recommend naming props from the component’s own point of view rather than the context in which it is being used We recommend naming props from the component’s own point of view rather than the context in which it is being used We recommend naming props from the component’s own point of view rather than the context in which it is being used"
      cost="21"
      />
      <Card 
      title="HOUSE"
      image={picture1} 
      description="We recommend naming props from the component’s own point of view rather than the context in which it is being used We recommend naming props from the component’s own point of view rather than the context in which it is being used We recommend naming props from the component’s own point of view rather than the context in which it is being used We recommend naming props from the component’s own point of view rather than the context in which it is being used"
      cost="21"
      />
      <Card 
      title="HOUSE"
      image={picture1} 
      description="We recommend naming props from the component’s own point of view rather than the context in which it is being used We recommend naming props from the component’s own point of view rather than the context in which it is being used We recommend naming props from the component’s own point of view rather than the context in which it is being used We recommend naming props from the component’s own point of view rather than the context in which it is being used"
      cost="21"
      />
      </div>
    
      <div className="home">
        <Link to="/">
          <img src={home} alt="home" />
        </Link>
      </div>
    </div>
  );
};

export { History };
