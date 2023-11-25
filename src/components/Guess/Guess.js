import React from "react";
import { range } from "../../utils";
import { WORD_LENGTH } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const wordStatus = value && checkGuess(value, answer);

  return (
    <p className="guess">
      {range(WORD_LENGTH).map((_, index) => (
        <Cell key={index} {...(wordStatus ? wordStatus[index] : {})} />
      ))}
    </p>
  );
}

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{letter}</span>;
}

export default Guess;
