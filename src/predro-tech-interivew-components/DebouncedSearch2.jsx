import { useEffect, useState } from "react";

const debounce = (callback, delay) => {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(args);
    }, delay);
  };
};

const DebouncedSearch2 = () => {
  const [text, setText] = useState("");

  const debounceSetText = debounce(setText, 1000);

  return (
    <div>
      <h1>Debounced Search Bar</h1>
      <input
        type="text"
        placeholder="TypeSomething..."
        onChange={(e) => debounceSetText(e.target.value)}
      />
      <p>Debounced Value: {text}</p>
    </div>
  );
};

export default DebouncedSearch2;
