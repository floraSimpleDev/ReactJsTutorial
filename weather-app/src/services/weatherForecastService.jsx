import { DateTime } from "luxon";
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

const API_KEY = "41e0a807acc318d0c5c0275f120b54b7";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const weatherTypes = [
  { type: "Clear", img: Clear },
  { type: "Clouds", img: Clouds },
  { type: "Drizzle", img: Drizzle },
  { type: "Ash", img: Ash },
  { type: "Dust", img: Dust },
  { type: "Fog", img: Fog },
  { type: "Haze", img: Haze },
  { type: "Mist", img: Mist },
  { type: "Rain", img: Rain },
  { type: "Sand", img: Sand },
  { type: "Smoke", img: Smoke },
  { type: "Snow", img: Snow },
  { type: "Squall", img: Squall },
  { type: "Thunderstorm", img: Thunderstorm },
  { type: "Tornado", img: Tornado },
];

//fetch weather condition data from openweather api
const fetchWeather = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((response) => response.json());
};

//epoch time converter
const toLocalTime = (
  seconds,
  offset,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
  return DateTime.fromSeconds(seconds + offset, { zone: "utc" }).toFormat(
    format
  );
};

//acquir the icon name
const iconName = (details) => {
  return weatherTypes.filter((weather) => weather.type === details);
};

//set up standard weather data format
const filterData = (data) => {
  const {
    coord: { lon, lat },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;

  const { main: details } = weather[0];
  const localTime = toLocalTime(dt, timezone);
  const { type, img: image } = iconName(details)[0];

  return {
    lon,
    lat,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    country,
    sunrise: toLocalTime(sunrise, timezone, "hh:mm a"),
    sunset: toLocalTime(sunset, timezone, "hh:mm a"),
    speed,
    details,
    type,
    image,
    localTime,
    dt,
    timezone,
  };
};

//format the forecast weather data
const filterForecast = (seconds, offset, dataList) => {
  //hourly forecast
  const hourly = dataList
    .filter((data) => data.dt > seconds)
    .slice(0, 5)
    .map((data) => ({
      temp: data.main.temp,
      title: toLocalTime(data.dt, offset, "hh:mm a"),
      image: iconName(data.weather[0].main)[0].img,
      date: data.dt_txt,
    }));

  //daily forecast
  const daily = dataList
    .filter((data) => data.dt_txt.slice(-8) === "00:00:00")
    .map((data) => ({
      temp: data.main.temp,
      title: toLocalTime(data.dt, offset, "ccc"),
      image: iconName(data.weather[0].main)[0].img,
      date: data.dt_txt,
    }));

  return { hourly, daily };
};

const weatherData = async (searchParams) => {
  const filtered = await fetchWeather("weather", searchParams)
    .then(filterData)
    .catch((error) => {
      console.log(error);
    });

  const { lon, lat, dt, timezone } = filtered;

  //forecast future weather
  const forecastWeather = await fetchWeather("forecast", {
    lon,
    lat,
    units: searchParams.units,
  })
    .then((data) => filterForecast(dt, timezone, data.list))
    .catch((error) => {
      console.log(error);
    });

  return { ...filtered, ...forecastWeather };
};

export default weatherData;
