import React from "react";
import { useParams, Link } from "react-router-dom";
import imageData from "../assets/images.json";
import "../css/imagepage.css";

function ImagePage() {
  const { id } = useParams();
  const image = imageData.find((img) => img.id.toString() === id);

  if (!image) {
    return <h2 style={{ textAlign: "center" }}>Image not found.</h2>;
  }

  return (
    <div className="image-page">
      <img src={`/images/${image.image}`} alt={image.title} />
      <div className="image-details">
      <h2>{image.title}</h2>
      <p className="image-description">{image.description}</p>
      </div>
    </div>
  );
}

export default ImagePage;
