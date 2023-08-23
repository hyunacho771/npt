//components/videos.js

import React, { Component } from "react";
import axios from "axios";
import VideoPlayer from "./VideoPlayer";

class Videos extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    axios.get("/api/videos").then((response) => {
      this.setState({
        videos: response.data,
        selectedVideo: response.data[0],
      });
    });
  }

  render() {
    const { selectedVideo } = this.state;
    return (
      <div>
        <VideoPlayer video={selectedVideo} />
      </div>
    );
  }
}

export default Videos;
