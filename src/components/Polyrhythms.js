import React, { Component } from 'react';
import './Polyrhythms.css';
import Track from './Track.js';

class Polyrhythms extends Component {
  renderTracks() {
    [
      { position: 1, beats: 3, measure: 4 },
      { position: 2, beats: 3, measure: 4 },
      { position: 3, beats: 2, measure: 4 }
    ].map(track => {
      <Track position={track.position} beats={track.beats} measure={track.measure} />
    })
  }

  render() {
    return this.renderTracks();
  }
}

export default Polyrhythms;
