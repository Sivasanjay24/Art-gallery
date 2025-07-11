import React from "react";
import { useNavigate } from "react-router-dom";
import imageData from "../assets/images.json";
import "../css/home.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="app"style={{ marginLeft: "60px" }}>
      <div className="gallery">
        {imageData.map((item) => (
          <div
            className="image-item"
            key={item.id}
            onClick={() => navigate(`/image/${item.id}`)}
          >
            <img src={`/images/${item.image}`} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
