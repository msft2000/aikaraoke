import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useTimer } from "use-timer";
// import txt from "../assets/letras/ellabailasola.txt"
import Line from "./Line";

const Karaoke = () => {
  const { time, start } = useTimer();
  const [line, setLine] = useState("");
  const txt=`[00:00.00]Música
  [00:48.00]un compa En qué le parece esa morra la
  [00:52.00]que andaba bailando sola me gusta para
  [00:57.00]mí bella ella sabe que está buena
  [01:01.00]que todos andan llegando la Cómo bailar
  [01:07.00]me acerco y le tiro todo un verbo
  [01:11.00]tomamos tragos sinteros solo
  [01:17.00]le dije
  [01:20.00]voy a conquistar tu familia que no nos
  [01:24.00]vas a hacerme
  [01:26.00]me dijo
  [01:29.00]que estoy muy loco pero le gusta que
  [01:33.00]ningún vato como yo actúa
  [01:37.00]que te va mija
  [01:39.00]y pura doble viejo así nomás con papel
  [01:43.00]armado
  [01:45.00]a los plebitas
  [01:56.00]yo no soy un vato que tiene varo pero
  [02:00.00]hablando del corazón
  [02:03.00]Te cumplo todo me agarro un pegadito de
  [02:08.00]su mano mi Company se la cree yo que al
  [02:13.00]pasar fue yo
  [02:15.00]su cuerpo
  [02:18.00]juro por Dios llega tan perfectas son
  [02:22.00]centoristas como modelo
  [02:25.00]sus ojos
  [02:28.00]desde el principio me enamoraron A ella
  [02:32.00]le gusta y a mí me gusta
  [02:34.00]Música
  [02:43.00]Música
  [03:06.00]Música`
  React.useEffect(() => {
    lyrics[timers.indexOf(new Date(time * 1000).toISOString().substr(14, 5))] &&
      setLine(
        lyrics[
          timers.indexOf(new Date(time * 1000).toISOString().substr(14, 5))
        ]
      );
  }, [time]);

  const removeMS = (timing) => {
    let clean = timing.substring(1);
    clean = clean.substring(0, clean.length - 4);
    return clean;
  };

  const timers = txt.match(/\[(.*)\]/g).map((t) => removeMS(t));
  const lyrics = txt.replace(/\[(.*)\]/g, "").split(/\n/);

  return (
    <div className="App">
      <ReactPlayer url="https://www.youtube.com/watch?v=lZiaYpD9ZrI" playing />
      <br />

      <button onClick={start}>GO</button>
      <br />
      <Line text={line} percentage="0" />
    </div>
  );
};

export { Karaoke };
