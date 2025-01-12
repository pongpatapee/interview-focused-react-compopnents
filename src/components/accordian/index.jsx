import { useState } from "react";
import data from "./data";
import "./style.css";

// Two different types of Accordian
// 1. Single Select
// 2. Multi Select

const AccordianItem = ({
  id,
  question,
  answer,
  enableMultiSelect,
  selectedId,
  multiSelect,
  selectHandler,
}) => {
  const isSingleSelect = id === selectedId;
  const isMultiSelect = multiSelect.includes(id);
  const isSelected = enableMultiSelect ? isMultiSelect : isSingleSelect;

  return (
    <div className="accordianItem">
      <div className="title" onClick={() => selectHandler(id)}>
        <h3>{question}</h3>
        <span>+</span>
      </div>
      {isSelected ? <div>{answer}</div> : null}
    </div>
  );
};

const Accordian = () => {
  const [selected, setSelected] = useState();
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);

  const handleSingleSelect = (itemId) => {
    setSelected(itemId === selected ? null : itemId);
  };

  const handleMultiSelect = (itemId) => {
    if (!multiSelect.includes(itemId)) {
      setMultiSelect([...multiSelect, itemId]);
    } else {
      setMultiSelect(multiSelect.filter((a) => a != itemId));
    }
  };

  // resets state when switching between modes
  const handleEnableMultiSelect = () => {
    if (enableMultiSelect) {
      setMultiSelect([]);
    } else {
      setSelected(null);
    }

    setEnableMultiSelect(!enableMultiSelect);
  };

  return (
    <div className="wrapper">
      <button onClick={handleEnableMultiSelect}>Enable MultiSelect</button>

      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <AccordianItem
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              enableMultiSelect={enableMultiSelect}
              selectedId={selected}
              multiSelect={multiSelect}
              selectHandler={
                enableMultiSelect ? handleMultiSelect : handleSingleSelect
              }
            />
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
