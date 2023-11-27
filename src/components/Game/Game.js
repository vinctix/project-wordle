import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import SuccessBanner from "../SuccessBanner";
import FailedBanner from "../FailedBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
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

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />

      <GuessInput onGuess={handleGuess} disabled={finished} />

      {isWon && <SuccessBanner count={guesses.length} />}
      {isLost && <FailedBanner answer={answer} />}
    </>
  );
}

export default Game;
