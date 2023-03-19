import "./styles.css";
import React, { useState } from "react";
//Requirement 3
function App() {
  const [inputString1, setInputString1] = useState("");
  const [inputString2, setInputString2] = useState("");
  const [uniqueChars, setUniqueChars] = useState([]);
  const [uniqueNumbers, setUniqueNumbers] = useState([]);
  const [uniqueSpecialChars, setUniqueSpecialChars] = useState([]);
  const [charCount, setCharCount] = useState(0);
  const [numCount, setNumCount] = useState(0);
  const [specialCharCount, setSpecialCharCount] = useState(0);

  const handleAdd = () => {
    const combinedString = inputString1 + inputString2;

    const uniqueCharsSet = new Set(combinedString.match(/[a-zA-Z]/g));
    const uniqueCharsArray = [...uniqueCharsSet].sort();

    const uniqueNumbersSet = new Set(combinedString.match(/[0-9]/g));
    const uniqueNumbersArray = [...uniqueNumbersSet].sort((a, b) => a - b);

    const uniqueSpecialCharsSet = new Set(
      combinedString.match(/[^a-zA-Z0-9\s]/g)
    );
    const uniqueSpecialCharsArray = [...uniqueSpecialCharsSet].sort();

    setUniqueChars(uniqueCharsArray);
    setUniqueNumbers(uniqueNumbersArray);
    setUniqueSpecialChars(uniqueSpecialCharsArray);
    setCharCount(uniqueCharsArray.length);
    setNumCount(uniqueNumbersArray.length);
    setSpecialCharCount(uniqueSpecialCharsArray.length);
  };

  const handleChange1 = (event) => {
    setInputString1(event.target.value);
  };

  const handleChange2 = (event) => {
    setInputString2(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="inputString1">Input:</label>
        <input
          type="text"
          id="inputString1"
          value={inputString1}
          onChange={handleChange1}
        />
      </div>
      <div>
        <label htmlFor="inputString2">Input:</label>
        <input
          type="text"
          id="inputString2"
          value={inputString2}
          onChange={handleChange2}
          onBlur={handleAdd}
        />
      </div>
      {/* <button onClick={handleAdd}>Add strings</button> */}
      <div>
        <p>Unique characters: {uniqueChars.join(", ")}</p>
        <p>Unique numbers: {uniqueNumbers.join(", ")}</p>
        <p>Unique special characters: {uniqueSpecialChars.join(", ")}</p>
        <p>Number of unique characters: {charCount}</p>
        <p>Number of unique numbers: {numCount}</p>
        <p>Number of unique special characters: {specialCharCount}</p>
      </div>
    </div>
  );
}

export default App;
