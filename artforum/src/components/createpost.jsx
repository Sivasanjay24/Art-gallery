import React, { useState } from "react";
import axios from "axios";
import "../css/createpost.css";

function Createpost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [medium, setMedium] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [exhibition, setExhibition] = useState("");
  const [exhibitionDescription, setExhibitionDescription] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false); 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false); 

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    } else {
      alert("Only image files are allowed.");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true); 
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) return alert("Please select or drop an image first.");

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("medium", medium);
      formData.append("dimensions", dimensions);
      formData.append("exhibition", exhibition);
      formData.append("exhibitionDescription", exhibitionDescription);
      formData.append("userId", "1234");

      const res = await axios.post(
        "http://localhost:5000/api/posts/upload",
        formData
      );
      alert("Upload successful!");
      console.log(res.data);

      // Reset form fields
      setTitle("");
      setDescription("");
      setMedium("");
      setDimensions("");
      setExhibition("");
      setExhibitionDescription("");
      setImage(null);
      setPreviewImage("");
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed. Please try again.");
    }

    setUploading(false);
  };

  return (
    <div className="create-post-container">
      <h2>Upload Your Artwork</h2>
      <form onSubmit={handleSubmit} className="form-layout">
        <div className="left-panel">
          <div
            className={`upload-box ${isDragOver ? "drag-over" : ""}`} // Apply class when dragging over
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {previewImage && (
              <img src={previewImage} alt="Preview" className="image-preview" />
            )}
            <label className="upload-label">
              Choose Image or Drag & Drop Here
              <input
                type="file"
                className="file-input"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
            <p className="upload-hint">Only .jpg, .png, or .gif allowed</p>
          </div>
        </div>

        <div className="right-panel form-section">
          <input
            type="text"
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Artwork Title"
            required
          />
          <textarea
            className="form-textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Artwork Description"
            required
          />
          <input
            type="text"
            className="form-input"
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
            placeholder="Medium (e.g., Oil on Canvas)"
            required
          />
          <input
            type="text"
            className="form-input"
            value={dimensions}
            onChange={(e) => setDimensions(e.target.value)}
            placeholder="Dimensions (e.g., 24 x 36 in)"
            required
          />
          <input
            type="text"
            className="form-input"
            value={exhibition}
            onChange={(e) => setExhibition(e.target.value)}
            placeholder="Featured in Exhibition"
            required
          />
          <textarea
            className="form-textarea"
            value={exhibitionDescription}
            onChange={(e) => setExhibitionDescription(e.target.value)}
            placeholder="Exhibition Description"
            required
          />
        </div>
        <button type="submit" className="save-button" disabled={uploading}>
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
}

export default Createpost;
