import React from "react";
import { WORD_LENGTH } from "../../constants";

function GuessInput({ onGuess, disabled }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onGuess(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern={`[A-Z]{${WORD_LENGTH},${WORD_LENGTH}}`}
        title={`Enter a ${WORD_LENGTH}-letter word, using only the letters A-Z`}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        required={true}
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
