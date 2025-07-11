import React from "react";
import { useNavigate } from "react-router-dom";
import imageData from "../assets/images.json";
import "../css/home.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="app" style={{ marginLeft: "60px" }}>
      <div className="gallery">
        {imageData.map((item) => (
          <div
            className="image-item"
            key={item.id}
            onClick={() => navigate(`/image/${item.id}`)}
          >
            <div className="image-container">
              <img src={`/images/${item.image}`} alt={item.title} />

              <div className="icon-heart">
                <i className="fas fa-heart"></i>
              </div>

              <div className="icon-save">
                <i className="fa-solid fa-bookmark"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



export default HomePage;
