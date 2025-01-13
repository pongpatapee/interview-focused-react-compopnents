import { useEffect, useState } from "react";

const RandomColor = () => {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const hexVals = "0123456789ABCDEF";

  const randInt = (end) => {
    return Math.floor(Math.random() * end);
  };

  const handleGenerateRandomHex = () => {
    let hex = "#";

    for (let i = 0; i < 6; i++) {
      let randIdx = randInt(hexVals.length);
      hex += hexVals[randIdx];
    }

    setColor(hex);
  };

  const handleGenerateRandomRgb = () => {
    let r = randInt(256);
    let g = randInt(256);
    let b = randInt(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    // instead of generating new color
    // can do conversion between hex and rgb values
    if (colorType === "hex") {
      handleGenerateRandomHex();
    } else {
      handleGenerateRandomRgb();
    }
  }, [colorType]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: color,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button onClick={() => setColorType("hex")}>HEX Mode</button>
        <button onClick={() => setColorType("rgb")}>RGB Mode</button>
        <button
          onClick={
            colorType === "hex"
              ? handleGenerateRandomHex
              : handleGenerateRandomRgb
          }
        >
          Generate Random Color
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{colorType === "hex" ? "HEX" : "RGB"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
