import { useState, useEffect } from "react";

export const useDate = () => {
  const [today, setDate] = useState(new Date());
  const locale = "en-AU";

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()}, ${today.toLocaleDateString(locale, {
    month: "long",
  })}\n\n`;
  const time = today.toLocaleDateString(locale, {
    hour: "numeric",
    hourCycle: "h24",
    minute: "numeric",
  });

  return { date, time };
};
