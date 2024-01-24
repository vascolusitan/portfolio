import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Fullstack Developer",
          "Mainly Backend",
          "So Don't Open This Page Src Code",
          "PLEASE...",
          "Thank You :)"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
