// App.js
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";

import Navbar from "./pages/Navbar";
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

      <main className="pt-20">
        <Routes>
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

      <Footer />
    </CartProvider>
  );
}

export default App;