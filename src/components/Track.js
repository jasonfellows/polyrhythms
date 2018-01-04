import React, { Component } from 'react'
import Note from './Note.js'
import * as d3 from 'd3'
import './Track.css'

class Track extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: props.position,
      signature: props.signature,
      selected: props.selected,
      volume: props.volume,
    }
  }

  componentDidMount() {

  }

  componentDidUpdate() {
    this.createTrack()
  }

  createTrack() {
    // const node = this.node
    // const originX = 0
    // const originY = 0
    // const radius = 60
    // const svg = d3.select(this.node)

    // const outerCircle = svg.append("circle").attr({
    //     cx: originX,
    //     cy: originY,
    //     r: radius,
    //     fill: "orange",
    //     stroke: "orange"
    // })
  }

  style() {
    return {
      width: "100px",
      height: "100px"
    }
  }

  render() {
    let notes = [
      {key: 1, midiNote: 22, originX: 10, originY: 0},
      {key: 2, midiNote: 22, originX: 10, originY: 10},
      {key: 3, midiNote: 22, originX: 0, originY: 10},
      {key: 4, midiNote: 22, originX: 0, originY: 0}]

    return (
      <div className="track" style={this.style()} >
        {notes.map((note) =>
          <Note {...note} />
        )}
      </div>
    )
  }
}

export default Track


