import React from "react";
import "./Card.css";
import user from "./user.png";

function Card(props) {
  return (
    <div className="card">
      <img src={user} alt="user"></img>
      <div className="podaci">
        <h3>{props.ime}</h3>
        <h3>{props.prezime}</h3>
        <h3>{props.uspeh}</h3>
        <h3>{props.vladanje} vladanje</h3>
        <h3 id="redniB">{props.redniBroj}</h3>
      </div>
    </div>
  );
}

export default Card;
