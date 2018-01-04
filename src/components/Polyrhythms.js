import React, { Component } from 'react'
import './Polyrhythms.css'
import Track from './Track.js'

class Polyrhythms extends Component {
  tracks() {
    return [
      { key: 1, position: 1, beats: 3, measure: 4 },
      { key: 2, position: 2, beats: 3, measure: 4 },
      { key: 3, position: 3, beats: 2, measure: 4 }]
  }

  render() {
    return (
      <div className="polyrhythms">
        {this.tracks().map((track) =>
          <Track {...track} />
        )}
      </div>
    )
  }
}

export default Polyrhythms
