import React from "react";
import "../css/home.css";

const images = [
  "https://source.unsplash.com/random/300x400?sig=1",
  "https://source.unsplash.com/random/300x500?sig=2",
  "https://source.unsplash.com/random/300x300?sig=3",
  "https://source.unsplash.com/random/300x450?sig=4",
  "https://source.unsplash.com/random/300x600?sig=5",
  "https://source.unsplash.com/random/300x350?sig=6",
  "https://source.unsplash.com/random/300x550?sig=7",
  "https://source.unsplash.com/random/300x370?sig=8",
];

function home() {
  return (
    <div className="app">
      <header>
        <h1> Gallery</h1>
      </header>

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
