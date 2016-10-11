import React, { Component } from 'react';
import base from '../base';
import Logo from './Logo';
import HighScores from './HighScores';

class Home extends Component {
  state = {
    highScores: {}
  }
  
  componentWillMount() {
    this.ref = base.syncState('highScores', {
      context: this,
      state: 'highScores'
    });
  }
  
  render() {
    return (
      <div className="fullScreen">
        <Logo title="SORT Clicker"/>
        <div className="playArea">
          <HighScores scores={this.state.highScores}/>
        </div>
      </div>
    );
  }
}

export default Home;
