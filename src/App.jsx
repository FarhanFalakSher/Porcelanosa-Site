import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Routes>
          {/* Contact Page */}
          <Route path="/" element={< Home/>} />

          {/* Professionals Page */}
          <Route path="/blog" element={<Blog />} />

          {/* Architects main page */}
          <Route
            path="/blog/inspiration"
            element={<Blog />}
          />
 <Route
            path="/blog/news"
            element={<Blog />}
          />
           <Route
            path="/blog/product-updates"
            element={<Blog />}
          />
          <Route
            path="/blog/case-studies"
            element={<Blog />}
          />
 <Route
            path="/blog/sustainability"
            element={<Blog />}
          />


          {/* Dynamic route for individual architect items */}
          <Route
            path="/blog/inspiration/:itemId"
            element={<Blog />}
          />
           <Route
            path="/blog/news/:itemId"
            element={<Blog />}
          />
          <Route
            path="/blog/product-updates/:itemId"
            element={<Blog />}
          />
            <Route
            path="/blog/case-studies/:itemId"
            element={<Blog />}
          />
          <Route
            path="/blog/sustainability/:itemId"
            element={<Blog />}
          />

      

        </Routes>
      </main>

    </>
  );
}

export default App;