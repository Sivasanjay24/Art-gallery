import Home from "./components/home.jsx";
// import Header from "./components/header.jsx";
import SearchBar from "./components/search.jsx";
import Sidebar from "./components/sidebar.jsx";
import ImagePage from "./components/imagedetail.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <div className="app-container">
          <Sidebar />
          <div className="main-section">
            <div className="searchbar-wrapper">
              <SearchBar />
            </div>
            <div classname="page-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/image/:id" element={<ImagePage />} />
              </Routes>
             </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
