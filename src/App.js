import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [val, setVal] = useState("");

  const backspace = () => {
    try {
      setVal(val.slice(0, -1));
    } catch (error) {
      setVal("");
    }
  };

  const calculate = () => {
    try {
      setVal(eval(val));
    } catch (error) {
      setVal("Error");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12"></div>
          <h1 className="display-6 fw-bolder">CALCULATOR</h1>
          <hr />
        </div>
      </div>

      <div class="card">
        <div class="card-body text-primary ">
          <input
            type="text"
            placeholder="0"
            className="form"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <div className="button">
            <button
              className="btn"
              value="1"
              onClick={(e) => setVal(val + e.target.value)}
            >
              1{" "}
            </button>
          </div>

          <div className="button">
            <button
              className="btn"
              value="2"
              onClick={(e) => setVal(val + e.target.value)}
            >
              2{" "}
            </button>
          </div>

          <div className="button">
            <button
              className="btn"
              value="3"
              onClick={(e) => setVal(val + e.target.value)}
            >
              3{" "}
            </button>
          </div>

          <div className="button">
            <button className="btn" value="C/E" onClick={() => backspace()}>
              C/E{" "}
            </button>
          </div>

          <div className="button">
            <button
              className="btn"
              value="4"
              onClick={(e) => setVal(val + e.target.value)}
            >
              4{" "}
            </button>
          </div>

          <div className="button">
            <button
              className="btn"
              value="5"
              onClick={(e) => setVal(val + e.target.value)}
            >
              5{" "}
            </button>
          </div>

          <div className="button">
            <button
              className="btn"
              value="6"
              onClick={(e) => setVal(val + e.target.value)}
            >
              6{" "}
            </button>
          </div>

          <div className="button">
            <button
              className="btn"
              value="+"
              onClick={(e) => setVal(val + e.target.value)}
            >
              +{" "}
            </button>
          </div>

          <div className="button">
            <button
              className="btn"
              value="7"
              onClick={(e) => setVal(val + e.target.value)}
            >
              7{" "}
            </button>
          </div>

          <div className="button">
            <button
              className="btn"
              value="8"
              onClick={(e) => setVal(val + e.target.value)}
            >
              8{" "}
            </button>
          </div>

          <div className="button">
            <button
              className="btn"
              value="9"
              onClick={(e) => setVal(val + e.target.value)}
            >
              9{" "}
            </button>
          </div>

          <div className="button">
            <button
              className="btn"
              value="*"
              onClick={(e) => setVal(val + e.target.value)}
            >
              *{" "}
            </button>
          </div>

          <div className="button">
            <button
              className="btn"
              value="."
              onClick={(e) => setVal(val + e.target.value)}
            >
              .{" "}
            </button>
          </div>
          <div className="button">
            <button
              className="btn"
              value="0"
              onClick={(e) => setVal(val + e.target.value)}
            >
              0{" "}
            </button>
          </div>

          <div className="button">
            <button className="btn" value="=" onClick={() => calculate()}>
              {" "}
              ={" "}
            </button>
          </div>

          <div className="button">
            <button
              className="btn"
              value="/"
              onClick={(e) => setVal(val + e.target.value)}
            >
              /{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
