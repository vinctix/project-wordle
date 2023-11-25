import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const handleGuess = (guess) => {
  console.info({ guess });
};

function Game() {
  return (
    <>
      <GuessInput onGuess={handleGuess} />
    </>
  );
}

export default Game;
