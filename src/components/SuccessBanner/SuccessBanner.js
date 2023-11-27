import React from "react";
import Banner from "../Banner";

function SuccessBanner({ count, onRestart }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{count} guesses</strong>.
      </p>
      <button onClick={onRestart}>New game</button>
    </Banner>
  );
}

export default SuccessBanner;
