const Task = function ({datos, delet}) {
  console.log(datos);

  return (
    <div>
      <div>
        <p>{datos.task}</p>
        <i>{datos.state}</i>
      </div>
      <div>
        <button onClick={() => delet(datos.id)}> borrar</button>
      </div>
    </div>
  );
};

export default Task;
