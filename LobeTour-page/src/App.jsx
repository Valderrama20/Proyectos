
import style from './App.module.css'
import Nav from './components/nav/Nav'
import  video1 from './assets/video1.mp4'
function App() {
  return (
    <div className={style.father}>
    <Nav/>
      
     <div className={style.containerInfo}>
      <div>
        <span>Train apps to</span>
      <div></div>
      <span>Lobe helps you train machine learning models with a free, easy to use tool.</span>
       <div>
        <button>Download</button>
        <button>What Tour</button>
       </div>
      </div>
      <video src={video1} autoPlay loop></video>
     </div>

    </div>
  )
}

export default App
