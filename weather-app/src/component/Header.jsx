import { useState } from "react";
import search from "./assets/icons/search.svg";

const Header = () => {
  return (
    <nav className="w-full p-3 flex justify-between items-center">
      <h1 className="w-full p-3 flex tracking-wide text-3xl font-bold ">
        Weather App
      </h1>
      <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
        <img
          src={search}
          alt="search button"
          className="w-[1.5rem] h-[1.5rem]"
        />
        <input
          type="text"
          placeholder="Search city"
          className="focus:outline-none w-full text-[#212121] text-lg"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyUp={(event) => {
            if (event.key === "Enter")
              console.log("submit city"); /* submitCity() */
          }}
        />
      </div>
    </nav>
  );
};

export default Header;
