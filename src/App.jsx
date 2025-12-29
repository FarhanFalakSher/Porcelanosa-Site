import { Routes, Route } from "react-router-dom";
import AboutGroupPage from "./pages/AboutGroupPage";
import Home from "./pages/Home";
import Navbar from "./components/commonComponents/Navbar";
import Footer from "./components/commonComponents/Footer";

// Baki imports ko tabhi kholna jab files ready hon
// import About from "./pages/About";
// import Products from "./pages/Products";
// import Projects from "./pages/Projects";
// import Blog from "./pages/Blog";
// import Professionals from "./pages/Professionals";

function App() {
  return (
    <>
      <Navbar />

      {/* Padding Top (pt-20) zaroori hai agar Navbar fixed hai taake content niche na dabe */}
      {/* <main className="pt-20"> */}
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* About Route */}
        <Route path="/about" element={<AboutGroupPage />} />

        {/* Commented Routes (Future Use) */}
        {/* <Route path="/products/*" element={<Products />} /> */}
        {/* <Route path="/projects/*" element={<Projects />} /> */}
        {/* <Route path="/blog/*" element={<Blog />} /> */}
        {/* <Route path="/professionals/*" element={<Professionals />} /> */}
      </Routes>
      {/* </main> */}
      <Footer />
    </>
  );
}

export default App;
