import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./Themecontext.jsx";

import Home from "./components/home.jsx";
import SearchBar from "./components/search.jsx";
import Sidebar from "./components/sidebar.jsx";
import ImagePage from "./components/imagedetail.jsx";
import ProfilePage from "./components/profile.jsx";
import AuthorPage from "./components/author.jsx";
import Createpost from "./components/createpost.jsx";

import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app-container">
          <Sidebar />
          <div className="main-section">
            <div className="searchbar-wrapper">
              <SearchBar />
            </div>
            <div className="page-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/image/:id" element={<ImagePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/author" element={<AuthorPage />} />
                <Route path="/createpost" element={<Createpost />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
