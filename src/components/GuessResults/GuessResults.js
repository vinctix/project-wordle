import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess";

function GuessResults({ guesses }) {
  const [guessKeyes] = React.useState(
    range(NUM_OF_GUESSES_ALLOWED).map(() => crypto.randomUUID())
  );

  return (
    <div className="guess-results">
      {guessKeyes.map((key, index) => (
        <Guess key={key} value={guesses.at(index)} />
      ))}
    </div>
  );
}

export default GuessResults;
