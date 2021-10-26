import React, { Component } from 'react';
import './app.css';
import SearchBox from './components/searchBox';
import VideoList from './components/videoList';
import VideoPlayer from './components/videoPlayer';

class App extends Component {
  state = {
    datas: [],
    id: '',
    isOn: false,
    targetData: { title: '', channel: '', description: '' },
  };

  componentWillMount() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&key=AIzaSyCxDS5TYCPAGA8iyQ0bOPCN4lZCL81D-eI',
      requestOptions
    )
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .then(datas =>
        this.setState({
          datas: datas.items,
        })
      )
      .catch(error => console.log('error', error));
  }

  handleUpdate = name => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search/?part=snippet&maxResults=24&q=${name}&key=AIzaSyCxDS5TYCPAGA8iyQ0bOPCN4lZCL81D-eI`,
      requestOptions
    )
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .then(datas =>
        this.setState({
          datas: datas.items,
        })
      )
      .catch(error => console.log('error', error));
  };

  handlePlay = id => {
    this.setState({
      id: id,
    });
  };

  handleVideoOnOff = isOn => {
    this.setState({
      isOn: isOn,
    });
  };

  handleShow = info => {
    this.setState({
      targetData: info,
    });
  };

  render() {
    return (
      <div className="box">
        <SearchBox
          onUpdate={this.handleUpdate}
          isOnHandle={this.handleVideoOnOff}
        />
        <div className="inner-box">
          <VideoPlayer
            id={this.state.id}
            isOn={this.state.isOn}
            targetData={this.state.targetData}
          />
          <VideoList
            videoList={this.state.datas}
            onPlay={this.handlePlay}
            isOn={this.state.isOn}
            isOnHandle={this.handleVideoOnOff}
            onShow={this.handleShow}
          />
        </div>
      </div>
    );
  }
}

export default App;
