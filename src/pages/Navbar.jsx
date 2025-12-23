import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown, FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [proOpen, setProOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-14 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-lg tracking-[0.35em] font-medium text-gray-900"
        >
          PORCELANOSA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 text-[13px] tracking-wider text-gray-800">

          {/* PRODUCTS (CENTER ALIGNED MEGA MENU) */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-gray-500 py-8">
              PRODUCTS <FiChevronDown className="text-xs mt-0.5" />
            </button>

            {productsOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2">
                <div className="bg-white border-t border-gray-200 shadow-sm w-[1200px]">
                  <div className="grid grid-cols-3 gap-14 px-16 py-12 text-sm">

                    <div>
                      <h4 className="font-semibold mb-4 text-gray-900">
                        Tiles & Flooring
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li><Link to="/products/porcelain" className="hover:text-gray-900">Porcelain Tiles</Link></li>
                        <li><Link to="/products/ceramic" className="hover:text-gray-900">Ceramic Tiles</Link></li>
                        <li><Link to="/products/wall" className="hover:text-gray-900">Wall Tiles</Link></li>
                        <li><Link to="/products/large-format" className="hover:text-gray-900">Large Format</Link></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4 text-gray-900">
                        Bathroom Solutions
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li><Link to="/bathroom/sanitaryware" className="hover:text-gray-900">Sanitaryware</Link></li>
                        <li><Link to="/bathroom/showers" className="hover:text-gray-900">Showers</Link></li>
                        <li><Link to="/bathroom/basins" className="hover:text-gray-900">Washbasins</Link></li>
                        <li><Link to="/bathroom/furniture" className="hover:text-gray-900">Furniture</Link></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4 text-gray-900">
                        Building & Outdoor
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li><Link to="/kitchen" className="hover:text-gray-900">Kitchen Systems</Link></li>
                        <li><Link to="/building/facades" className="hover:text-gray-900">Facades</Link></li>
                        <li><Link to="/outdoor" className="hover:text-gray-900">Outdoor Solutions</Link></li>
                        <li><Link to="/technical" className="hover:text-gray-900">Technical Materials</Link></li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            )}
          </div>

          {/* PROJECTS */}
          <div
            className="relative"
            onMouseEnter={() => setProjectsOpen(true)}
            onMouseLeave={() => setProjectsOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-gray-500 py-8">
              Projects <FiChevronDown className="text-xs mt-0.5" />
            </button>

            {projectsOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2">
                <div className="bg-white border border-gray-200 shadow-sm w-64">
                  <ul className="py-3 text-sm">
                    {[
                      "Hotel Projects",
                      "Restaurant Projects",
                      "Residential Projects",
                      "Office Projects",
                      "Retail Projects",
                      "Sports Facilities",
                      "Healthcare Projects",
                    ].map((item) => (
                      <li key={item}>
                        <Link
                          to={`/projects/${item.toLowerCase().replace(/ /g, "-")}`}
                          className="block px-5 py-2 hover:bg-gray-50"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* BLOG */}
          <div
            className="relative"
            onMouseEnter={() => setBlogOpen(true)}
            onMouseLeave={() => setBlogOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-gray-500 py-8">
              Blog <FiChevronDown className="text-xs mt-0.5" />
            </button>

            {blogOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2">
                <div className="bg-white border border-gray-200 shadow-sm w-64">
                  <ul className="py-3 text-sm">
                    {[
                      "Design Trends",
                      "Architecture Insights",
                      "Product Updates",
                      "Case Studies",
                      "Sustainability Articles",
                    ].map((item) => (
                      <li key={item}>
                        <Link
                          to={`/blog/${item.toLowerCase().replace(/ /g, "-")}`}
                          className="block px-5 py-2 hover:bg-gray-50"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* PROFESSIONALS */}
          <div
            className="relative"
            onMouseEnter={() => setProOpen(true)}
            onMouseLeave={() => setProOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-gray-500 py-8">
              Professionals <FiChevronDown className="text-xs mt-0.5" />
            </button>

            {proOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2">
                <div className="bg-white border border-gray-200 shadow-sm w-64">
                  <ul className="py-3 text-sm">
                    {[
                      "Architects",
                      "Interior Designers",
                      "Developers",
                      "Contractors",
                      "Distributors",
                    ].map((item) => (
                      <li key={item}>
                        <Link
                          to={`/professionals/${item.toLowerCase().replace(/ /g, "-")}`}
                          className="block px-5 py-2 hover:bg-gray-50"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* ABOUT */}
          <Link to="/about-us" className="py-8 hover:text-gray-500">
            About Us
          </Link>

        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <FiSearch className="text-lg hover:text-gray-500 cursor-pointer" />
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t px-6 py-6 space-y-4 text-sm">
          {["Products", "Projects", "Blog", "Professionals", "About Us"].map(
            (item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="block py-2 border-b border-gray-100"
              >
                {item}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
