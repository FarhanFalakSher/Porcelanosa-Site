import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown, FiUser, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [proOpen, setProOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileProOpen, setMobileProOpen] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);
  
  // User authentication state (example - you can replace with your actual auth logic)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("John Doe");
  
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    // Format the current path for display
    const path = location.pathname;
    if (path === "/") {
      setCurrentPath("Home");
    } else {
      const formattedPath = path
        .split("/")
        .filter(segment => segment)
        .map(segment => segment.replace(/-/g, " "))
        .join(" › ");
      setCurrentPath(formattedPath || "Home");
    }
  }, [location]);

  const productsData = [
    { category: "Tiles & Flooring", items: ["Porcelain Tiles", "Ceramic Tiles", "Wall Tiles", "Large Format"] },
    { category: "Bathroom Solutions", items: ["Sanitaryware", "Showers", "Washbasins", "Furniture"] },
    { category: "Building & Outdoor", items: ["Kitchen Systems", "Facades", "Outdoor Solutions", "Technical Materials"] }
  ];

  const projectsData = [
    { name: "Home Projects", icon: "🏠" },
    { name: "Hotels", icon: "🏨" },
    { name: "Restaurants", icon: "🍽️" },
    { name: "Stores", icon: "🛍️" },
    { name: "Offices / Companies", icon: "🏢" },
    { name: "Public Spaces", icon: "🌳" },
    { name: "Sports Facilities", icon: "⚽" },
    { name: "Health Projects", icon: "🏥" },
    { name: "Laboratories", icon: "🔬" }
  ];

  const professionalsData = [
    { name: "Architects", icon: "📐" },
    { name: "Interior Designers", icon: "🎨" },
    { name: "Developers", icon: "🏗️" },
    { name: "Contractors", icon: "👷" },
    { name: "Distributors", icon: "📦" }
  ];

  const blogData = ["Inspiration", "News", "Product Updates", "Case Studies", "Sustainability"];

  // Handle login/logout (example functions)
  const handleLogin = () => {
    setIsLoggedIn(true);
    // Add your actual login logic here
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Add your actual logout logic here
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      {/* Current Path Display */}
      <div className="bg-gray-50 py-1 px-4 sm:px-6 lg:px-14 border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto">
          <p className="text-xs text-gray-600 truncate">
            You are here: <span className="font-medium text-gray-800">{currentPath}</span>
          </p>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-14 h-16 sm:h-20 flex items-center justify-between">
        <Link to="/" className="text-xl sm:text-2xl tracking-[0.25em] font-bold text-gray-900 hover:text-gray-700 transition-colors">
          PORCELANOSA
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
          <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
            <button className="flex items-center gap-2 py-8 hover:text-gray-900 transition-colors">PRODUCTS <FiChevronDown className={`text-sm transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} /></button>
            {productsOpen && (
              <div className="fixed left-0 right-0 top-20 pt-3"><div className="mx-auto max-w-[1200px]"><div className="bg-white border border-gray-100 shadow-2xl rounded-b-lg">
                <div className="grid grid-cols-3 gap-16 px-20 py-12">
                  {productsData.map((section, idx) => (
                    <div key={idx}><h4 className="font-bold text-gray-900 mb-6 pb-3 border-b border-gray-100 text-base">{section.category}</h4>
                      <ul className="space-y-4">{section.items.map(item => (
                        <li key={item}><Link to={`/products/${item.toLowerCase().replace(/ /g, '-')}`} className="text-gray-600 hover:text-gray-900 hover:translate-x-2 transition-all duration-200 block">{item}</Link></li>
                      ))}</ul>
                    </div>
                  ))}
                </div>
              </div></div></div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setProjectsOpen(true)} onMouseLeave={() => setProjectsOpen(false)}>
            <button className="flex items-center gap-2 py-8 hover:text-gray-900 transition-colors">PROJECTS <FiChevronDown className={`text-sm transition-transform duration-200 ${projectsOpen ? 'rotate-180' : ''}`} /></button>
            {projectsOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3"><div className="bg-white border border-gray-100 shadow-2xl rounded-b-lg w-[480px] overflow-hidden"><div className="p-6">
                <h4 className="font-bold text-gray-900 mb-6 text-base">Our Project Categories</h4>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">{projectsData.map(item => (
                  <Link key={item.name} to={`/projects/${item.name.toLowerCase().replace(/\s+\/\s+/g, '-').replace(/\s+/g, '-')}`} className="flex items-center space-x-3 p-2.5 hover:bg-gray-50 rounded transition-colors">
                    <span className="text-lg">{item.icon}</span><span className="text-gray-600 hover:text-gray-900 text-sm">{item.name}</span>
                  </Link>
                ))}</div>
              </div></div></div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setProOpen(true)} onMouseLeave={() => setProOpen(false)}>
            <button className="flex items-center gap-2 py-8 hover:text-gray-900 transition-colors">PROFESSIONALS <FiChevronDown className={`text-sm transition-transform duration-200 ${proOpen ? 'rotate-180' : ''}`} /></button>
            {proOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3"><div className="bg-white border border-gray-100 shadow-2xl rounded-b-lg w-64 overflow-hidden"><div className="p-5">
                <h4 className="font-bold text-gray-900 mb-5 text-base">For Professionals</h4>
                <ul className="space-y-2">{professionalsData.map(item => (
                  <li key={item.name}><Link to={`/professionals/${item.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center space-x-3 p-2.5 hover:bg-gray-50 rounded transition-colors">
                    <span className="text-lg">{item.icon}</span><span className="text-gray-600 hover:text-gray-900 text-sm">{item.name}</span>
                  </Link></li>
                ))}</ul>
              </div></div></div>
            )}
          </div>

          <Link to="/about-group" className="py-8 hover:text-gray-900 transition-colors">ABOUT GROUP</Link>

          <div className="relative" onMouseEnter={() => setBlogOpen(true)} onMouseLeave={() => setBlogOpen(false)}>
            <button className="flex items-center gap-2 py-8 hover:text-gray-900 transition-colors">BLOG <FiChevronDown className={`text-sm transition-transform duration-200 ${blogOpen ? 'rotate-180' : ''}`} /></button>
            {blogOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3"><div className="bg-white border border-gray-100 shadow-2xl rounded-b-lg w-60 overflow-hidden"><div className="p-5">
                <h4 className="font-bold text-gray-900 mb-5 text-base">Latest Insights</h4>
                <ul className="space-y-2">{blogData.map(item => (
                  <li key={item}><Link to={`/blog/${item.toLowerCase().replace(/\s+/g, '-')}`} className="block p-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded text-sm transition-colors">{item}</Link></li>
                ))}</ul>
              </div></div></div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          {/* User Authentication Section */}
          <div className="hidden sm:flex items-center gap-3">
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer">
                  <FiUser className="text-gray-600" />
                  <span className="text-sm font-medium text-gray-700 truncate max-w-[80px]">{userName}</span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1 hover:bg-gray-100 rounded transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link 
                  to="/login" 
                  className="px-4 py-1.5 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
                >
                  Login
                </Link>
                <span className="text-gray-300">|</span>
                <Link 
                  to="/signup" 
                  className="px-4 py-1.5 text-sm bg-gray-900 text-white hover:bg-gray-800 rounded transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          <Link to="/cart" className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors relative">
            <FiShoppingCart className="text-lg sm:text-xl text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              3
            </span>
          </Link>
          
          <Link to="/contact" className="bg-gray-900 text-white px-4 sm:px-6 py-1.5 sm:py-2.5 rounded text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors">
            Contact
          </Link>
          
          <button className="lg:hidden text-xl sm:text-2xl p-1.5 sm:p-2 hover:bg-gray-100 rounded transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="max-h-[80vh] overflow-y-auto px-4 sm:px-6 py-6 sm:py-8">
            <div className="space-y-1">
              {/* Mobile User Authentication */}
              <div className="mb-4 pb-4 border-b border-gray-200">
                {isLoggedIn ? (
                  <div className="flex items-center justify-between px-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <FiUser className="text-gray-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{userName}</p>
                        <p className="text-xs text-gray-500">Account</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        handleLogout();
                        setMobileOpen(false);
                      }}
                      className="text-sm text-gray-500 hover:text-gray-700 px-3 py-1.5 hover:bg-gray-100 rounded transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <Link 
                      to="/login" 
                      className="w-full text-center py-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors border border-gray-200"
                      onClick={() => setMobileOpen(false)}
                    >
                      Login
                    </Link>
                    <Link 
                      to="/signup" 
                      className="w-full text-center py-2.5 bg-gray-900 text-white hover:bg-gray-800 rounded transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      Create Account
                    </Link>
                  </div>
                )}
              </div>

              {/* Fixed Mobile Products Dropdown */}
              <div className="border-b border-gray-100 pb-1">
                <button className="flex items-center justify-between w-full py-4 px-3 text-base text-gray-700 hover:bg-gray-50 rounded transition-colors font-medium" onClick={() => setMobileProductsOpen(!mobileProductsOpen)}>
                  Products <FiChevronDown className={`transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileProductsOpen && (
                  <div className="ml-4 mt-2 space-y-4 pb-3">
                    {productsData.map((section, idx) => (
                      <div key={idx} className="mb-4">
                        <h5 className="font-semibold text-gray-800 text-sm mb-3 pl-2">{section.category}</h5>
                        <div className="space-y-2 pl-2">
                          {section.items.map(item => (
                            <Link 
                              key={item} 
                              to={`/products/${item.toLowerCase().replace(/ /g, '-')}`} 
                              className="block py-2.5 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors text-sm border-l-2 border-gray-200 ml-2"
                              onClick={() => setMobileOpen(false)}
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Fixed Mobile Projects Dropdown */}
              <div className="border-b border-gray-100 pb-1">
                <button className="flex items-center justify-between w-full py-4 px-3 text-base text-gray-700 hover:bg-gray-50 rounded transition-colors font-medium" onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}>
                  Projects <FiChevronDown className={`transition-transform duration-200 ${mobileProjectsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileProjectsOpen && (
                  <div className="ml-4 mt-2 space-y-2 pb-3">
                    {projectsData.map(item => (
                      <Link 
                        key={item.name} 
                        to={`/projects/${item.name.toLowerCase().replace(/\s+\/\s+/g, '-').replace(/\s+/g, '-')}`} 
                        className="flex items-center gap-3 py-2.5 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors text-sm border-l-2 border-gray-200 ml-2"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="text-base">{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Fixed Mobile Professionals Dropdown */}
              <div className="border-b border-gray-100 pb-1">
                <button className="flex items-center justify-between w-full py-4 px-3 text-base text-gray-700 hover:bg-gray-50 rounded transition-colors font-medium" onClick={() => setMobileProOpen(!mobileProOpen)}>
                  Professionals <FiChevronDown className={`transition-transform duration-200 ${mobileProOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileProOpen && (
                  <div className="ml-4 mt-2 space-y-2 pb-3">
                    {professionalsData.map(item => (
                      <Link 
                        key={item.name} 
                        to={`/professionals/${item.name.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="flex items-center gap-3 py-2.5 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors text-sm border-l-2 border-gray-200 ml-2"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="text-base">{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/about-group" className="block py-4 px-3 text-base text-gray-700 hover:bg-gray-50 rounded transition-colors font-medium border-b border-gray-100" onClick={() => setMobileOpen(false)}>
                About Group
              </Link>

              {/* Fixed Mobile Blog Dropdown */}
              <div className="border-b border-gray-100 pb-1">
                <button className="flex items-center justify-between w-full py-4 px-3 text-base text-gray-700 hover:bg-gray-50 rounded transition-colors font-medium" onClick={() => setMobileBlogOpen(!mobileBlogOpen)}>
                  Blog <FiChevronDown className={`transition-transform duration-200 ${mobileBlogOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileBlogOpen && (
                  <div className="ml-4 mt-2 space-y-2 pb-3">
                    {blogData.map(item => (
                      <Link 
                        key={item} 
                        to={`/blog/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="block py-2.5 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors text-sm border-l-2 border-gray-200 ml-2"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <Link to="/cart" className="w-full block text-center bg-gray-900 text-white py-3 rounded text-sm font-medium hover:bg-gray-800 transition-colors mb-3" onClick={() => setMobileOpen(false)}>
                View Cart
              </Link>
              <Link to="/contact" className="w-full block text-center bg-gray-900 text-white py-3 rounded text-sm font-medium hover:bg-gray-800 transition-colors" onClick={() => setMobileOpen(false)}>
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;