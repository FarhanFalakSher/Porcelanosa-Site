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
          className="text-2xl tracking-[0.25em] font-bold text-gray-900 hover:text-gray-700 transition-colors"
        >
          PORCELANOSA
        </Link>

        {/* Desktop Navigation - Perfect Alignment */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
          {/* PRODUCTS - Centered Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-2 py-8 hover:text-gray-900 transition-colors">
              PRODUCTS
              <FiChevronDown
                className={`text-sm transition-transform duration-200 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {productsOpen && (
              <div className="fixed left-0 right-0 top-20 pt-3">
                <div className="mx-auto max-w-[1200px]">
                  <div className="bg-white border border-gray-100 shadow-2xl rounded-b-lg">
                    <div className="grid grid-cols-3 gap-16 px-20 py-12">
                      {/* Tiles & Flooring Column */}
                      <div>
                        <h4 className="font-bold text-gray-900 mb-6 pb-3 border-b border-gray-100 text-base">
                          Tiles & Flooring
                        </h4>
                        <ul className="space-y-4">
                          {[
                            "Porcelain Tiles",
                            "Ceramic Tiles",
                            "Wall Tiles",
                            "Large Format",
                          ].map((item) => (
                            <li key={item}>
                              <Link
                                to={`/products/${item
                                  .toLowerCase()
                                  .replace(/ /g, "-")}`}
                                className="text-gray-600 hover:text-gray-900 hover:translate-x-2 transition-all duration-200 block"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Bathroom Solutions Column */}
                      <div>
                        <h4 className="font-bold text-gray-900 mb-6 pb-3 border-b border-gray-100 text-base">
                          Bathroom Solutions
                        </h4>
                        <ul className="space-y-4">
                          {[
                            "Sanitaryware",
                            "Showers",
                            "Washbasins",
                            "Furniture",
                          ].map((item) => (
                            <li key={item}>
                              <Link
                                to={`/bathroom/${item.toLowerCase()}`}
                                className="text-gray-600 hover:text-gray-900 hover:translate-x-2 transition-all duration-200 block"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Building & Outdoor Column */}
                      <div>
                        <h4 className="font-bold text-gray-900 mb-6 pb-3 border-b border-gray-100 text-base">
                          Building & Outdoor
                        </h4>
                        <ul className="space-y-4">
                          {[
                            "Kitchen Systems",
                            "Facades",
                            "Outdoor Solutions",
                            "Technical Materials",
                          ].map((item) => (
                            <li key={item}>
                              <Link
                                to={`/${
                                  item.includes("Kitchen")
                                    ? "kitchen"
                                    : item.toLowerCase().replace(/ /g, "-")
                                }`}
                                className="text-gray-600 hover:text-gray-900 hover:translate-x-2 transition-all duration-200 block"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* PROJECTS - Perfectly Aligned */}
          <div
            className="relative"
            onMouseEnter={() => setProjectsOpen(true)}
            onMouseLeave={() => setProjectsOpen(false)}
          >
            <button className="flex items-center gap-2 py-8 hover:text-gray-900 transition-colors">
              PROJECTS
              <FiChevronDown
                className={`text-sm transition-transform duration-200 ${
                  projectsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {projectsOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
                <div className="bg-white border border-gray-100 shadow-2xl rounded-b-lg w-[480px] overflow-hidden">
                  <div className="p-6">
                    <h4 className="font-bold text-gray-900 mb-6 text-base">
                      Our Project Categories
                    </h4>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                      {[
                        { name: "Home Projects", icon: "🏠" },
                        { name: "Hotels", icon: "🏨" },
                        { name: "Restaurants", icon: "🍽️" },
                        { name: "Stores", icon: "🛍️" },
                        { name: "Offices / Companies", icon: "🏢" },
                        { name: "Public Spaces", icon: "🌳" },
                        { name: "Sports Facilities", icon: "⚽" },
                        { name: "Health Projects", icon: "🏥" },
                        { name: "Laboratories", icon: "🔬" },
                      ].map((item) => (
                        <Link
                          key={item.name}
                          to={`/projects/${item.name
                            .toLowerCase()
                            .replace(/\s+\/\s+/g, "-")
                            .replace(/\s+/g, "-")}`}
                          className="flex items-center space-x-3 p-2.5 hover:bg-gray-50 rounded transition-colors"
                        >
                          <span className="text-lg">{item.icon}</span>
                          <span className="text-gray-600 hover:text-gray-900 text-sm">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* PROFESSIONALS - Perfectly Aligned */}
          <div
            className="relative"
            onMouseEnter={() => setProOpen(true)}
            onMouseLeave={() => setProOpen(false)}
          >
            <button className="flex items-center gap-2 py-8 hover:text-gray-900 transition-colors">
              PROFESSIONALS
              <FiChevronDown
                className={`text-sm transition-transform duration-200 ${
                  proOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {proOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
                <div className="bg-white border border-gray-100 shadow-2xl rounded-b-lg w-64 overflow-hidden">
                  <div className="p-5">
                    <h4 className="font-bold text-gray-900 mb-5 text-base">
                      For Professionals
                    </h4>
                    <ul className="space-y-2">
                      {[
                        { name: "Architects", icon: "📐" },
                        { name: "Interior Designers", icon: "🎨" },
                        { name: "Developers", icon: "🏗️" },
                        { name: "Contractors", icon: "👷" },
                        { name: "Distributors", icon: "📦" },
                      ].map((item) => (
                        <li key={item.name}>
                          <Link
                            to={`/professionals/${item.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="flex items-center space-x-3 p-2.5 hover:bg-gray-50 rounded transition-colors"
                          >
                            <span className="text-lg">{item.icon}</span>
                            <span className="text-gray-600 hover:text-gray-900 text-sm">
                              {item.name}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ABOUT GROUP - Simple Link (No Dropdown) */}
          <Link
            to="/about"
            className="py-8 hover:text-gray-900 transition-colors"
          >
            ABOUT GROUP
          </Link>

          {/* BLOG - Perfectly Aligned */}
          <div
            className="relative"
            onMouseEnter={() => setBlogOpen(true)}
            onMouseLeave={() => setBlogOpen(false)}
          >
            <button className="flex items-center gap-2 py-8 hover:text-gray-900 transition-colors">
              BLOG
              <FiChevronDown
                className={`text-sm transition-transform duration-200 ${
                  blogOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {blogOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
                <div className="bg-white border border-gray-100 shadow-2xl rounded-b-lg w-60 overflow-hidden">
                  <div className="p-5">
                    <h4 className="font-bold text-gray-900 mb-5 text-base">
                      Latest Insights
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Design Trends",
                        "Architecture",
                        "Product Updates",
                        "Case Studies",
                        "Sustainability",
                      ].map((item) => (
                        <li key={item}>
                          <Link
                            to={`/blog/${item
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="block p-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded text-sm transition-colors"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <FiSearch className="text-xl text-gray-600" />
          </button>
          <button className="bg-gray-900 text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-gray-800 transition-colors">
            Contact
          </button>
          <button
            className="lg:hidden text-2xl p-2 hover:bg-gray-100 rounded transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg px-6 py-8">
          <div className="space-y-1">
            {[
              "Products",
              "Projects",
              "Professionals",
              "About Group",
              "Blog",
            ].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block py-3.5 px-4 text-gray-700 hover:bg-gray-50 rounded transition-colors font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100">
            <button className="w-full bg-gray-900 text-white py-3 rounded text-sm font-medium hover:bg-gray-800 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
