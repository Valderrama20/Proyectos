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
    if (input == "") return;
    let tarea = {
      task: input,
      state: false,
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

  let modifyStatus = (id) => {
    let arr = state.map((e) => {
      if (e.id == id) {
        e.state = !e.state;
        return e;
      } else return e;
    });
    setState(arr);
    localStorage.setItem("task", JSON.stringify(arr));
  };

  let clear = () => {
    setState([]);
    localStorage.setItem("task", JSON.stringify([]));
  };

  return (
    <div className={style.container}>
      <div className={style.container2}>
        <h1>To-Do List</h1>
        <div className={style.search}>
          <input
            type="text"
            onChange={changeInput}
            value={input}
            placeholder="Add your new ToDo"
          />
          <button onClick={pushTask}>+</button>
        </div>

        <div className={style.tasks}>
          <div className={style.mapTasks}>
            {state !== null &&
              state?.map((e) => (
                <Task
                  datos={e}
                  delet={deleteTask}
                  modify={modifyStatus}
                  key={e.id}
                />
              ))}
          </div>
        </div>
        <div className={style.bottom}>
          <p>You have {state !== null && state.length} pending task</p>
          <button onClick={clear}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default App;
