import React from "react";
import "../scss/Index.scss";
import ReactPlayer from "react-player";
import Recorder from "../components/Recorder";


function Index() {
  const [seleccionarCancionPopup, setSeleccionarCancionPopup] =
    React.useState(false);
  const [seleccionarArchivoPopup, setSeleccionarArchivoPopup] =
    React.useState(false);
  const [cancionGrabada, setCancionGrabada] = React.useState(null);
  const [cancionCargada, setCancionCargada] = React.useState(false);
  const [cancionElegida, setCancionElegida] = React.useState(null);
  const [cancionReproducir, setcancionReproducir] = React.useState(false);

  const handleCantarPausa = () => {
    cancionReproducir ? setcancionReproducir(false) : setcancionReproducir(true);
    // navigator.mediaDevices.getUserMedia({ audio: true })
    // .then(stream => {
    //   const mediaRecorder = new MediaRecorder(stream);
    //   mediaRecorder.start();
    //   const audioChunks = [];
    //   mediaRecorder.addEventListener("dataavailable", event => {
    //     audioChunks.push(event.data);
    //   });
    //   mediaRecorder.addEventListener("stop", () => {
    //     const audioBlob = new Blob(audioChunks);
    //     const audioUrl = URL.createObjectURL(audioBlob);
    //     const audio = new Audio(audioUrl);
    //     audio.play();
    //   });
    //   setTimeout(() => {
    //     mediaRecorder.stop();
    //   }, 3000);
    // });

  }
  return (
    <React.Fragment>
      <div id="index--container">
        <h3>AI KAraoke</h3>
        <div className="canciones-files--container">
          <div className="left">
            <button onClick={() => setSeleccionarCancionPopup(true)}>
              Seleccionar Cancion
            </button>
          </div>
          <div className="rigth">
            <button onClick={()=>setSeleccionarArchivoPopup(true)}>Cargar Archivo</button>
            <button className="pausarCantarBoton" onClick={()=>handleCantarPausa()}>{cancionReproducir ? "Pausar" : "Cantar"}</button>
          </div>
        </div>
        <div className="video">
          <ReactPlayer url="https://www.youtube.com/watch?v=lZiaYpD9ZrI" playing={cancionReproducir}/>
        </div>
        <Recorder cancionReproducir={cancionReproducir} setCancionGrabada={setCancionGrabada} />
      </div>
      {seleccionarCancionPopup && (
        <div className="popup">
          <div className="popup--container">
            <h3>Seleccionar Cancion</h3>
            <div className="popup--body">
              <input
                value={cancionElegida}
                onChange={(e) => setCancionElegida(e.target.value)}
                placeholder="Canciones Dispoibles"
                onClick={(e) => setCancionElegida("")}
                list="opts"
              />
              <datalist id="opts">
                <option>Lamento Boliviano</option>
                <option>I Wanna Be Yours</option>
                <option>Lo Malo De Ser Bueno</option>
                <option>LaBamba</option>
              </datalist>
            </div>
            <button onClick={() => setSeleccionarCancionPopup(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
      {seleccionarArchivoPopup && (
        <div className="popup">
          <div className="popup--container seleccionar-archivo">
            <h3>Cargar Archivo</h3>
            <div className="popup--body">
              <input
              type="file"
                value={cancionCargada}
                onChange={(e) => setCancionCargada(e.target.files[0])}
                />
            </div>
            <button onClick={() => setSeleccionarArchivoPopup(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
                
                
    </React.Fragment>
  );
}

export { Index };
