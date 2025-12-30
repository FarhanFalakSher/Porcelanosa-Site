import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        {/* Outlet ka matlab hai ke jo bhi route select hoga, uska component yahan dikhega */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
