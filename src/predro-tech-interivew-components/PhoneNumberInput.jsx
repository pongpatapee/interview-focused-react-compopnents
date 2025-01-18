import { useState } from "react";

const PhoneNumberInput = ({ maxLength = 10 }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleOnChange = (e) => {
    let numVal = e.target.value.replace(/[^0-9]/g, "");
    if (numVal.length > maxLength) return;

    if (numVal.length > 6) {
      numVal = `(${numVal.slice(0, 3)})${numVal.slice(3, 6)}-${numVal.slice(6)}`;
    } else if (numVal.length > 3) {
      numVal = `(${numVal.slice(0, 3)})${numVal.slice(3)}`;
    }

    setPhoneNumber(numVal);
  };

  return (
    <div>
      <h1>Phone Number Input</h1>
      <input
        type="text"
        placeholder="enter phone number"
        onChange={handleOnChange}
        value={phoneNumber}
      />
    </div>
  );
};

export default PhoneNumberInput;
