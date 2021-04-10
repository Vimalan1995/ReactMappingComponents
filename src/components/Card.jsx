import React from "react";
import Detail from "./detail";
import Emoji from "./emoji";

function Card(props) {
  return (
    <div className="term">
      <p>{props.id}</p>
      <dt>
        <Emoji info={props.img} />
        <span>{props.name}</span>
      </dt>
      <Detail info={props.term} />
    </div>
  );
}

export default Card;
