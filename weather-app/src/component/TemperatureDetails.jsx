import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
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

const TemperatureDetails = ({
  weather: {
    details,
    image,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
  units,
}) => {
  const situations = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "real feel",
      value: `${feels_like.toFixed()}°`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "humidity",
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      Icon: FiWind,
      value: `${speed.toFixed()} ${units === "metric" ? "km/h" : "m/s"}`,
    },
  ];
  const ranges = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "sunrise",
      value: sunrise,
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "sunset",
      value: sunset,
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "high",
      value: `${temp_max.toFixed()}°`,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "low",
      value: `${temp_min.toFixed()}°`,
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-around py-3">
        <figure>
          <img src={image} alt="rainy icon" className="w-20 bg-none" />
          <figcaption className="text-center text-xs mt-2">
            {details}
          </figcaption>
        </figure>
        <p className="text-7xl">{`${temp.toFixed()}°`}</p>
        <menu className="flex flex-col items-start justify-stretch gap-2 text-xs">
          {situations.map(({ id, Icon, title, value }) => (
            <li
              className="capitalize flex justify-center items-center whitespace-normal"
              key={id}
            >
              <Icon size={18} />
              {`${title}:`}&nbsp;
              <span className="font-medium lowercase">{value}</span>
            </li>
          ))}
        </menu>
      </div>
      <menu className="flex items-center justify-center py-2 space-x-4 text-xs">
        {ranges.map(({ id, Icon, title, value }) => (
          <li key={id} className="capitalize flex items-center">
            <Icon size={26} />
            <p className="font-light ml-1">
              {`${title}:`}&nbsp;
              <span className="font-medium ml-1">{value}</span>
            </p>
          </li>
        ))}
      </menu>
    </div>
  );
};

export default TemperatureDetails;
