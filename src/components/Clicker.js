import React, { Component } from 'react';

class Clicker extends Component {
  constructor() {
    super();
    this.generatePosition = this.generatePosition.bind(this);
    this.moveAndUpdateScore = this.moveAndUpdateScore.bind(this);
  }
  
  state = {
    x: '160px',
    y: '25px'
  }
  
  componentDidMount() {
    this.generatePosition();
  }
  
  generatePosition() {
    if(this.props.clickerArea){
      const area = this.props.clickerArea.getClientRects()[0];
      let bottom = area.bottom - 60;
      let right = area.right - 150;
      this.setState({
        x: Math.floor(Math.random()*(bottom-area.top+1)+area.top) + 'px',
        y: Math.floor(Math.random()*(right-area.left+1)+area.left) + 'px'
      });
    }
  }
  
  moveAndUpdateScore() {
    this.generatePosition();
  }
  
  render() {
    return (
      <div className="clicker" style={{
        left: this.state.y,
        top: this.state.x
      }} onClick={this.moveAndUpdateScore} >Clicker!</div>
    );
  }
}

export default Clicker;
