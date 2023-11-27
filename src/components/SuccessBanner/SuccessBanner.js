import React from "react";
import Banner from "../Banner";

function SuccessBanner({ count }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{count} guesses</strong>.
      </p>
    </Banner>
  );
}

export default SuccessBanner;
