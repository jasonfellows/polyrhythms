import React, { Component } from 'react'
import * as d3 from 'd3'
import './Note.css'

class Note extends Component {

  constructor(props) {
    super(props)
    this.state = {
      originX: props.originX || 0,
      originY: props.originY || 0,
    }
    this.radius = 20;
  }

  componentDidMount() {
    this.createNote()
  }

  createNote() {
    const radius = this.radius
    const icon = d3.select(this.node)
      .append('circle')

    icon
      .attr("cx", radius)
      .attr("cy", radius)
      .attr("r", radius)
      .attr("opacity", 1)
      .attr("fill", "orange")
  }

  noteStyle() {
    const diameter = this.radius * 2

    return {
      width: `${diameter}px`,
      height: `${diameter}px`
    }
  }

  viewBox() {
    const diameter = this.radius * 2

    return `0 0 ${diameter} ${diameter}`
  }

  render() {
    return <div className="note" style={this.noteStyle()} >
      <svg
        viewBox={this.viewBox()} ref={(node) => this.node = node}
        xmlns="http://www.w3.org/2000/svg" >
      </svg>
    </div>
  }
}

export default Note
