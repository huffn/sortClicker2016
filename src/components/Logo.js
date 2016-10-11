import React, { Component } from 'react';

class Logo extends Component {
  render() {
    return (
      <div className="Logo">
        <h1>
          <span className="logoText">{this.props.title}</span>
          <span className="red">I</span>
          <span className="green">I</span>
          <span className="blue">I</span>
        </h1>
      </div>
    );
  }
}

export default Logo;
