import { useState } from "react";
import Header from "./component/Header";
import TimeAndLocation from "./component/TimeAndLocation";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="w-full h-screen text-white px-8">
      <Header input={input} setInput={setInput} />
      <section className="flex justify-center items-center w-full">
        <TimeAndLocation />
      </section>
    </div>
  );
}

export default App;
