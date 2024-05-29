import React from "react";

const TimeAndLocation = ({ weather: { localTime, name, country } }) => {
  return (
    <div>
      <div className="flex justify-center items-center my-5">
        <p className="text-xl">{localTime}</p>
      </div>
      <div className="flex justify-center items-center my-2">
        <p className="text-xl">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
