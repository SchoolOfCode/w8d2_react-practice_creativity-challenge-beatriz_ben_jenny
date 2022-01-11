import React, {useState} from "react";

function InputTime() {
  const [inputValue, setInputValue] = useState(0);

  function handleInput(input) {
    setInputValue(input);
  }
function startTime(time) {

    
}


  return (
    <div>
      <input
        value={inputValue}
        type="Number"
        placeholder="enter numbers of seconds"
        onChange={(e) => {
          handleInput(e.target.value);
        }}
      ></input>
      <button onClick={startTime}>start</button>
    </div>
  );
}

export default InputTime;
