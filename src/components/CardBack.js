import React from "react";
import cardBack from "../images/bg-card-back.png";

function CardBack() {
  return (
    <div
      className="position-relative"
      style={{ top: "20%", left: "50%", width: "fit-content" }}
    >
      <img src={cardBack} alt="" className="mw-100" />
    </div>
  );
}

export default CardBack;
