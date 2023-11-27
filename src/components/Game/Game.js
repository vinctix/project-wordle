import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import SuccessBanner from "../SuccessBanner";
import FailedBanner from "../FailedBanner";

function Game() {
  const [answer, setAnswer] = React.useState(() => {
    const answer = sample(WORDS);

    // Pick a random word on every pageload.
    // To make debugging easier, we'll log the solution in the console.
    console.info({ answer });
    return answer;
  });
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState("running");

  const finished = status !== "running";
  const isWon = status === "won";
  const isLost = status === "lost";

  const handleGuess = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setStatus("won");
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
    }
  };

  const handleRestart = () => {
    setGuesses([]);
    setStatus("running");

    const nextAnswer = sample(WORDS);
    console.info({ answer: nextAnswer });
    setAnswer(nextAnswer);
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />

      <GuessInput onGuess={handleGuess} disabled={finished} />

      {isWon && (
        <SuccessBanner count={guesses.length} onRestart={handleRestart} />
      )}
      {isLost && <FailedBanner answer={answer} onRestart={handleRestart} />}
    </>
  );
}

export default Game;
