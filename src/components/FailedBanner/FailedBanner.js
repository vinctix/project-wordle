import React from "react";

import Banner from "../Banner";

function FailedBanner({ answer, onRestart }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={onRestart}>New game</button>
    </Banner>
  );
}

export default FailedBanner;
