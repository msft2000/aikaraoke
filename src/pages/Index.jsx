/* eslint-disable no-unused-vars */
import React from "react";
import "../scss/Index.scss";
import ReactPlayer from "react-player";
import Recorder from "../components/Recorder";
import ATPM from "../assets/videos/ahoratepuedesmarchar.mp4";
import LB from "../assets/videos/lamentoboliviano.mp4";
import IWB from "../assets/videos/iwannabeyours.mp4";
import LMD from "../assets/videos/lomalodeserbueno.mp4";
import LBAM from "../assets/videos/labamba.mp4";

function Index() {
  const [seleccionarCancionPopup, setSeleccionarCancionPopup] =
    React.useState(false);
  const [seleccionarArchivoPopup, setSeleccionarArchivoPopup] =
    React.useState(false);
  const [mostrarCalificacionPopUp, setMostrarCalificacionPopUp] =
    React.useState(false);
  const [cancionGrabada, setCancionGrabada] = React.useState(null);
  const [cancionCargada, setCancionCargada] = React.useState(false);
  const [cancionElegida, setCancionElegida] = React.useState("Lamento Boliviano");
  const [cancionReproducir, setcancionReproducir] = React.useState(false);
  const [finCancion, setFinCancion] = React.useState(false);
  const handleCantarPausa = () => {
    cancionReproducir ? setcancionReproducir(false) : setcancionReproducir(true);
  };
  const cancionesURL = {
    "Lamento Boliviano":
      "https://www.youtube.com/watch?v=djrZ2GmY0Eg",
    "I Wanna Be Yours":
      "https://www.youtube.com/watch?v=sAmuevpBwH8",
    "Lo Malo De Ser Bueno":
    "https://www.youtube.com/watch?v=Fb93FbdJFeQ",
    "La Bamba":
    "https://www.youtube.com/watch?v=OkO6IwqiEDw",
    "Te Puedes Marchar":
    "https://www.youtube.com/watch?v=yciPtVGQPr0",
  };
  const cancionesVideo = {
    "Lamento Boliviano": LB,
    "I Wanna Be Yours": IWB,
    "Lo Malo De Ser Bueno": LMD,
    "La Bamba": LBAM,
    "Te Puedes Marchar": ATPM,
  };

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
            <button onClick={() => setSeleccionarArchivoPopup(true)}>
              Cargar Archivo
            </button>
            <button
              className="pausarCantarBoton"
              onClick={() => handleCantarPausa()}
            >
              {cancionReproducir ? "Pausar" : "Cantar"}
            </button>
          </div>
        </div>
        <div className="video">
          <ReactPlayer
            url={cancionesURL[cancionElegida]}
            playing={cancionReproducir}
            controls={true}
            onEnded={() => {
              setcancionReproducir(false);
              setFinCancion(true);
              setMostrarCalificacionPopUp(true);
            }}
          />
        </div>
        <div className="voice-onde--container">
          <ReactPlayer url={LB}  playing={cancionReproducir} volume={0}/>
        </div>
        <Recorder
          cancionReproducir={cancionReproducir}
          setCancionGrabada={setCancionGrabada}
          finCancion={finCancion}
        />
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
                {Object.keys(cancionesURL).map((cancion) => (
                  <option>{cancion}</option>
                ))}
                {/* <option>Lamento Boliviano</option>
                <option>I Wanna Be Yours</option>
                <option>Lo Malo De Ser Bueno</option>
                <option>La Bamba</option>
                <option>Te Puedes Marchar</option> */}
              </datalist>
            </div>
            <button onClick={() => setSeleccionarCancionPopup(false)}>Cerrar</button>
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
            <button onClick={() => setSeleccionarArchivoPopup(false)}>Cerrar</button>
          </div>
        </div>
      )}
      {mostrarCalificacionPopUp && (
        <div className="popup">
          <div className="popup--container">
            <h3>Calificacion</h3>
            <div className="popup--body">
              <h4>Nombre: {cancionElegida}</h4>
              <h4>Calificacion: 100</h4>
              <h4>Similaridad: 100%</h4>
            </div>
            <button onClick={() => setMostrarCalificacionPopUp(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export { Index };
