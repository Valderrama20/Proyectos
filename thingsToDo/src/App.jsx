import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import style from "./App.module.css";
import Task from "./Components/task/task";

const App = function () {
  let [taskList, setTaskList] = useState([]);
  let [input, setInput] = useState("");
  const [parent] = useAutoAnimate();

  useEffect(() => {
    let getTaskList =  JSON.parse(localStorage.getItem("task"))
    getTaskList && setTaskList(getTaskList)
  }, []);

  let changeInput = (e) => {
    setInput(e.target.value);
  };

  let pushTask = () => {
    if (!input.trim()) return;
    let newTask = {
      task: input,
      taskList: false,
      id: Math.floor(Math.random() * 10000) + 1,
    };

    setTaskList([...taskList, newTask]);
    setInput("");

    localStorage.setItem("task", JSON.stringify([...taskList, newTask]));
  };

  let handleKeyPress = (event) => {
     if(event.key == 'Enter') pushTask()
  }


  let deleteTask = (id) => {
    let filtrado = taskList.filter((e) => e.id !== id);
    setTaskList(filtrado);
    localStorage.setItem("task", JSON.stringify(filtrado));
  };

  let clearTasks = () => {
    setTaskList([]);
    localStorage.setItem("task", "[]");
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
            onKeyDown={handleKeyPress}
          />
          <button onClick={pushTask}>+</button>
        </div>

        <div className={style.tasks}>
          <div className={style.mapTasks} ref={parent}>
            {taskList?.map((e) => (
                <Task datos={e} delet={deleteTask} key={e.id} />
              ))}
          </div>
        </div>
        <div className={style.bottom}>
          <p>You have {taskList !== null && taskList.length} pending task</p>
          <button onClick={clearTasks}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default App;
