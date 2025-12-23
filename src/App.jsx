import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";

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

      <main className="pt-20">
        <Routes>
       <Route path="/" element={<Home/>} />
        </Routes> 
      </main>
    </>
  );
}

export default App;
