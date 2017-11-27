import React, { Component } from 'react';
import svg from 'd3';
import './Note.css';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originX: props.originX,
      originY: props.originY,
    };
  }

  componentDidMount() {
    var width = 20;

    var icon = svg.append("circle").attr({
      x: this.state.originX - (width / 2),
      y: this.state.originY - (width / 2),
      width: width,
      opacity: 1,
      height: width,
      fill: "orange",
      stroke: "orange"
    });
  }

  render() {
    return (<svg />);
  }
}

export default Note;
