import { GiRabbit, GiGreenhouse, GiHand, GiIndianPalace } from "react-icons/gi";
import React from "react";

const Icon = () => {
  return (
    <div className="icons d-flex w-90 justify-content-around m-4 p-2 shadow">
      <div className="d-flex justify-content-center align-content-center flex-column m-2 icon-div">
        <div className="icon">
          <GiRabbit />
        </div>
        Cruelty free
      </div>
      <div className="d-flex justify-content-center align-content-center flex-column m-2 icon-div">
        <div className="icon">
          <GiIndianPalace />
        </div>
        Made in India
      </div>
      <div className="d-flex justify-content-center align-content-center flex-column m-2 icon-div">
        <div className="icon">
          <GiHand />
        </div>
        Hand Crafted
      </div>

      <div className="d-flex justify-content-center align-content-center flex-column m-2 icon-div">
        <div className="icon">
          <GiGreenhouse />
        </div>
        Eco-friendly
      </div>
    </div>
  );
};

export default Icon;
