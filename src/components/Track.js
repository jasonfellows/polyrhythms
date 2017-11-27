import React, { Component } from 'react';
import Note from './Note.js';
import * as svg from 'd3';
import './Track.css';

class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: props.position,
      signature: props.signature,
      selected: props.selected,
      volume: props.volume,
    };
  }

  componentDidMount() {
    var originX = 0;
    var originY = 0;
    var radius = 60;

    var outerCircle = svg.append("circle").attr({
        cx: originX,
        cy: originY,
        r: radius,
        fill: "orange",
        stroke: "orange"
    });
  }

  renderNotes() {
    return "";
  }

  render() {
    return (
      <div className="track">
        {this.renderNotes()}
      </div>
    );
  }
}

export default Track;


