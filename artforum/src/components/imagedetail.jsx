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
        <p className="image-description"><strong>Description:</strong> {image.description}</p>
        <p className="image-medium"><strong>Medium:</strong> {image.medium}</p>
        <p className="image-dimensions"><strong>Dimensions:</strong> {image.dimensions}</p>
        <p className="image-author">
          <strong>Author:</strong> <Link to="/author">{image.author}</Link>
        </p>
        <p className="author-bio"><strong>About the Author:</strong> {image.authorBio}</p>
        <p className="exhibition-name"><strong>Featured in Exhibition:</strong> {image.exhibition}</p>
        <p className="exhibition-description"><strong>Exhibition Description:</strong> {image.exhibitionDescription}</p>
      </div>
    </div>
  );
}

export default ImagePage;
