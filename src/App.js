import React from "react";
import "./App.css";
import Nav from "./Nav";
import TimeCards from "./TimeCards";
import { useState } from "react";

function App() {
  const [timeframe, setTimeframe] = useState("daily");

  function updateTime(time) {
    setTimeframe(time);
  }
  return (
    <div className="flex">
      <Nav timeframe={timeframe} updateTime={updateTime} />
      <TimeCards timeframe={timeframe} />
    </div>
  );
}

export default App;
