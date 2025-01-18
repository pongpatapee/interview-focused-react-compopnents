import { useState } from "react";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import Carousel from "./components/carousel";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import treeNavData from "./components/tree-view/data";
import MyThemedComponent from "./my-components/theme-switcher";
import { ThemeProvider } from "./my-components/theme-switcher/themeContext";
import SearchBar from "./predro-tech-interivew-components/SearchBar";
import DebouncedSearch from "./predro-tech-interivew-components/DebouncedSearch";
import PhoneNumberInput from "./predro-tech-interivew-components/PhoneNumberInput";
import DebouncedSearch2 from "./predro-tech-interivew-components/DebouncedSearch2";

function App() {
  return (
    <>
      {/* <Accordian /> */}

      {/* <RandomColor /> */}

      {/* <StarRating numStars={10} /> */}

      {/* <Carousel apiUrl={"https://picsum.photos/v2/list"} page={1} limit={10} /> */}

      {/* <LoadMoreData /> */}

      {/* <TreeView items={treeNavData} /> */}

      {/* <ThemeProvider> */}
      {/*   <MyThemedComponent /> */}
      {/* </ThemeProvider> */}

      {/* <SearchBar /> */}

      {/* <DebouncedSearch /> */}
      <DebouncedSearch2 />

      {/* <PhoneNumberInput /> */}
    </>
  );
}

export default App;
