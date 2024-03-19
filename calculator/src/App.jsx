import { useState } from "react"
import style from './App.module.css'

function App() {

  let [result,setResult] = useState(0)
  let [operation,setOperation] = useState("")
  
  let onClick = (e) => {
    console.log(e,"este es el e")
    console.log(e.target,"este es el targe")
    console.log(e.target.value, "este es el value")
    let value = e.target.value
    setOperation(operation + value)
  }

  let resultado = () => {
    try {
    let result = eval(operation)
    if(Number.isInteger(result)) setResult(result)
    else setResult(result.toFixed(2))
    } catch (error) {
      alert("Verifica tu cuenta, hay un error")
    }
    
  }

  let clear = () => {
    setResult(0)
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
        <label className={style.operation}>{operation.length?operation : 0}</label>
      <label className={style.result}>{result}</label>
      <div className={style.bottoms}>
      <button onClick={clear} className={style.clear} >C</button>
     <button onClick={onClick} className={style.orenge} value="%">%</button>
     <button onClick={onClick} className={style.orenge} value="/">/</button>
     <button onClick={onClick} className={style.orenge} value="*">x</button>
      
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
