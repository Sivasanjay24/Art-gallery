import React from "react";
import { Link } from "react-router-dom";
import "../css/landing.css";

function Landing() {
  return (
    <div className="landing">
      <nav className="navbar">
        <h1 className="logo">🎨 ArtGallery</h1>
        <div className="nav-links">
          <Link to="/home">Gallery</Link>
          <Link to="/createpost">Upload</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      <header className="hero">
        <h2>Discover & Share Amazing Art</h2>
        <p>
          A community-driven art gallery where artists showcase creativity and
          art lovers find inspiration.
        </p>
        <div className="hero-buttons">
          <Link to="/home" className="btn primary">
            Explore Gallery
          </Link>
          <Link to="/createpost" className="btn secondary">
            Upload Your Art
          </Link>
        </div>
      </header>

      <section className="features">
        <div className="feature">
          <h3>🌟 Showcase Your Talent</h3>
          <p>Upload your best artworks and share them with the world.</p>
        </div>
        <div className="feature">
          <h3>🖼️ Explore Creativity</h3>
          <p>Browse through diverse artworks from artists around the globe.</p>
        </div>
        <div className="feature">
          <h3>🤝 Join the Community</h3>
          <p>Connect with art enthusiasts and inspire each other.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} ArtGallery. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Landing;
