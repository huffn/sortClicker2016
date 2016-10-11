import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import Score from './Score';

class HighScores extends Component {
  render() {
    let scores = Object.keys(this.props.scores).sort((a, b) => {
      let aScore = this.props.scores[a].score;
      let bScore = this.props.scores[b].score;
      if (aScore < bScore) return 1;
      if (aScore > bScore) return -1;
      return 0;
    });
    return (
      <div className="highScore">
        <div className="highScoreHeader">
          <div className="score">Score</div>
          <div className="avatar">Avatar</div>
          <div className="name">Name</div>
        </div>
        <FlipMove>
          {
            scores
              .map(key => <Score key={key} index={key} detail={this.props.scores[key]}/>)
          }
        </FlipMove>
      </div>
    );
  }
}

export default HighScores;
