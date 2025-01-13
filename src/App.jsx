import { useState } from "react";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import Carousel from "./components/carousel";

function App() {
  return (
    <>
      <Accordian />
      <RandomColor />
      <StarRating numStars={10} />
      <Carousel apiUrl={"https://picsum.photos/v2/list"} page={1} limit={10} />
    </>
  );
}

export default App;
