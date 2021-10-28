import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = props => {
  const onVideoClick = video => {
    props.onVideoClick(video);
  };

  return (
    <ul className={styles.videos}>
      {props.videos.map(video => (
        <VideoItem
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          display={props.display}
        />
      ))}
    </ul>
  );
};

export default VideoList;
