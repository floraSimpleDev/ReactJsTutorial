import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [celsius, setCelsius] = useState([]);
  const [city, setCity] = useState("Sydney");
  const [locate, setLocate] = useState("");

  //fetch API
  const fetchWeather = async () => {
    return (
      <StateContextProvider value={{ weather, setCity, celsius, locate, city }}>
        {children}
      </StateContextProvider>
    );
  };
};

export const useStateContext = () => useContext(StateContext);
