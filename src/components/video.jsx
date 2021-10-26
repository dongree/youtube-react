import React, { Component } from 'react';

class Video extends Component {
  handlePlay = () => {
    if (typeof this.props.id === 'object') {
      this.props.onPlay(this.props.id.videoId);
    } else {
      this.props.onPlay(this.props.id);
    }
    if (!this.props.isOn) {
      this.props.isOnHandle(!this.props.isOn);
    }
    this.props.onShow({
      title: this.props.title,
      channel: this.props.channel,
      description: this.props.description,
    });
    window.scrollTo(0, 0);
  };

  render() {
    const thumbnailUrl = this.props.thumbnailUrl;
    const title = this.props.title;
    const channel = this.props.channel;

    return (
      <li
        className={this.props.isOn ? 'video videoSmalize' : 'video'}
        onClick={this.handlePlay}
      >
        <img src={thumbnailUrl} alt={title} className="videoThumbnail" />
        <div className="videoInfo">
          <span className="videoDesc">{title}</span>
          <br />
          <span className="videoChannel">{channel}</span>
        </div>
      </li>
    );
  }
}

export default Video;
