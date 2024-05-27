import { useState } from "react";
import Header from "./component/Header";
import TimeAndLocation from "./component/TimeAndLocation";
import TemperatureDetails from "./component/TemperatureDetails";
import Forecast from "./component/Forecast";
import weatherData from "./services/weatherForecastService";

import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const getWeather = async () => {
    const data = await weatherData({ q: "sydney" });
    console.log(data);
  };
  getWeather();

  return (
    <div className="w-full h-screen text-white px-8">
      <Header input={input} setInput={setInput} />
      <section className="flex justify-center items-center w-full">
        <div className="w-[35rem] h-[80vh] min-h-[50vh] min-w-[25rem] shadow-lg bg-[#E1E1E1] backdrop-blur bg-opacity-20 overflow-hidden mt-6 border-stone-200 border-2 rounded-lg border-opacity-50">
          <TimeAndLocation />
          <TemperatureDetails />
          <Forecast />
        </div>
      </section>
    </div>
  );
}

export default App;
