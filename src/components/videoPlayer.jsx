import React, { Component } from 'react';

class VideoPlayer extends Component {
  render() {
    const url = `https://www.youtube.com/embed/${this.props.id}`;
    return (
      <div className={this.props.isOn ? 'videoPlayerOn' : 'videoPlayerOff'}>
        <iframe
          id="ytplayer"
          type="text/html"
          width="720"
          height="405"
          src={url}
          frameborder="0"
          allowfullscreen="ture"
          className="realVideo"
        ></iframe>
        <div className="videoPlayerInfo">
          <h2>{this.props.targetData.title}</h2>
          <h4>{this.props.targetData.channel}</h4>
          <p>{this.props.targetData.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
