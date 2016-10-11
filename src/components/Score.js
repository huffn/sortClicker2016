import React, { Component } from 'react';

class Score extends Component {
  render() {
    return (
      <div className="scoreContainer">
        <div className="points">{this.props.detail.score}</div>
        <div className="avatar"><img src={this.props.detail.avatar} /></div>
        <div className="name">{this.props.detail.name}</div>
      </div>
    );
  }
}

export default Score;
