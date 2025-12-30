import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiChevronRight, FiFilter, FiCheck, FiShoppingCart, FiEye, FiDroplet, FiX } from "react-icons/fi";
import { useCart } from "../cart/CartContext"; // ADD THIS IMPORT
import { Link } from "react-router-dom"; // ADD THIS IMPORT

const washbasinProducts = [
  { id: 1, title: "Countertop Basin", type: "Countertop Basins", mounting: "Countertop", material: "Ceramic", dimensions: "60 x 40 x 15 cm", tapHoles: 1, overflow: "Yes", color: "White Gloss", price: "$250", sku: "CB-1001", features: ["Easy cleaning", "Standard tap", "Overflow protection"], images: ["https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&fit=crop"] },
  { id: 2, title: "Wall-Mounted Basin", type: "Wall-Mounted Basins", mounting: "Wall-Mounted", material: "KRION®", dimensions: "55 x 35 x 18 cm", tapHoles: 1, overflow: "Yes", color: "Matte White", price: "$320", sku: "WB-2001", features: ["Space saving", "Modern design", "Easy access"], images: ["https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&fit=crop"] },
  { id: 3, title: "Under-Counter Basin", type: "Under-Counter Basins", mounting: "Under-Counter", material: "Stone", dimensions: "50 x 35 x 15 cm", tapHoles: 2, overflow: "No", color: "Beige", price: "$400", sku: "UC-3001", features: ["Seamless look", "Durable", "Easy install"], images: ["https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&fit=crop"] },
  { id: 4, title: "Double Basin Integrated Sink", type: "Double Basins", mounting: "Integrated", material: "Ceramic", dimensions: "120 x 45 x 15 cm", tapHoles: 2, overflow: "Yes", color: "White", price: "$650", sku: "DB-4001", features: ["Double bowl", "Integrated", "Large capacity"], images: ["https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&fit=crop"] },
  { id: 5, title: "Pedestal Basin", type: "Pedestal Basins", mounting: "Pedestal", material: "Ceramic", dimensions: "50 x 40 x 85 cm", tapHoles: 1, overflow: "Yes", color: "White", price: "$280", sku: "PB-5001", features: ["Classic design", "Stable", "Easy clean"], images: ["https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&fit=crop"] },
  { id: 6, title: "Glass Basin", type: "Wall-Mounted Basins", mounting: "Wall-Mounted", material: "Tempered Glass", dimensions: "45 x 35 x 12 cm", tapHoles: 1, overflow: "Yes", color: "Transparent", price: "$380", sku: "GB-6001", features: ["Modern look", "Easy clean", "Durable"], images: ["https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&fit=crop"] },
  { id: 7, title: "Corner Basin", type: "Countertop Basins", mounting: "Countertop", material: "Ceramic", dimensions: "45 x 45 x 15 cm", tapHoles: 1, overflow: "Yes", color: "Black", price: "$310", sku: "CO-7001", features: ["Space saving", "Corner fit", "Modern"], images: ["https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&fit=crop"] },
  { id: 8, title: "Vessel Basin", type: "Countertop Basins", mounting: "Countertop", material: "Stone", dimensions: "40 x 40 x 20 cm", tapHoles: 1, overflow: "No", color: "Gray", price: "$360", sku: "VB-8001", features: ["Vessel style", "Modern", "Unique"], images: ["https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&fit=crop"] },
];

