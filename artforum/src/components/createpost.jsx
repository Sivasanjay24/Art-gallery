import React, { useState } from 'react';
import "../css/createpost.css";

const CreatePost = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="create-post-container">
      <div className="form-layout">
        <div className="left-panel">
          <div
            className="upload-box"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <label htmlFor="fileInput" className="upload-label">
              {file ? file.name : "Choose a file or drag and drop it here"}
            </label>
            <input
              type="file"
              id="fileInput"
              onChange={handleFileChange}
              className="file-input"
            />
            <p className="upload-hint">
              We recommend using high quality .jpg files less than 20 MB or .mp4 files less than 200 MB.
            </p>
          </div>
        </div>

        <div className="right-panel">
          <div className="form-section">
            <input type="text" placeholder="Add a title" className="form-input" />
            <textarea placeholder="Add a detailed description" className="form-textarea"></textarea>
            {/* <button className="save-button">Save</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;