import React, { useRef, useState } from "react";

export default function FocusInput() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const renderCount = useRef(0);

  renderCount.current = renderCount.current + 1;

  const focusInput = () => {
    if (inputRef) {
      inputRef.current.focus();
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Focusable Input</h1>
      <p>Render Count: {renderCount.current}</p>
      <input
        type="text"
        placeholder="Type something here..."
        value={inputValue}
        onChange={handleChange}
        ref={inputRef}
      />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
