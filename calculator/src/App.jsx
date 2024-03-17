import { useState } from "react";
import style from "./App.module.css";

function App() {
  let [result, setResult] = useState(0);
  let [operation, setOperation] = useState("");

  let onClick = (e) => {
    let value = e.target.value;
    setOperation(operation + value);
  };

  let resultado = () => {
    try {
      let result = eval(operation);
      if (Number.isInteger(result)) setResult(result);
      else setResult(result.toFixed(2));
    } catch (error) {
      alert("Verifica tu cuenta, hay un error");
    }
  };

  let clear = () => {
    setResult(0);
    setOperation("");
  };
  let back = () => {
    if (operation.length) {
      setOperation(operation.substring(0, operation.length - 1));
    }
  };
  const botones = [
    { id: 1, label: "C", onClick: clear, className: style.clear },
    { id: 2, label: "%", onClick: onClick, className: style.orenge },
    { id: 3, label: "/", onClick: onClick, className: style.orenge },
    { id: 4, label: "*", onClick: onClick, className: style.orenge },
    { id: 5, label: "1", onClick: onClick },
    { id: 6, label: "2", onClick: onClick },
    { id: 7, label: "3", onClick: onClick },
    { id: 8, label: "+", onClick: onClick, className: style.orenge },
    { id: 9, label: "4", onClick: onClick },
    { id: 10, label: "5", onClick: onClick },
    { id: 11, label: "6", onClick: onClick },
    { id: 12, label: "-", onClick: onClick, className: style.orenge },
    { id: 13, label: "7", onClick: onClick },
    { id: 14, label: "8", onClick: onClick },
    { id: 15, label: "9", onClick: onClick },
    { id: 16, label: "=", onClick: resultado, className: style.igual },
    { id: 17, label: "🡰", onClick: back, className: style.back },
    { id: 18, label: "0", onClick: onClick },
    { id: 19, label: ".", onClick: onClick },
  ];

  return (
    <div className={style.container}>
      <div className={style.calculator}>
        <label className={style.operation}>
          {operation.length ? operation : 0}
        </label>
        <label className={style.result}>{result}</label>
        <div className={style.bottoms}>
          {botones.map((boton) => (
            <button
              key={boton.id}
              onClick={boton.onClick}
              className={boton.className}
              value={boton.label}
            >
              {boton.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
