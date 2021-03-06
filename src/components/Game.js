import React, { Component } from 'react';
import Clicker from './Clicker';

class Game extends Component {
  render() {
    return (
      <div className="clickerArea" ref={(clickerArea) => this.clickerArea = clickerArea}>
        <Clicker winner="true" increaseScore={this.props.increaseScore} clickerArea={this.clickerArea}/>
      </div>
    );
  }
}

export default Game;