const Washbasins = () => {
  const [modalProduct, setModalProduct] = useState(null);
  const [filters, setFilters] = useState({ mounting: "all", material: "all", tapHoles: "all", color: "all", price: "all" });
  
  // ADD CARTCONTEXT
  const { addToCart, cartCount } = useCart();

  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  const filteredProducts = washbasinProducts.filter((p) => {
    const mountingMatch = filters.mounting === "all" || p.mounting === filters.mounting;
    const materialMatch = filters.material === "all" || p.material === filters.material;
    const tapHolesMatch = filters.tapHoles === "all" || p.tapHoles === parseInt(filters.tapHoles);
    const colorMatch = filters.color === "all" || p.color.includes(filters.color);
    const priceMatch = filters.price === "all" || 
      (filters.price === "low" && parseFloat(p.price.replace('$', '')) < 300) ||
      (filters.price === "mid" && parseFloat(p.price.replace('$', '')) <= 400) ||
      (filters.price === "high" && parseFloat(p.price.replace('$', '')) > 400);
    return mountingMatch && materialMatch && tapHolesMatch && colorMatch && priceMatch;
  });

  // UPDATE ADD TO CART FUNCTION
  const handleAddToCart = (product, e) => {
    e?.stopPropagation();
    // Extract numeric price from string (remove "$")
    const price = parseFloat(product.price.replace('$', ''));
    
    addToCart({
      id: product.id,
      name: product.title, // Use "title" as name for CartContext
      price: price,
      image: product.images[0],
      series: product.type, // Map "type" to "series" for CartContext
      finish: product.material // Map "material" to "finish" for CartContext
    });
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Floating Cart Button with Link */}
      <div className="fixed top-6 right-6 z-40">
        <Link to="/cart" className="relative">
          <button className="bg-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105">
            <FiShoppingCart className="text-gray-900 text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </Link>
      </div>

      {/* Hero Banner */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&fit=crop" alt="Washbasins" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 bg-gradient-to-t from-black/70 to-transparent">
          <p className="text-sm md:text-lg mb-2 tracking-widest">BATHROOM SINKS & BASINS</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">WASHBASINS</h1>
          <p className="text-lg max-w-2xl">Premium bathroom basins in various styles and materials</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6 text-gray-600 text-sm flex items-center gap-1">
        <span className="hover:text-gray-900 cursor-pointer">Home</span><FiChevronRight />
        <span className="hover:text-gray-900 cursor-pointer">Products</span><FiChevronRight />
        <span className="font-semibold text-gray-900">Washbasins</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8 mb-16">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-6">
            <div className="flex items-center gap-2 mb-6"><FiFilter /><h3 className="text-xl font-bold">Filters</h3></div>
            
            <div className="space-y-6">
              {["Mounting Style", "Material", "Tap Holes", "Color", "Price"].map((filterType) => (
                <div key={filterType}>
                  <label className="block text-sm font-medium text-gray-700 mb-3">{filterType}</label>
                  <div className="space-y-2">
                    {filterType === "Mounting Style" && ["all", "Countertop", "Wall-Mounted", "Under-Counter", "Integrated", "Pedestal"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, mounting: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.mounting === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.mounting === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Styles" : option}
                      </button>
                    ))}
                    {filterType === "Material" && ["all", "Ceramic", "KRION®", "Stone", "Tempered Glass"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, material: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.material === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.material === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Materials" : option}
                      </button>
                    ))}
                    {filterType === "Tap Holes" && ["all", "0", "1", "2"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, tapHoles: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.tapHoles === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.tapHoles === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All" : `${option} hole${option !== "1" ? "s" : ""}`}
                      </button>
                    ))}
                    {filterType === "Color" && ["all", "White", "Black", "Gray", "Beige", "Transparent"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, color: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.color === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.color === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Colors" : option}
                      </button>
                    ))}
                    {filterType === "Price" && ["all", "low", "mid", "high"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, price: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.price === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.price === option ? "opacity-100" : "opacity-0"}`} />
                        {option === "all" ? "All Prices" : option === "low" ? "Under $300" : option === "mid" ? "$300-$400" : "Over $400"}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:w-3/4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{filteredProducts.length} Washbasins</h2>
            <p className="text-gray-600">Premium bathroom sinks in various styles</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, idx) => (
              <div key={product.id} data-aos="fade-up" data-aos-delay={idx * 50} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                
                <div className="relative overflow-hidden h-56">
                  <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" onClick={() => setModalProduct(product)} />
                  <div className={`absolute top-3 left-3 ${product.mounting === "Countertop" ? "bg-gray-900" : product.mounting === "Wall-Mounted" ? "bg-gray-900" : product.mounting === "Under-Counter" ? "bg-gray-900" : "bg-gray-900"} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                    {product.mounting}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                    {product.price}
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="mb-3 cursor-pointer" onClick={() => setModalProduct(product)}>
                    <h3 className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors mb-1">{product.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">{product.material}</div>
                      <div className={`px-2 py-1 rounded-full text-xs ${product.tapHoles === 1 ? "bg-blue-100 text-gray-900" : "bg-purple-100 text-gray-900"}`}>
                        {product.tapHoles} tap hole{product.tapHoles !== 1 ? "s" : ""}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{product.dimensions} • {product.color}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.features.slice(0, 2).map((feature, i) => (
                      <div key={i} className="flex items-center gap-1 text-sm">
                        <FiCheck className="text-green-500" size={12} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      className="flex-1 bg-gray-900 text-white py-2.5 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-1 text-sm" 
                      onClick={(e) => handleAddToCart(product, e)} // UPDATED HANDLER
                    >
                      <FiShoppingCart size={14} /> Add
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-xl font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-1 text-sm" onClick={() => setModalProduct(product)}>
                      <FiEye size={14} /> View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {modalProduct && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-4xl w-full relative overflow-hidden max-h-[90vh] overflow-y-auto">
            <button className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white" onClick={() => setModalProduct(null)}><FiX /></button>
            
            <div className="grid md:grid-cols-2">
              <div className="p-6 space-y-4">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${modalProduct.mounting === "Countertop" ? "bg-blue-100 text-gray-900" : modalProduct.mounting === "Wall-Mounted" ? "bg-green-100 text-gray-900" : modalProduct.mounting === "Under-Counter" ? "bg-purple-100 text-gray-900" : "bg-gray-900 text-gray-900"}`}>
                    {modalProduct.mounting}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{modalProduct.title}</h2>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-xl font-bold text-gray-900">{modalProduct.price}</div>
                    <div className="px-2 py-1 rounded-full text-xs bg-gray-100">{modalProduct.sku}</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-xl">
                    <img src={modalProduct.images[0]} alt={modalProduct.title} className="w-full h-64 object-cover" />
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <FiDroplet className="text-gray-900" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-9000">Overflow</p>
                          <p className="text-xstext-gray-900">{modalProduct.overflow}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-gray-900 font-bold">{modalProduct.tapHoles}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Tap Holes</p>
                          <p className="text-xs text-gray-900">{modalProduct.tapHoles} hole{modalProduct.tapHoles !== 1 ? "s" : ""}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Specifications</h3>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {["Material", "Dimensions", "Mounting", "Color", "Tap Holes", "Overflow"].map((key) => (
                    <div key={key} className="bg-white p-3 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">{key}</p>
                      <p className="font-medium text-gray-900 text-sm">{modalProduct[key.toLowerCase().replace(/ /g, "")] || modalProduct[key.toLowerCase()]}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {modalProduct.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white p-2 rounded-lg">
                        <FiCheck className="text-gray-900" size={12} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Installation Info</h4>
                  <div className="bg-white p-3 rounded-lg text-sm text-gray-700">
                    <p>• Professional installation recommended</p>
                    <p>• Check countertop thickness compatibility</p>
                    <p>• Ensure proper sealing and waterproofing</p>
                    <p>• Follow manufacturer's guidelines</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button 
                    className="flex-1 bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-blue-700 flex items-center justify-center gap-2 text-sm" 
                    onClick={(e) => handleAddToCart(modalProduct, e)} // UPDATED HANDLER
                  >
                    <FiShoppingCart size={16} /> Add to Cart
                  </button>
                  <button className="flex-1 border border-text-gray-900 py-3 rounded-xl font-medium hover:bg-blue-50 text-sm">
                    Installation Guide
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Washbasins;