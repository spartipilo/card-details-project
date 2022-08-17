import React, { useState } from "react";
import bgDesktop from "./images/bg-main-desktop.png";
import Form from "./components/Form";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";

const App = () => {
  const [data, setData] = useState({
    fullName: "",
    cardNumber: 0,
    ExpDateMonth: 0,
    ExpDateYers: 0,
    cvc: 0,
  });

  const getData = (_data, _value) => {
    setData({ ...data, [_data]: _value });
  };

  return (
    <div className="row g-0 position-relative">
      <div
        className="col-4"
        style={{
          background: `url(${bgDesktop})`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <CardFront data={data} />
        <CardBack />
      </div>
      <div className="col">
        <Form getData={getData} />
      </div>
    </div>
  );
};

export default App;
