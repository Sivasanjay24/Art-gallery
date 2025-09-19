import React, { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "../css/home.css";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function HomePage() {
  const navigate = useNavigate();
  const { searchQuery } = useOutletContext();
  const [imageData, setImageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/posts");
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        const shuffledData = shuffleArray(data);
        setImageData(shuffledData);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredData = imageData.filter((item) =>
    [item.title, item.description, item.exhibition, item.userId]
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app" style={{ marginLeft: "60px" }}>
      <div className="gallery">
        {filteredData.length === 0 ? (
          <p>No results found for "{searchQuery}"</p>
        ) : (
          filteredData.map((item) => (
            <div
              className="image-item"
              key={item._id}
              onClick={() => navigate(`/image/${item._id}`)}
            >
              <div className="image-container">
                <img src={item.imagePath} alt={item.title} />

                <div className="icon-heart">
                  <i className="fas fa-heart"></i>
                </div>
                <div className="icon-save">
                  <i className="fa-solid fa-bookmark"></i>
                </div>

                <div className="image-info-overlay">
                  <p className="image-title">{item.title}</p>
                  <p className="image-auth">By: {item.userId}</p>
                  <p className="image-exhibition">
                    Exhibition: {item.exhibition}
                  </p>
                  <p className="image-date">
                    Uploaded: {new Date(item.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;
