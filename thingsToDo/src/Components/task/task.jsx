import style from "./task.module.css";
import basura from "../../assets/icons8-basura.svg";

const Task = function ({ datos, delet }) {

  return (
    <div className={style.container}>
      <span>{datos.task}</span>
      <div className={style.basura}>
        <img src={basura} alt="Icon basura" onClick={() => delet(datos.id)} />
      </div>
    </div>
  );
};

export default Task;
