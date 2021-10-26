import React, { Component } from 'react';
import Video from './video';

class VideoList extends Component {
  handlePlay = id => {
    this.props.onPlay(id);
  };

  handleVideoOnOff = isOn => {
    this.props.isOnHandle(isOn);
  };

  handleShow = info => {
    this.props.onShow(info);
  };

  render() {
    return (
      <ul className="videoList">
        {this.props.videoList.map(video => (
          <Video
            id={video.id}
            thumbnailUrl={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
            channel={video.snippet.channelTitle}
            description={video.snippet.description}
            onPlay={this.handlePlay}
            isOn={this.props.isOn}
            isOnHandle={this.handleVideoOnOff}
            onShow={this.handleShow}
          />
        ))}
      </ul>
    );
  }
}

export default VideoList;
