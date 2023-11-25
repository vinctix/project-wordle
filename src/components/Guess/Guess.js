import React from "react";
import { range } from "../../utils";
import { WORD_LENGTH } from "../../constants";

function Guess({ value }) {
  return (
    <p className="guess">
      {range(WORD_LENGTH).map((_, index) => (
        <span key={index} className="cell">
          {value && value[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
