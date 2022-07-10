import "./App.css";
import { useState } from "react";
import AngryButton from "./componenets/AngryButton";
import CounterButton from "./componenets/CounterButton";
import LightSwitchButton from "./componenets/LightSwitchButton";
import TextRepeaterButton from "./componenets/TextRepeaterButton";

function App() {
  const [light, setLight] = useState("off");
  const dark = light === "off" ? "dark" : "";
  const switchLight = () => setLight(light === "on" ? "off" : "on");
  return (
    <div className={`App ${dark}`}>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton light={light} switchLight={switchLight} />
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
