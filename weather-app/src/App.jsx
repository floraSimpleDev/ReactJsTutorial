import { useState } from "react";
import Header from "./component/Header";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const submitCity = () => {
    setInput("");
  };

  return (
    <div className="w-full h-screen text-white px-8">
      <Header input={input} setInput={setInput} />
    </div>
  );
}

export default App;
