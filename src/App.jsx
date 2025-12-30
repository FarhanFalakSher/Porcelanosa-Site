import { Routes, Route } from "react-router-dom";
import AboutGroupPage from "./pages/AboutGroupPage";
import Navbar from "./pages/Navbar";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Navbar from "./components/commonComponents/Navbar";
import Footer from "./components/commonComponents/Footer";
import HomeProjects from "./pages/HomeProjects";
import StoreProjects from "./pages/StoresProjects";
import Labortries from "./pages/Labortries";
import PublicPlaces from "./pages/PublicPlacesProjects";
import Resturants from "./pages/Resturants";
import SportFacilities from "./pages/SportFacilitiesProj";
import Companies from "./pages/CompaniesProjects";
import Hotels from "./pages/HotelsProjects";
import Health from "./pages/Health";

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
        <Route path="/projects/home-projects" element={<HomeProjects />} />
        <Route path="/projects/hotel-projects" element={<Hotels />} />
        <Route path="/projects/resturant-projects" element={<Resturants />} />
        <Route path="/projects/sport-projects" element={<SportFacilities />} />
        <Route path="/projects/labortry-projects" element={<Labortries />} />
        <Route path="/projects/health-projects" element={<Health />} />
        <Route path="/projects/store-projects" element={<StoreProjects />} />
        <Route
          path="/projects/public-place-projects"
          element={<PublicPlaces />}
        />
        <Route path="/projects/company-projects" element={<Companies />} />
        {/* <Route path="/blog/*" element={<Blog />} /> */}
        {/* <Route path="/professionals/*" element={<Professionals />} /> */}
      </Routes>
      {/* </main> */}
      <Footer />
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