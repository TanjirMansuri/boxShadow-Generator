import "./App.css";
import React, { useState } from "react";

function App() {
  const [hori, setHori] = useState(10);
  const [ver, setVer] = useState(10);
  const [blur, setBlur] = useState(10);
  const [clr, setClr] = useState("#000000");
  const [chkOn, setChkOn] = useState(false);

  const hex2rgba = (hex, alpha = 1) => {
    const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  };

  return (
    <>
      <div className="heading">
        <h1>You Can Create box-shadow And Copy CSS Code</h1>
      </div>
      <div className="App">
        <div className="controls">
          <label>Horizontal Lenght</label>
          <input type="range" value={hori} onChange={(e) => setHori(e.target.value)} min="-200" max="200" />

          <label>Vertical Lenght</label>
          <input type="range" value={ver} onChange={(e) => setVer(e.target.value)} min="-200" max="200" />

          <label>Blur </label>
          <input type="range" value={blur} onChange={(e) => setBlur(e.target.value)} min="0" max="200" />

          <label>Color </label>
          <input type="color" value={clr} onChange={(e) => setClr(e.target.value)} />

          <div className="switch">
            <label>
              Outline
              <input type="checkbox" checked={chkOn} onChange={() => setChkOn(!chkOn)} />
              <span className="lever"></span>
              Inset
            </label>
          </div>
        </div>
        <div className="output">
          <div className="box" style={{ boxShadow: `${chkOn ? "inset" : ""} ${hori}px ${ver}px ${blur}px ${hex2rgba(clr, 0.5)}` }}>
            <p>
              box-shadow:{hori}px {ver}px {blur}px {hex2rgba(clr, 0.5)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
