import React from "react";

const TimeAndLocation = () => {
  return (
    <div className="w-[35%] h-[80vh] min-h-[50vh] bg-stone-400/75 overflow-hidden mt-6 border-stone-200 border-2 rounded-lg border-opacity-50">
      <div className="flex justify-center items-center my-6">
        <p className="text-xl">Tuesday, 21 May 2024 | Local time 15:25 PM</p>
      </div>
      <div className="flex justify-center items-center my-6">
        <p className="text-xl">Sydney, AU</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
