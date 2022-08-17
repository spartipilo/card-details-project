import React from "react";
import cardFront from "../images/bg-card-front.png";
import { styles } from "./css/style";

function CardFront({ data }) {
  return (
    <div
      className="position-relative d-flex justify-content-around flex-column"
      style={{
        top: "15%",
        left: "35%",
        height: "245px",
        minWidth: "447px",
        width: "447px",
        backgroundImage: `url(${cardFront})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-100 d-flex align-items-center ms-5 gap-4">
        <div
          className="rounded-circle"
          style={{
            backgroundColor: "#fff",
            width: "60px",
            height: "60px",
          }}
        ></div>
        <div
          className="border border-2 rounded-circle"
          style={{
            width: "30px",
            height: "30px",
          }}
        ></div>
      </div>
      <div className="d-flex justify-content-between flex-column ms-5 gap-3">
        <div className="text-white" style={{ fontSize: "30px" }}>
          {data.cardNumber || "0000 0000 0000 0000"}
        </div>
        <div
          className="d-flex justify-content-between text-white"
          style={{ fontVariant: styles.fontVariant, height: "25px" }}
        >
          <div>{data.fullName}</div>
          <div className="me-5">
            {data.ExpDateMonth
              ? data.ExpDateMonth +
                ((data.ExpDateYears && "/" + data.ExpDateYears) || "")
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFront;
