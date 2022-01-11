import React, { useState, useEffect } from "react";

function InputTime() {
  const [inputValue, setInputValue] = useState(0);

  function handleInput(input) {
    setInputValue(input);
  }
  function startTime() {
    setCountdown(inputValue);
  }
  const [countdown, setCountdown] = useState(0);
  useEffect(() => {
    const timer =
      countdown > 0 && setInterval(() => setCountdown(countdown - 1), 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <div>
      <p id="timer-display">{countdown}</p>
      <input
        value={inputValue}
        type="Number"
        placeholder="enter numbers of seconds"
        onChange={(e) => {
          handleInput(e.target.value);
        }}
      ></input>
      <button id="start-button" onClick={startTime}>
        start
      </button>
    </div>
  );
}

export default InputTime;
