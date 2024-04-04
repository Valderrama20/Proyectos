import { useState } from "react";
import * as math from "mathjs";
import style from "./App.module.css";

function App() {
  let [result, setResult] = useState(0);
  let [operation, setOperation] = useState("");

  let onClick = (e) => {
    let value = e.target.value;
    operation.length >= 15
      ? alert("Se supero el numero maximo de dijitos (15)")
      : setOperation(operation + value);
  };

  let calculateOperation = () => {
    try {
      let result = math.evaluate(operation);
      Number.isInteger(result)
        ? setResult(result)
        : setResult(result.toFixed(2));
    } catch (error) {
      alert("Verifica tu cuenta, hay un error");
    }
  };

  let clearResult = () => {
    setResult(0);
    setOperation("");
  };
  let back = () => {
    if (operation.length) {
      setOperation(operation.substring(0, operation.length - 1));
    }
  };

  const buttonsData = [
    { label: "C", onClick: clearResult, className: style.clear },
    { label: "%", onClick: onClick, value: "%", className: style.orenge },
    { label: "/", onClick: onClick, value: "/", className: style.orenge },
    { label: "x", onClick: onClick, value: "*", className: style.orenge },
    { label: "1", onClick: onClick, value: "1" },
    { label: "2", onClick: onClick, value: "2" },
    { label: "3", onClick: onClick, value: "3" },
    { label: "+", onClick: onClick, value: "+", className: style.orenge },
    { label: "4", onClick: onClick, value: "4" },
    { label: "5", onClick: onClick, value: "5" },
    { label: "6", onClick: onClick, value: "6" },
    { label: "-", onClick: onClick, value: "-", className: style.orenge },
    { label: "7", onClick: onClick, value: "7" },
    { label: "8", onClick: onClick, value: "8" },
    { label: "9", onClick: onClick, value: "9" },
    { label: "=", onClick: calculateOperation, value: "=", className: style.igual },
    { label: "🡰", onClick: back, className: style.back },
    { label: "0", onClick: onClick, value: "0" },
    { label: ".", onClick: onClick, value: "." },
  ];

  return (
    <div className={style.container}>
      <div className={style.calculator}>
        <div className={style.resultContainer}>
          <label className={style.operation}>
            {operation.length ? operation : 0}
          </label>
          <br />
          <label className={style.result}>{result}</label>
        </div>
        <div className={style.buttons}>
          {buttonsData.map((data) => {
            return (
              <button
                onClick={data.onClick}
                className={data.className}
                value={data.value}
              >
                {data.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
