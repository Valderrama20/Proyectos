import { useEffect, useState } from "react";
import style from "./App.module.css";
import Task from "./Components/task/task";

const App = function () {
  let [state, setState] = useState([]);
  let [input, setInput] = useState("");

  useEffect(() => {
    setState(JSON.parse(localStorage.getItem("task")));
  }, []);

  let changeInput = (e) => {
    setInput(e.target.value);
  };

  let pushTask = () => {
    let tarea = {
      task: input,
      state: "Pending",
      id: Math.floor(Math.random() * 10000) + 1,
    };
    setState([...state, tarea]);
    setInput("");

    localStorage.setItem("task", JSON.stringify([...state, tarea]));

  };

  let deleteTask = (id) => {
    let filtrado = state.filter((e) => e.id !== id);
    setState(filtrado);
    localStorage.setItem("task", JSON.stringify(filtrado));
  };

  return (
    <div className={style.container}>
      <div className={style.search}>
        <input type="text" onChange={changeInput} value={input} />
        <button onClick={pushTask}>Crear Tarea</button>
      </div>
      <div className={style.tasks}>
        <div>
          <div className={style.title}>
          <h4>To-do List</h4>
          </div>
        {state.map((e) => (
          <Task datos={e} delet={deleteTask} key={e.id} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default App;
