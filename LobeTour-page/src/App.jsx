import style from "./App.module.css";
import Nav from "./components/nav/Nav";
import video1 from "./assets/video1.mp4";
import video2 from "./assets/video2.mp4";
import video3 from "./assets/video3.mp4";
import video4 from "./assets/video4.mp4";
import video5 from "./assets/video5.mp4";
import video6 from "./assets/video6.mp4";
import video7 from "./assets/video7.mp4";
import video8 from "./assets/video8.mp4";
import video9 from "./assets/video9.mp4";
import video10 from "./assets/video10.png";
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
        <div className={style.infoTwo}>
          <h2>
            <span>Project </span>Templates
          </h2>
          <p>
            Lobe will automatically select the right machine learning
            architecture for your project. Image classification is available
            now, with more templates coming soon.
          </p>
        </div>
        <div className={style.cardsTwo}>
          <div>
            <video src={video5}></video>
            <h3>Image Classification</h3>
            <p>Label an image based on its content.</p>
            <span>AVAILABLE NOW</span>
          </div>
          <div>
            <video src={video6}></video>
            <h3>Object Detection</h3>
            <p>Locate an object inside of an image.</p>
            <span>COMING SOON</span>
          </div>
          <div>
            <video src={video7}></video>
            <h3>Data Classification</h3>
            <p>Label data in a table based on its content.</p>
            <span>COMING SOON</span>
          </div>
        </div>
      </div>

      {/* Parte tresssss */}
      <div className={style.container3}>
        <div>
          <h2>
            Label, Train, <span>Use</span>
          </h2>
          <p>
            Lobe simplifies the process of machine learning into three easy
            steps. Collect and label your images. Train your model and
            understand your results. Then play, improve, and export your model.
          </p>
        </div>
        <video src={video8} alt="" />
        <div>
          <h2><span>Label</span> your images</h2>
          <p>
            Collect bursts using your webcam, or drag in a folder of images from
            your computer. Then quickly label your images to create a machine
            learning dataset.
          </p>
        </div>
        <video src={video9}alt="video9" />
        <div className={style.textRight}>
          <h2><span>Train</span> automatically</h2>
          <p>
            Automatically train on your own computer without any setup or
            configuration. Understand the strengths and weaknesses of your model
            with live visual results.
          </p>
        </div>
        <img src={video10} alt="" />
        <div>
          <h2><span>Use</span> your model</h2>
          <p>
            Use your model with your webcam or images from your computer.
            Improve your results by giving your model feedback on its
            predictions, then finally export it to your app.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
