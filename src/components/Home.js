import React, { Component } from 'react';
import base from '../base';
import Logo from './Logo';

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
      <Logo title="SORT Clicker"/>
    );
  }
}

export default Home;
