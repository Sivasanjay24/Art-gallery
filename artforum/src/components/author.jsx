import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/author.css";

const authorPage = () => {
  const [activeTab, setActiveTab] = useState("Own Art");
  const navigate = useNavigate();

  const dummyown = [
    { id: 1, image: "img1.jpeg" },
    { id: 2, image: "img2.jpeg" },
    { id: 3, image: "img3.jpeg" },
  ];

  const dummycollab = [
    { id: 4, image: "img4.jpeg" },
    { id: 5, image: "img5.jpeg" },
  ];

  

  const renderImages = (images) => (
    <div className="author-gallery">
      {images.map((item) => (
        <img
          key={item.id}
          src={`/images/${item.image}`}
          alt={`img-${item.id}`}
          onClick={() => navigate(`/image/${item.id}`)}
          className="clickable-image"
        />
      ))}
    </div>
  );

  return (
    <div className="author-page">
      
      <div className="author-header">
        
          <img src="/images/profile.png" alt="author" className="author-pic" />
          
       
        <h2>@sivasanjay</h2>
        <p>Web Developer | Art Enthusiast | AI Explorer</p>
      </div>

      <div className="author-tabs">
        <button onClick={() => setActiveTab("Own Art")} className={activeTab === "Own Art" ? "active" : ""}>Own Art</button>
        <button onClick={() => setActiveTab("Collaborative Art")} className={activeTab === "Collaborative Art" ? "active" : ""}>Collaborative Art</button>
        
      </div>

      <div className="author-content">
        {activeTab === "Own Art" && renderImages(dummyown)}
        {activeTab === "Collaborative Art" && renderImages(dummycollab)}
        
      </div>
    </div>
  );
};

export default authorPage;
