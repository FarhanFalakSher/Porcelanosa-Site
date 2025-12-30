import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";

// Context & Layout
import { CartProvider } from "./components/cart/CartContext";
import MainLayout from "./MainLayout";

// Pages
import Home from "./pages/Home";
import AboutGroupPage from "./pages/AboutGroupPage";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact ";
import Professionals from "./pages/Professionals";
import Products from "./pages/Products";
import ShoppingCart from "./components/cart/ShoppingCart";

// Project Pages
import HomeProjects from "./pages/HomeProjects";
import Hotels from "./pages/HotelsProjects";
import Resturants from "./pages/Resturants";
import SportFacilities from "./pages/SportFacilitiesProj";
import Labortries from "./pages/Labortries";
import Health from "./pages/Health";
import StoreProjects from "./pages/StoresProjects";
import PublicPlaces from "./pages/PublicPlacesProjects";
import Companies from "./pages/CompaniesProjects";

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
    <CartProvider>
      <Routes>
        {/* Sab se main route Layout hai */}
        <Route element={<MainLayout />}>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutGroupPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<ShoppingCart />} />

          {/* Projects Group */}
          <Route path="/projects">
            <Route path="home-projects" element={<HomeProjects />} />
            <Route path="hotel-projects" element={<Hotels />} />
            <Route path="resturant-projects" element={<Resturants />} />
            <Route path="sport-projects" element={<SportFacilities />} />
            <Route path="labortry-projects" element={<Labortries />} />
            <Route path="health-projects" element={<Health />} />
            <Route path="store-projects" element={<StoreProjects />} />
            <Route path="public-place-projects" element={<PublicPlaces />} />
            <Route path="company-projects" element={<Companies />} />
          </Route>

          {/* Blog Group */}
          <Route path="/blog">
            <Route index element={<Blog />} />
            <Route path="inspiration" element={<Blog />} />
            <Route path="news" element={<Blog />} />
            <Route path="product-updates" element={<Blog />} />
            <Route path="case-studies" element={<Blog />} />
            <Route path="sustainability" element={<Blog />} />
            {/* Dynamic Blog Routes */}
            <Route path="inspiration/:itemId" element={<Blog />} />
            <Route path="news/:itemId" element={<Blog />} />
            <Route path="product-updates/:itemId" element={<Blog />} />
            <Route path="case-studies/:itemId" element={<Blog />} />
            <Route path="sustainability/:itemId" element={<Blog />} />
          </Route>

          {/* Professionals Group */}
          <Route path="/professionals">
            <Route index element={<Professionals />} />
            <Route path="architects" element={<Professionals />} />
            <Route path="interior-designers" element={<Professionals />} />
            <Route path="developers" element={<Professionals />} />
            <Route path="distributors" element={<Professionals />} />
            <Route path="contractors" element={<Professionals />} />
            {/* Dynamic Professional Routes */}
            <Route path="architects/:itemId" element={<Professionals />} />
            <Route
              path="interior-designers/:itemId"
              element={<Professionals />}
            />
            <Route path="developers/:itemId" element={<Professionals />} />
          </Route>

          {/* Products Group */}
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path="porcelain-tiles" element={<Products />} />
            <Route path="ceramic-tiles" element={<Products />} />
            <Route path="wall-tiles" element={<Products />} />
            <Route path="large-format" element={<Products />} />
            <Route path="sanitaryware" element={<Products />} />
            <Route path="showers" element={<Products />} />
            <Route path="washbasins" element={<Products />} />
            <Route path="furniture" element={<Products />} />
            <Route path="kitchen-systems" element={<Products />} />
            <Route path="facades" element={<Products />} />
            <Route path="outdoor-solutions" element={<Products />} />
            <Route path="technical-materials" element={<Products />} />
          </Route>
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
