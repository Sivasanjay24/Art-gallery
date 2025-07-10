import React from "react";
import "../css/home.css";

const images = [
  "img1.jpeg",
  "img2.jpeg",
  "img3.jpeg",
  "img4.jpeg",
  "img5.jpeg",
  "img6.jpeg",
  "img7.jpeg",
  "img8.jpeg",
  "img9.jpeg",
  "img10.jpeg",
  "img1.jpeg",
  "img2.jpeg",
  "img3.jpeg",
  "img17.jpg",
  "img4.jpeg",
  "img5.jpeg",
  "img6.jpeg",
  "img7.jpeg",
  "img8.jpeg",
  "img9.jpeg",
  "img10.jpeg",
  "img18.jpg",
  "img1.jpeg",
  "img2.jpeg",
  "img3.jpeg",
  "img4.jpeg",
  "img5.jpeg",
  "img6.jpeg",
  "img7.jpeg",
  "img8.jpeg",
  "img9.jpeg",
  "img10.jpeg",
];

function home() {
  return (
    <div className="app">
      <main className="gallery">
        {images.map((src, index) => (
          <div className="image-item" key={index}>
            <img src={src} alt={`Gallery ${index}`} />
          </div>
        ))}
      </main>
    </div>
  );
}

export default home;
