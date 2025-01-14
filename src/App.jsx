import { useState } from "react";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import Carousel from "./components/carousel";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import treeNavData from "./components/tree-view/data";

function App() {
  return (
    <>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numStars={10} /> */}
      {/* <Carousel apiUrl={"https://picsum.photos/v2/list"} page={1} limit={10} /> */}
      {/* <LoadMoreData /> */}
      <TreeView items={treeNavData} />
    </>
  );
}

export default App;
