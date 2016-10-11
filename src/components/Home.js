import React, { Component } from 'react';
import base from '../base';
import Logo from './Logo';
import HighScores from './HighScores';
import Game from './Game';

class Home extends Component {
  constructor() {
    super();
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.logout = this.logout.bind(this);
  }
  
  state = {
    uid: null,
    highScores: {}
  }
  
  componentWillMount() {
    this.ref = base.syncState('highScores', {
      context: this,
      state: 'highScores'
    });
  }
  
  authenticate(provider) {
    base.authWithOAuthPopup(provider, this.authHandler);
  }
  
  authHandler(err, authData) {
    if (err) {
      console.error(err);
      return;
    }
    const uid = authData.user.uid
    const userData = {
      avatar: authData.user.photoURL,
      name: authData.user.displayName,
      score: 0
    }
    const highScoreRef = base.database().ref(`highScores/${uid}`);
    
    highScoreRef.once('value', (snapshot) => {
      const data = snapshot.val() || {};
      
      if(!data.score) {
        highScoreRef.set(userData);
      } else {
        userData.score = data.score;
      }
    });
    this.setState({
      uid: authData.user.uid
    });
  }
  
  logout() {
    base.unauth();
    this.setState({ uid: null });
  }
  
  render() {
    const logo = <Logo title="SORT Clicker"/>
    if(!this.state.uid) {
      return (
        <div>
          {logo}
          <div className="login">
            <a href="#" onClick={() => this.authenticate('github')}>Log In with Github</a>
            <a href="#" onClick={() => this.authenticate('google')}>Log In with Google</a>
          </div>
        </div>
      )
    }
    return (
      <div className="fullScreen">
        {logo}
        <div className="playArea">
          <div className="gameArea">
            <a href="#" onClick={this.logout}>Log Out</a>
            <Game />
          </div>
          <HighScores scores={this.state.highScores}/>
        </div>
      </div>
    );
  }
}

export default Home;
