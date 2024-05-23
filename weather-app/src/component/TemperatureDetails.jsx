import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import rainy from "../assets/icons/rainy.png";

const TemperatureDetails = () => {
  const details = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "real feel",
      value: "22°",
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "humidity",
      value: "346%",
    },
    {
      id: 3,
      Icon: FiWind,
      value: "11 km/h",
    },
  ];
  const ranges = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: "05:33 AM",
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: "08:33 PM",
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: "37°",
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: "18°",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-around py-6">
        <figure>
          <img src={rainy} alt="rainy icon" className="w-20" />
          <figcaption className="text-center text-xs mt-2">Rainy</figcaption>
        </figure>
        <p className="text-7xl">34°</p>
        <menu className="flex flex-col items-start justify-stretch gap-2">
          {details.map(({ id, Icon, title, value }) => (
            <li
              className="flex justify-center items-center whitespace-normal"
              key={id}
            >
              <Icon size={18} />
              {`${title}:`}&nbsp;
              <span className="font-medium">{value}</span>
            </li>
          ))}
        </menu>
      </div>
      <menu className="flex items-center justify-center py-3 space-x-4 text-sm">
        {ranges.map(({ id, Icon, title, value }) => (
          <li key={id} className="flex items-center">
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
