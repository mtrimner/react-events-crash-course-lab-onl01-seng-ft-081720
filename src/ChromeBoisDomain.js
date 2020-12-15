import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    let x = event.clientX
    let y = event.clientY
    drawChromeBoiAtCoords(x, y)
  }
  
  toggleCycle = () => {
    toggleCycling()
  }

    keyDownEvent =(e) => {
      if (e.key === 'a') {
        resize('+')
      } else if (e.key === 's') {
        resize('-')
      }
    }
   
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.toggleCycle}
        onKeyDown={this.keyDownEvent}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
