import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/profile.css";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("Work");
  const navigate = useNavigate();

  const dummyWork = [
    { id: 1, image: "img1.jpeg" },
    { id: 2, image: "img2.jpeg" },
    { id: 3, image: "img3.jpeg" },
  ];

  const dummyexhibit = [
    { id: 4, image: "img4.jpeg" },
    { id: 5, image: "img5.jpeg" },
  ];

  const dummyart = [
    { id: 6, image: "img6.jpeg" },
  ];

  const renderImages = (images) => (
    <div className="profile-gallery">
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
    <div className="profile-page">
      <div className="button">
        <button>Edit</button>
      </div>
      <div className="profile-header">
        <div className="profile-pic-wrapper">
          <img src="/images/profile.png" alt="Profile" className="profile-pic" />
          <img src="/images/edit4.jpg" alt="Mask" className="profile-mask" />
        </div> 
        <h2>@sivasanjay</h2>
        <p>Web Developer | Art Enthusiast | AI Explorer</p>
      </div>

      <div className="profile-tabs">
        <button onClick={() => setActiveTab("Work")} className={activeTab === "Work" ? "active" : ""}>My Work</button>
        <button onClick={() => setActiveTab("exhibit")} className={activeTab === "exhibit" ? "active" : ""}>Saved Exhibition</button>
        <button onClick={() => setActiveTab("art")} className={activeTab === "art" ? "active" : ""}>Saved Artwork</button>
      </div>

      <div className="profile-content">
        {activeTab === "Work" && renderImages(dummyWork)}
        {activeTab === "exhibit" && renderImages(dummyexhibit)}
        {activeTab === "art" && renderImages(dummyart)}
      </div>
    </div>
  );
};

export default ProfilePage;
