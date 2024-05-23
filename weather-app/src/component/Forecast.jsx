import React from "react";
import rainy from "../assets/icons/rainy.png";

const Forecast = () => {
  const datas = [1, 2, 3, 4, 5];
  return (
    <div className="mx-6">
      <div className="flex items-center justify-start mt-6">
        <p className="font-medium uppercase">3 hours step forecast</p>
      </div>
      <hr className="my-2" />
      <menu className="flex justify-between items-center mt-5 px-3">
        {datas.map((data, index) => (
          <li key={index} className="flex-col items-center justify-center">
            <p className="text-center text-sm">Wed</p>
            <img src={rainy} className="w-10 my-1" alt="weather icon" />
            <p className="font-medium text-center">12°</p>
          </li>
        ))}
      </menu>
    </div>
  );
};

export default Forecast;
