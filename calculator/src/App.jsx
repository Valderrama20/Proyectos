import { useState } from "react"
import style from './App.module.css'

function App() {

  let [result,setResult] = useState("")
  let [operation,setOperation] = useState("")

  let onClick = (e) => {
    let value = e.target.value
    setOperation(operation + value)
  }

  let resultado = () => {
    setResult(eval(operation))
  }

  let clear = () => {
    setResult("")
    setOperation("")
  }
  let back = () => {
    if(operation.length){
    setOperation(operation.substring(0, operation.length-1))
    }
  }

  return (
    <div className={style.container}>
      <div className={style.calculator}>
        <label className={style.operation}>{operation}</label>
      <label className={style.result}>{result}</label>
      <div className={style.bottoms}>
      <button onClick={clear} className={style.clear} >C</button>
     <button onClick={onClick} className={style.orenge} value="%">%</button>
     <button onClick={onClick} className={style.orenge} value="/">/</button>
     <button onClick={onClick} className={style.orenge} value="*">X</button>
      
     <button onClick={onClick} value="1">1</button>
     <button onClick={onClick} value="2">2</button>
     <button onClick={onClick} value="3">3</button>
     <button onClick={onClick} className={style.orenge} value="+">+</button>

     <button onClick={onClick} value="4">4</button>
     <button onClick={onClick} value="5">5</button>
     <button onClick={onClick} value="6">6</button>
     <button onClick={onClick} className={style.orenge} value="-">-</button>

     <button onClick={onClick} value="7">7</button>
     <button onClick={onClick} value="8">8</button>
     <button onClick={onClick} value="9">9</button>
     <button onClick={resultado} value="=" className={style.igual}>=</button>

     <button onClick={back} className={style.back}>{"🡰"}</button>
     <button onClick={onClick} value="0">0</button>

     <button onClick={onClick} value=".">.</button>
      </div>
      </div>
      
     
    </div>
      
  )
}

export default App
