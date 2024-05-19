import { useContext, createContext, useState, useEffect } from "react";

const StateContext = createContext();

export const StateContextProvider = () => {
  const [weather, setWeather] = useState("");
};
