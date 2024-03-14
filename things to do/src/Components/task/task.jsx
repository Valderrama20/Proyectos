import style from './task.module.css'

const Task = function ({datos, delet, modify}) {
  console.log(datos);

  return (
    <div className={style.container}>      
      <div className={style.info}>
      <button onClick={() => modify(datos.id)}>{`${datos.state}`}</button>
      <p>{datos.task}</p>
      </div>
      <div>
        <button onClick={() => delet(datos.id)}>X</button>
      </div>
    </div>
  );
};

export default Task;
