import React, { useState } from "react";
import Quiz from "./components/Quiz";

export default function App() {
  const [country, setCountry] = useState("Brazil");
  const [progress, setProgress] = useState(50);

  return (
    <div className="container">
      <h1>🌍 World Hopper Game</h1>
      <h2>Current Country: {country}</h2>
      <p>Progress: {progress}%</p>

      {progress >= 50 ? (
        <>
          <h3>🎓 Level 4 Grammar Quiz</h3>
          <Quiz />
        </>
      ) : (
        <p>Unlock this level by completing more activities.</p>
      )}
    </div>
  );
}