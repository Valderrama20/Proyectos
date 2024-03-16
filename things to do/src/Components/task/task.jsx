import style from "./task.module.css";
import img from "../../assets/icons8-checkmark.svg";
import basura from "../../assets/icons8-basura.svg";

const Task = function ({ datos, delet }) {
  console.log(datos);

  return (
      <div className={style.container}>
          <i>{datos.task}</i>
        <div className={style.basura}>
          <img src={basura} alt="Icon basura" onClick={() => delet(datos.id)}  />
        </div>
      </div>
  );
};

export default Task;
