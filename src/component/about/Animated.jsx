import React, { useEffect } from "react";
import Typed from "typed.js";
import "typed.js";

const AnimatedWord = () => {
  useEffect(() => {
    // Initialize Typed.js
    const options = {
      strings: ["Frontend Developer", "UI/UX Developer"],
      typeSpeed: 100, // typing speed in milliseconds
      backSpeed: 50, // backspacing speed in milliseconds
      loop: true, // loop the animation
    };

    const typed = new Typed("#typed-output", options);

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <h3 style={{ display: "inline-block" }}>
      <span id="typed-output"></span>
    </h3>
  );
};

export default AnimatedWord;
