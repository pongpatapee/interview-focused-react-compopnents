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
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnChange = (event) => {
    setSearchFruit(
      fruits.filter((fruit) =>
        fruit.toLowerCase().includes(event.target.value.toLowerCase()),
      ),
    );

    setSearchTerm(event.target.value);
  };

  const boldSearchTerm = (fruit) => {
    let includeIdx = fruit.toLowerCase().indexOf(searchTerm.toLowerCase());

    let start = fruit.slice(0, includeIdx);
    let middle = fruit.slice(includeIdx, includeIdx + searchTerm.length);
    let end = fruit.slice(includeIdx + searchTerm.length, fruit.length);

    return (
      <span>
        {start}
        <b>{middle}</b>
        {end}
      </span>
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        onChange={handleOnChange}
      />

      {searchFruits && searchFruits.length ? (
        <ul>
          {searchFruits.map((fruit) => (
            <li>{boldSearchTerm(fruit)}</li>
          ))}
        </ul>
      ) : (
        <p>Your search term does not exist</p>
      )}
    </div>
  );
};

export default SearchBar;
