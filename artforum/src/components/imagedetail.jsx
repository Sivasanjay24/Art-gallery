import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/imagepage.css";

function ImagePage() {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/posts/${id}`);
        
        if (!response.ok) {
          throw new Error(`HTTP hi error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setImage(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [id]); // The dependency array ensures the effect runs when the id changes

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }
  
  if (error) {
    return <h2 style={{ textAlign: "center" }}>Error: {error}</h2>;
  }

  // If no image is found after loading, show a "not found" message
  if (!image) {
    return <h2 style={{ textAlign: "center" }}>Image not found.</h2>;
  }

  return (
    <div className="image-page">
      <img src={image.imagePath} alt={image.title} />
      <div className="image-details">
        <h2>{image.title}</h2>
        <p className="image-description"><strong>Description:</strong> {image.description}</p>
        <p className="image-medium"><strong>Medium:</strong> {image.medium}</p>
        <p className="image-dimensions"><strong>Dimensions:</strong> {image.dimensions}</p>
        <p className="image-author">
          <strong>Author:</strong> <Link to='/author'>{image.userId}</Link>
        </p>
        <p className="exhibition-name"><strong>Featured in Exhibition:</strong> {image.exhibition}</p>
        <p className="exhibition-description"><strong>Exhibition Description:</strong> {image.exhibitionDescription}</p>
      </div>
    </div>
  );
}

export default ImagePage;