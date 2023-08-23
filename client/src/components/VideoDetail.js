//gets videos from Youtube video
//VideoDetail.js

import React, { Component } from "react";
import { getVideoById } from "../utils/api";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

class VideoDetail extends Component {
  state = {
    video: {},
    isLoading: true,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    getVideoById(id)
      .then((response) => {
        this.setState({ video: response.data.video, isLoading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { video, isLoading } = this.state;
    const url = video.url ? video.url.split("=")[1] : "";
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
      },
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 mt-5">
            {isLoading ? (
              <h3 className="text-center">Loading...</h3>
            ) : (
              <div>
                <YouTube videoId={url} opts={opts} />
                <h1 className="text-center">{video.title}</h1>
                <p className="text-center">{video.description}</p>
                <Link to="/videos" className="btn btn-link">
                  Back to videos
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
