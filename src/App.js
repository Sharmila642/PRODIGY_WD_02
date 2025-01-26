import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = (time % 1000) / 10;
    return (
      `${minutes.toString().padStart(2, "0")}:` +
      `${seconds.toString().padStart(2, "0")}:` +
      `${milliseconds.toString().padStart(2, "0")}`
    );
  };

  return (
    <div className="stopwatch-container">
      <div className="time-display">{formatTime(time)}</div>
      <div className="controls">
        <button
          className="button start-button"
          onClick={() => setIsRunning(true)}
        >
          Start
        </button>
        <button
          className="button stop-button"
          onClick={() => setIsRunning(false)}
        >
          Stop
        </button>
        <button
          className="button reset-button"
          onClick={() => {
            setTime(0);
            setIsRunning(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
