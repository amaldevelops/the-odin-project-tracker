import React, { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const [currentColorChangeCount, setcurrentColorChangeCount] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setcurrentColorChangeCount(currentColorChangeCount + 1);
    console.log(currentColorChangeCount);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
      <div>
        <h1>
          Number of times the background color has been changed on the page is:{" "}
          <span>{currentColorChangeCount}</span>
        </h1>
      </div>
    </div>
  );
}

export default App;
