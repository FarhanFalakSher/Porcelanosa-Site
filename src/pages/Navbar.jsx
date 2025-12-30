import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown, FiSearch, FiShoppingCart } from "react-icons/fi";

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

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
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
          <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"><FiSearch className="text-lg sm:text-xl text-gray-600" /></button>
          <Link to="/cart" className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"><FiShoppingCart className="text-lg sm:text-xl text-gray-600" /></Link>
          <Link to="/contact" className="bg-gray-900 text-white px-4 sm:px-6 py-1.5 sm:py-2.5 rounded text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors">Contact</Link>
          <button className="lg:hidden text-xl sm:text-2xl p-1.5 sm:p-2 hover:bg-gray-100 rounded transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <FiX /> : <FiMenu />}</button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg px-4 sm:px-6 py-6 sm:py-8">
          <div className="space-y-1">
            <div className="border-b border-gray-100 pb-1">
              <button className="flex items-center justify-between w-full py-3.5 px-3 sm:px-4 text-sm sm:text-base text-gray-700 hover:bg-gray-50 rounded transition-colors font-medium" onClick={() => setMobileProductsOpen(!mobileProductsOpen)}>
                Products <FiChevronDown className={`transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileProductsOpen && <div className="ml-4 mt-1 space-y-2">{productsData.map((section, idx) => (
                <div key={idx} className="mb-3"><h5 className="font-semibold text-gray-800 text-sm mb-2">{section.category}</h5>
                  <div className="space-y-1">{section.items.map(item => (
                    <Link key={item} to={`/products/${item.toLowerCase().replace(/ /g, '-')}`} className="block py-2 px-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded text-sm transition-colors" onClick={() => setMobileOpen(false)}>{item}</Link>
                  ))}</div>
                </div>
              ))}</div>}
            </div>

            <div className="border-b border-gray-100 pb-1">
              <button className="flex items-center justify-between w-full py-3.5 px-3 sm:px-4 text-sm sm:text-base text-gray-700 hover:bg-gray-50 rounded transition-colors font-medium" onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}>
                Projects <FiChevronDown className={`transition-transform duration-200 ${mobileProjectsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileProjectsOpen && <div className="ml-4 mt-1 space-y-2">{projectsData.map(item => (
                <Link key={item.name} to={`/projects/${item.name.toLowerCase().replace(/\s+\/\s+/g, '-').replace(/\s+/g, '-')}`} className="flex items-center space-x-3 py-2 px-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded text-sm transition-colors" onClick={() => setMobileOpen(false)}>
                  <span className="text-lg">{item.icon}</span><span>{item.name}</span>
                </Link>
              ))}</div>}
            </div>

            <div className="border-b border-gray-100 pb-1">
              <button className="flex items-center justify-between w-full py-3.5 px-3 sm:px-4 text-sm sm:text-base text-gray-700 hover:bg-gray-50 rounded transition-colors font-medium" onClick={() => setMobileProOpen(!mobileProOpen)}>
                Professionals <FiChevronDown className={`transition-transform duration-200 ${mobileProOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileProOpen && <div className="ml-4 mt-1 space-y-2">{professionalsData.map(item => (
                <Link key={item.name} to={`/professionals/${item.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center space-x-3 py-2 px-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded text-sm transition-colors" onClick={() => setMobileOpen(false)}>
                  <span className="text-lg">{item.icon}</span><span>{item.name}</span>
                </Link>
              ))}</div>}
            </div>

            <Link to="/about-group" className="block py-3.5 px-3 sm:px-4 text-sm sm:text-base text-gray-700 hover:bg-gray-50 rounded transition-colors font-medium border-b border-gray-100" onClick={() => setMobileOpen(false)}>
              About Group
            </Link>

            <div className="border-b border-gray-100 pb-1">
              <button className="flex items-center justify-between w-full py-3.5 px-3 sm:px-4 text-sm sm:text-base text-gray-700 hover:bg-gray-50 rounded transition-colors font-medium" onClick={() => setMobileBlogOpen(!mobileBlogOpen)}>
                Blog <FiChevronDown className={`transition-transform duration-200 ${mobileBlogOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileBlogOpen && <div className="ml-4 mt-1 space-y-2">{blogData.map(item => (
                <Link key={item} to={`/blog/${item.toLowerCase().replace(/\s+/g, '-')}`} className="block py-2 px-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded text-sm transition-colors" onClick={() => setMobileOpen(false)}>{item}</Link>
              ))}</div>}
            </div>
          </div>
          
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-100">
            <Link to="/cart" className="w-full block text-center bg-gray-900 text-white py-2.5 sm:py-3 rounded text-sm font-medium hover:bg-gray-800 transition-colors mb-3" onClick={() => setMobileOpen(false)}>
              View Cart
            </Link>
            <Link to="/contact" className="w-full block text-center bg-gray-900 text-white py-2.5 sm:py-3 rounded text-sm font-medium hover:bg-gray-800 transition-colors" onClick={() => setMobileOpen(false)}>
              Contact Sales
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;