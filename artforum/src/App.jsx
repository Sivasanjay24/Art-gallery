import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./Themecontext.jsx";

import Home from "./components/home.jsx";
import ImagePage from "./components/imagedetail.jsx";
import ProfilePage from "./components/profile.jsx";
import AuthorPage from "./components/author.jsx";
import Createpost from "./components/createpost.jsx";
import Landing from "./components/landing.jsx";
import Layout from "./Layout.jsx"; 
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/*" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="image/:id" element={<ImagePage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="author" element={<AuthorPage />} />
            <Route path="createpost" element={<Createpost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
