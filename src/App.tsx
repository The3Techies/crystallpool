import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
