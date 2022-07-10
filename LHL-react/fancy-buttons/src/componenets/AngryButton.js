import { useState } from "react";

function AngryButton(props) {
  const [anger, setAnger] = useState(0);

  const setOnClick = () => {
    setAnger(anger + 0.1);
  };
  return (
    <button
      style={{ backgroundColor: `rgba(255,0,0,${anger})` }}
      className="AngryButton"
      onClick={setOnClick}
    >
      {anger < 1 && <span>Don't click me too much! </span>}
      {anger > 1 && <span>Rawr!</span>}
    </button>
  );
}

export default AngryButton;
