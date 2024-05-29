import React from "react";
import Ash from "../assets/icons/Ash.svg";
import Clear from "../assets/icons/Clear.png";
import Clouds from "../assets/icons/Clouds.png";
import Drizzle from "../assets/icons/Drizzle.png";
import Dust from "../assets/icons/Dust.svg";
import Fog from "../assets/icons/Fog.png";
import Haze from "../assets/icons/Haze.svg";
import Mist from "../assets/icons/Mist.png";
import Rain from "../assets/icons/Rain.png";
import Sand from "../assets/icons/Sand.svg";
import Smoke from "../assets/icons/Smoke.png";
import Snow from "../assets/icons/Snow.png";
import Squall from "../assets/icons/Squall.png";
import Thunderstorm from "../assets/icons/Thunderstorm.png";
import Tornado from "../assets/icons/Tornado.png";

const Forecast = ({ title, dataset }) => {
  return (
    <div className="mx-6">
      <div className="flex items-center justify-start mt-4">
        <p className="font-medium uppercase">{title}</p>
      </div>
      <hr className="my-1" />
      <menu className="flex justify-between items-center mt-3 px-3">
        {dataset.map((data, index) => (
          <li key={index} className="flex-col items-center justify-center">
            <p className="text-center text-sm">{data.title}</p>
            <img src={data.image} className="w-10" alt="weather icon" />
            <p className="font-medium text-center">{`${data.temp.toFixed()}°`}</p>
          </li>
        ))}
      </menu>
    </div>
  );
};

export default Forecast;
