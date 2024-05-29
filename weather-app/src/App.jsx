import { useState, useEffect } from "react";
import Header from "./component/Header";
import TimeAndLocation from "./component/TimeAndLocation";
import TemperatureDetails from "./component/TemperatureDetails";
import Forecast from "./component/Forecast";
import weatherData from "./services/weatherForecastService";
import background from "./component/BackgroundLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [query, setQuery] = useState({ q: "" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const getWeather = async () => {
    const cityName = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${capitalize(cityName)}`);

    await weatherData({ ...query, units })
      .then((data) => {
        setWeather(data);
        toast.success(`Fetched weather data for ${data.name}, ${data.country}`);
      })
      .catch((error) => {
        console.log(error);
      });
    //console.log(data);
  };
  useEffect(() => {
    getWeather();
  }, [query, units]);

  const backgroundParams = background({ weather });

  return (
    <div
      className={`w-full h-screen text-white px-8 bg-gradient-to-t ${backgroundParams}`}
    >
      <Header setQuery={setQuery} setUnits={setUnits} />
      <section className="flex justify-center items-center w-full">
        <div className="w-[35rem] h-[83vh] min-h-[50vh] min-w-[25rem] shadow-lg bg-[#E1E1E1] backdrop-blur bg-opacity-20 overflow-hidden mt-3 border-stone-200 border-2 rounded-lg border-opacity-50">
          {weather && (
            <>
              <TimeAndLocation weather={weather} />
              <TemperatureDetails weather={weather} units={units} />
              <Forecast
                title="3 hours step forecast"
                dataset={weather.hourly}
              />
              <Forecast title="daily forecast" dataset={weather.daily} />
            </>
          )}

          <ToastContainer
            autoClose={2500}
            hideProgressBar={true}
            theme="colored"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
