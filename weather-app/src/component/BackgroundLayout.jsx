import React from "react";

const colors = {
  Ash: "from-[#9890e3] to-[#b1f4cf]",
  Clear: "from-[#4facfe] to-[#00f2fe]",
  Clouds: "from-[#89f7fe] to-[#66a6ff]",
  Drizzle: "from-[#2af598] to-[#009efd]",
  Dust: "from-[#ebbba7] to-[#cfc7f8]",
  Fog: "from-[#6a85b6] to-[#c2e9fb]",
  Haze: "from-[#e6b980] to-[#FFA99F]",
  Mist: "from-[#65379B] to-[#886AEA]",
  Rain: "from-[#9795f0] to-[#fbc8d4]",
  Sand: "from-[#ebbba7] to-[#cfc7f8]",
  Smoke: "from-[#d5dee7] to-[#ffafbd]",
  Snow: "from-[#2CD8D5] to-[#C5C1FF]",
  Squall: "from-[#a18cd1] to-[#fbc2eb]",
  Thunderstorm: "from-[#A8BFFF] to-[#884D80]",
  Tornado: "from-[#e4efe9] to-[#6e45e2]",
};

const background = ({ weather }) => {
  return weather ? colors[weather.details] : "from-[#ffecd2] to-[#fcb69f]";
};

export default background;
