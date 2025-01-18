import { useEffect, useState } from "react";

const useDebounce = (text, delay) => {
  const [debounce, setDebounce] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(text);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return debounce;
};

const DebouncedSearch = () => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 1000);

  return (
    <div>
      <h1>Debounced Search Bar</h1>
      <input
        type="text"
        placeholder="TypeSomething..."
        onChange={(e) => setText(e.target.value)}
      />
      <p>Debounced Value: {debouncedText}</p>
    </div>
  );
};

export default DebouncedSearch;
