import { useState } from "react";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

function App() {
  return (
    <>
      <Accordian />
      <RandomColor />
      <StarRating numStars={10} />
    </>
  );
}

export default App;
