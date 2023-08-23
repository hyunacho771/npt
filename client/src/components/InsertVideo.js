import React from "react";
import { useHistory } from "react-router-dom";
import { insertVideo } from "../utils/api";
import { useState } from "react";

const InsertVideo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const video = { title, description, url };
    setIsLoading(true);
    insertVideo(video)
      .then((response) => {
        setIsLoading(false);
        history.push("/videos");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          <h1 className="text-center">Insert Video</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                placeholder="Enter title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                placeholder="Enter description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="url">URL</label>
              <input
                type="text"
                name="url"
                id="url"
                className="form-control"
                placeholder="Enter URL"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              {isLoading ? "Loading..." : "Insert"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InsertVideo;
