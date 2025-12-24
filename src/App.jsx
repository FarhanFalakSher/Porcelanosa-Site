import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import AboutGroupPage from "./pages/AboutGroupPage";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Products from "./pages/Products";
// import Projects from "./pages/Projects";
// import Blog from "./pages/Blog";
// import Professionals from "./pages/Professionals";

function App() {
  return (
    <>
      <Navbar />

      {/* <main className="pt-20"> */}
        <Routes>
          {/* {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<AboutGroupPage />} />
          {/* <Route path="/products/*" element={<Products />} /> */}
          {/* <Route path="/projects/*" element={<Projects />} /> */}
          {/* <Route path="/blog/*" element={<Blog />} /> */}
          {/* <Route path="/professionals/*" element={<Professionals />} /> */}
        </Routes>
      {/* </main> */}
    </>
  );
}

export default App;
