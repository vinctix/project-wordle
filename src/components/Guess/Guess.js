import React from "react";
import { range } from "../../utils";
import { WORD_LENGTH } from "../../constants";
import { checkGuess } from "../../game-helpers";
import { answer } from "../Game/Game";

function Guess({ value }) {
  const wordStatus = value && checkGuess(value, answer);

  const classNames = range(WORD_LENGTH).map((_, index) => {
    const letterStatus = wordStatus?.at(index)?.status;

    if (!letterStatus) {
      return "cell";
    }
    return `cell ${letterStatus}`;
  });

  return (
    <p className="guess">
      {classNames.map((_, index) => (
        <span key={index} className={classNames[index]}>
          {value?.at(index)}
        </span>
      ))}
    </p>
  );
}

export default Guess;
