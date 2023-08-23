import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get("/videos")
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, []);

  return (
    <div className="home">
      <div>
        <h1>Home</h1>
        <p>
          <Link to="/login">Login</Link> or <Link to="/signup">Register</Link>{" "}
          to view protected videos
        </p>
        <div className="videos">
          {videos &&
            videos.map((video) => (
              <div key={video._id} className="video">
                <video width="320" height="240" controls>
                  <source src={video.url} type="video/mp4" />
                </video>
                <p>{video.title}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
