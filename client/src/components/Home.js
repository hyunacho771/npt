//Home.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getVideos } from "../utils/api";
import "./Home.css";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos()
      .then((response) => {
        console.log(response);
        setVideos(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, []);

  return (
    <div className="home">
      <h1>Home</h1>
      <div className="videos">
        {videos.map((video) => (
          <div className="video" key={video._id}>
            <Link to={`/videos/${video._id}`}>
              <img src={video.thumbnail} alt={video.title} />
              <h3>{video.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
