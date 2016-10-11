import React, { Component } from 'react';

class Score extends Component {
  constructor() {
    super();
    this.pixelate = this.pixelate.bind(this);
  }
  
  pixelate() {
    const ctx = this.canvas.getContext('2d');
    const size = 25 * 0.01;
    const w = this.canvas.width * size;
    const h = this.canvas.height * size;
    
    ctx.mozImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    /// draw original image to the scaled size
    ctx.drawImage(this.img, 0, 0, w, h);

    /// then draw that scaled image thumb back to fill canvas
    /// As smoothing is off the result will be pixelated
    ctx.drawImage(this.canvas, 0, 0, w, h, 0, 0, this.canvas.width, this.canvas.height);
  }

  
  render() {
    this.img = new Image();
    this.img.onload = this.pixelate;
    this.img.src = this.props.detail.avatar;
    return (
      <div className="scoreContainer">
        <div className="points">{this.props.detail.score}</div>
        <div className="avatar"><canvas ref={(canvas) => this.canvas = canvas} width="100" height="100"></canvas></div>
        <div className="name">{this.props.detail.name}</div>
      </div>
    );
  }
}

export default Score;
