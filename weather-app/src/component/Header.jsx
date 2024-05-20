import { useState } from "react";
import search from "../assets/icons/search.svg";
import { IoMdLocate } from "react-icons/io";
import { BiSearch } from "react-icons/bi";

const Header = ({ input, setInput }) => {
  const inputChange = (event) => {
    setInput(event.target.value);
  };

  const keyUpChange = (event) => {
    if (event.key === "Enter") console.log("submit city");
  };

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
            value={input}
            onChange={inputChange}
            onKeyUp={keyUpChange /* submitCity() */}
          />
        </div>
        <BiSearch
          size={30}
          className="hover:scale-125 cursor-pointer transition ease-out"
        />

        <IoMdLocate
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125"
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
