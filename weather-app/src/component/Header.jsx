import { useState } from "react";
import { IoMdLocate } from "react-icons/io";
import { BiSearch } from "react-icons/bi";

const Header = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");

  const inputChange = (event) => {
    setCity(event.target.value);
  };

  const searchOnClick = () => {
    if (city) setQuery({ q: city });
  };

  const searchOnKeyUp = (event) => {
    if (event.key === "Enter") setQuery({ q: city });
  };

  const locateOnClick = () => {};

  return (
    <nav className="w-full p-3 flex justify-between items-center flex-wrap">
      <h1 className="w-1/2 p-3 flex tracking-wide text-3xl font-bold text-nowrap">
        Weather App
      </h1>
      <div className="flex items-center w-1/2 space-x-3">
        <div className="bg-white w-1/2 overflow-hidden shadow-md rounded flex items-center p-2">
          <input
            type="text"
            placeholder="search city"
            className="focus:outline-none w-full text-[#212121] text-lg"
            value={city}
            onChange={inputChange}
            onKeyUp={searchOnKeyUp}
          />
        </div>
        <BiSearch
          size={30}
          className="hover:scale-125 cursor-pointer transition ease-out"
          onClick={searchOnClick}
        />

        <IoMdLocate
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125"
          onClick={locateOnClick}
        />

        <div className="flex flex-row w-1/4 items-center justify-center">
          <button className="text-2xl font-medium transition ease-out hover:scale-125">
            °C
          </button>
          <p className="text-2xl font-medium mx-1">|</p>
          <button className="text-2xl font-medium transition ease-out hover:scale-125">
            °F
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
