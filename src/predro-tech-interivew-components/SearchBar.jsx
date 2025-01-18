import { useState } from "react";

const SearchBar = () => {
  const fruits = [
    "Apple",
    "Apricot",
    "Banana",
    "Blueberry",
    "Cherry",
    "Cranberry",
    "Date",
    "Dragonfruit",
    "Elderberry",
    "Fig",
    "Grape",
    "Grapefruit",
  ];

  const [searchFruits, setSearchFruit] = useState([...fruits]);

  const handleOnChange = (event) => {
    setSearchFruit(
      fruits.filter((fruit) =>
        fruit.toLowerCase().startsWith(event.target.value.toLowerCase()),
      ),
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        onChange={handleOnChange}
      />

      <ul>
        {searchFruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
