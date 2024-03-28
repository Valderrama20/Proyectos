import style from "./App.module.css";
import Nav from "./components/nav/Nav";
import video1 from "./assets/video1.mp4";
import video2 from "./assets/video2.mp4";
import video3 from "./assets/video3.mp4";
import video4 from "./assets/video4.mp4";
import img1 from "./assets/img1.jpg";
function App() {
  return (
    <div className={style.father}>
      <Nav />

      <div className={style.containerInfo}>
        <div className={style.left}>
          <span className={style.title}>Train apps to</span>
          <div>see gestures</div>
          <span className={style.text}>
            Lobe helps you train machine learning models with a free, easy to
            use tool.
          </span>
          <div>
            <button className={style.button1}>Download</button>
            <button className={style.button2}>Whach Tour</button>
          </div>
        </div>
        <video src={video1} autoPlay loop></video>
      </div>

      {/* Parte dosssss */}

      <div className={style.container2}>
        <div className={style.info}>
          <h2>
            Machine learning
            <br />
            made <span>easy</span>
          </h2>
          <p>
            Lobe has everything you need to bring your machine learning ideas to
            life. Just show it examples of what you want it to learn, and it
            automatically trains a custom machine learning model that can be
            shipped in your app.
          </p>
        </div>
        <img src={img1} alt="" />
        <div className={style.cards}>
          <div>
            <video src={video2} loop autoPlay></video>
            <h3 htmlFor="">Easy to Use</h3>
            <p>
              Designed to be easy enough for anyone to use. No code or
              experience required.
            </p>
          </div>
          <div>
            <video src={video3} loop autoPlay></video>
            <h3 htmlFor="">Free and Private</h3>
            <p>
              Train for free on your own computer without uploading your data to
              the cloud.
            </p>
          </div>
          <div>
            <video src={video4} loop autoPlay></video>
            <h3 htmlFor="">Export Anywhere</h3>
            <p>
              Available for Mac and Windows. Export your model and ship it on
              any platform you choose.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
