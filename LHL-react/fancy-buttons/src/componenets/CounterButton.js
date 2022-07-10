import { useState } from "react";

function CounterButton(props) {
  const [clickAmount, setClickAmount] = useState(0);
  const setOnClick = () => {
    setClickAmount(clickAmount + 1);
  };

  return (
    <button className="CounterButton" onClick={setOnClick}>
      You clicked me {clickAmount} times
    </button>
  );
}

export default CounterButton;
