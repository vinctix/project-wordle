import React from "react";

function GuessInput({ onGuess }) {
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
        pattern="[A-Z]{5,5}"
        title="Enter a 5-letter word, using only the letters A-Z"
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        required={true}
      />
    </form>
  );
}

export default GuessInput;
