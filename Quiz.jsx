import React, { useState } from "react";

const questions = [
  {
    question: "Which sentence is grammatically correct?",
    options: ["She don't like coffee.", "He go to school.", "They are playing outside.", "I has a car."],
    answer: "They are playing outside."
  },
  {
    question: "Choose the correct verb form: 'She ____ every day.'",
    options: ["go", "goes", "going", "gone"],
    answer: "goes"
  },
  {
    question: "What is the past tense of 'run'?",
    options: ["runned", "ran", "running", "runs"],
    answer: "ran"
  }
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  function handleAnswer(option) {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  }

  if (finished) {
    return (
      <div>
        <h4>Quiz Finished!</h4>
        <p>Your score: {score} / {questions.length}</p>
      </div>
    );
  }

  return (
    <div>
      <p><strong>{questions[current].question}</strong></p>
      {questions[current].options.map((opt, idx) => (
        <div key={idx}>
          <button onClick={() => handleAnswer(opt)}>{opt}</button>
        </div>
      ))}
    </div>
  );
}