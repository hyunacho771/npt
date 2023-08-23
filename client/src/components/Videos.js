//loading the videos from the database: Videos.js

import React, { Component } from "react";
import { getVideos } from "../utils/api";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getVideos()
      .then((response) => {
        setVideos(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          <h1 className="text-center">Videos</h1>
          {isLoading ? (
            <h3 className="text-center">Loading...</h3>
          ) : (
            <ul>
              {videos.map((video) => {
                return (
                  <li key={video._id}>
                    <Link to={`/videos/${video._id}`}>{video.title}</Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Videos;
