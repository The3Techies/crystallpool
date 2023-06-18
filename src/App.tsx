import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import HeaderIfo from "./Components/HeaderIfo";
import NaveBar from "./Components/NaveBar";
import Footer from "./Components/Footer";

import AboutUs from "./pages/AboutUs/AboutUs";
import Blog from "./pages/Blog/Blog";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Projects from "./pages/Projects/Projects";
import Services from "./pages/Services/Services";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="font-Cairo">
      <HeaderIfo />
      <NaveBar />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
