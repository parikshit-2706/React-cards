import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar src={props.img} />
      </div>
      <Details phone={props.tel} email={props.email} />
    </div>
  );
}

export default Card;
