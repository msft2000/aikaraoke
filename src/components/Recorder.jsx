import React, { Component } from "react";

import AudioReactRecorder, { RecordState } from "audio-react-recorder";

class Recorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recordState: null,
    };
  }

  start = () => {
    this.setState({
      recordState: RecordState.START,
    });
  };

  stop = () => {
    this.setState({
      recordState: RecordState.STOP,
    });
  };
  pause = () => {
    this.setState({
      recordState: RecordState.PAUSE,
    });
  };
  //audioData contains blob and blobUrl
  onStop = (audioData) => {
    this.props.setCancionGrabada(audioData);
  };
  componentDidUpdate(prevProps) {
    if (prevProps.cancionReproducir !== this.props.cancionReproducir) {
      this.updateData();
    }
    if (prevProps.finCancion !== this.props.finCancion) {
      this.finCancion();
    }
  }

  updateData() {
    if(this.props.cancionReproducir){
      this.setState({
        recordState: RecordState.START,
      });
    }else{
      this.setState({
        recordState: RecordState.PAUSE,
      });
    }
  }
  finCancion() {
    if(this.props.finCancion){
      this.setState({
        recordState: RecordState.STOP,
      });
    }
  }
  render() {
    const { recordState } = this.state;

    return (
      <div>
        <AudioReactRecorder state={recordState} onStop={this.onStop} />
        {/* <button onClick={this.start}>Start</button>
        <button onClick={this.pause}>Pause</button>
        <button onClick={this.stop}>Stop</button> */}

      </div>
    );
  }
}

export default Recorder;
