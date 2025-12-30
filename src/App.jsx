import { Routes, Route } from "react-router-dom";
import AboutGroupPage from "./pages/AboutGroupPage";
// App.js
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";

import Navbar from "./pages/Navbar";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
// import Navbar from "./components/commonComponents/Navbar";
// import Footer from "./components/commonComponents/Footer";
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
import Footer from "./pages/Footer";
import Contact from "./pages/Contact ";
import Professionals from "./pages/Professionals";
import Products from "./pages/Products";
import ShoppingCart from "./components/cart/ShoppingCart";
import { CartProvider } from "./components/cart/CartContext"; // NEW: Import CartProvider
// import DebugCart from "./components/cart/DebugCart";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });

    AOS.refreshHard();
  }, [location.pathname]);

  return (
    // Wrap entire app with CartProvider
    <CartProvider>
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
      {/* <Footer /> */}
      <main className="pt-20">
        <Routes>
          {/* Contact Page */}
          {/* <Route path="/" element={< Home/>} /> */}

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

      

          <Route path="/contact" element={<Contact />} />

          <Route path="/professionals" element={<Professionals />} />
          <Route path="/professionals/architects" element={<Professionals />} />
          <Route path="/professionals/interior-designers" element={<Professionals />} />
          <Route path="/professionals/developers" element={<Professionals />} />
          <Route path="/professionals/distributors" element={<Professionals />} />
          <Route path="/professionals/contractors" element={<Professionals />} />

          <Route path="/professionals/architects/:itemId" element={<Professionals />} />
          <Route path="/professionals/interior-designers/:itemId" element={<Professionals />} />
          <Route path="/professionals/developers/:itemId" element={<Professionals />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/porcelain-tiles" element={<Products />} />
          <Route path="/products/ceramic-tiles" element={<Products />} />
          <Route path="/products/wall-tiles" element={<Products />} />
          <Route path="/products/large-format" element={<Products />} />
          <Route path="/products/sanitaryware" element={<Products />} />
          <Route path="/products/showers" element={<Products />} />
          <Route path="/products/washbasins" element={<Products />} />
          <Route path="/products/furniture" element={<Products />} />
          <Route path="/products/kitchen-systems" element={<Products />} />
          <Route path="/products/facades" element={<Products />} />
          <Route path="/products/outdoor-solutions" element={<Products />} />
          <Route path="/products/technical-materials" element={<Products />} />
          <Route path="/cart" element={<ShoppingCart />} />
          {/* <Route path="/debug" element={<DebugCart />} /> */}

        </Routes>
      </main>

    </>

      <Footer />
    </CartProvider>
  );
}

export default App;