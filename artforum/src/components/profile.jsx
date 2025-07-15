import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/profile.css";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const navigate = useNavigate();

  const dummyPosts = [
    { id: 1, image: "img1.jpeg" },
    { id: 2, image: "img2.jpeg" },
    { id: 3, image: "img3.jpeg" },
  ];

  const dummySaved = [
    { id: 4, image: "img4.jpeg" },
    { id: 5, image: "img5.jpeg" },
  ];

  const dummyLiked = [
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
          <img src="/images/.png" alt="Mask" className="profile-mask" />
        </div>
        <h2>@sivasanjay</h2>
        <p>Web Developer | Art Enthusiast | AI Explorer</p>
      </div>

      <div className="profile-tabs">
        <button onClick={() => setActiveTab("posts")} className={activeTab === "posts" ? "active" : ""}>Posts</button>
        <button onClick={() => setActiveTab("saved")} className={activeTab === "saved" ? "active" : ""}>Saved</button>
        <button onClick={() => setActiveTab("liked")} className={activeTab === "liked" ? "active" : ""}>Liked</button>
      </div>

      <div className="profile-content">
        {activeTab === "posts" && renderImages(dummyPosts)}
        {activeTab === "saved" && renderImages(dummySaved)}
        {activeTab === "liked" && renderImages(dummyLiked)}
      </div>
    </div>
  );
};

export default ProfilePage;
