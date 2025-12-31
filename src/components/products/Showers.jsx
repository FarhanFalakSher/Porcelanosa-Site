import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiChevronRight, FiFilter, FiCheck, FiShoppingCart, FiEye, FiDroplet, FiMaximize2, FiX } from "react-icons/fi";
import { useCart } from "../cart/CartContext";
import { Link } from "react-router-dom";

// Import images from assets folder
import showers1 from "../../assets/showers (7).jpg";
import showers2 from "../../assets/showers (2).jpg";
import showers3 from "../../assets/showers (6).jpg";
import showers4 from "../../assets/showers (4).jpg";
import showers5 from "../../assets/showers (3).jpg";
import showers6 from "../../assets/showers (8).jpg";
import showers7 from "../../assets/showers (9).jpg";
import showers8 from "../../assets/showers (5).jpg";
import heroImage from "../../assets/showers (1).jpg";

const showerProducts = [
  { id: 1, title: "Built-in Shower Tray", type: "Shower Trays", installation: "Built-in", finish: "White Matte", material: "Stone Composite", dimensions: "120 x 80 x 5 cm", technical: "Flow rate 12L/min", price: "$350", sku: "ST-1001", features: ["Non-slip surface", "Easy cleaning", "Waterproof"], images: [showers1] },
  { id: 2, title: "Frameless Shower Screen", type: "Shower Screens", installation: "Wall-mounted", finish: "Transparent", material: "Tempered Glass", dimensions: "90 x 200 cm", technical: "Sliding system", price: "$450", sku: "SS-2001", features: ["Frameless design", "Safety glass", "Easy install"], images: [showers2] },
  { id: 3, title: "Shower Column with Thermostatic Mixer", type: "Shower Columns", installation: "Wall-mounted", finish: "Chrome", material: "Chrome-plated Metal", dimensions: "50 x 20 x 220 cm", technical: "Thermostatic control", price: "$650", sku: "SC-3001", features: ["Multi-function", "Temperature control", "Pressure balance"], images: [showers3] },
  { id: 4, title: "Shower Drain Grate", type: "Accessories", installation: "Floor-mounted", finish: "Brushed", material: "Stainless Steel", dimensions: "100 x 5 cm", technical: "Waterproof seal", price: "$120", sku: "AC-4001", features: ["Anti-clog", "Easy clean", "Durable"], images: [showers4] },
  { id: 5, title: "Rain Shower Head", type: "Shower Heads", installation: "Ceiling-mounted", finish: "Black Matte", material: "Stainless Steel", dimensions: "30 cm diameter", technical: "Flow rate 15L/min", price: "$180", sku: "SH-5001", features: ["Rain effect", "Water saving", "Adjustable"], images: [showers5] },
  { id: 6, title: "Walk-in Shower System", type: "Complete Systems", installation: "Floor-mounted", finish: "Chrome & Glass", material: "Multiple", dimensions: "Custom sizes", technical: "Complete kit", price: "$950", sku: "WS-6001", features: ["Walk-in design", "Complete kit", "Modern look"], images: [showers6] },
  { id: 7, title: "Thermostatic Mixer", type: "Thermostatic Mixers", installation: "Wall-mounted", finish: "Brushed Nickel", material: "Brass", dimensions: "15 x 10 x 12 cm", technical: "Pressure balanced", price: "$280", sku: "TM-7001", features: ["Temperature lock", "Anti-scald", "Easy adjust"], images: [showers7] },
  { id: 8, title: "Shower Panel with LED", type: "Shower Columns", installation: "Wall-mounted", finish: "Black & Chrome", material: "Acrylic & Metal", dimensions: "60 x 25 x 220 cm", technical: "LED lighting", price: "$750", sku: "SP-8001", features: ["LED lights", "Body jets", "Digital control"], images: [showers8] },
];

const Showers = () => {
  const [modalProduct, setModalProduct] = useState(null);
  const [filters, setFilters] = useState({ type: "all", finish: "all", installation: "all", price: "all" });
  const [activeImage, setActiveImage] = useState(0);
  
  const { addToCart, cartCount } = useCart();

  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  const filteredProducts = showerProducts.filter((p) => {
    const typeMatch = filters.type === "all" || p.type === filters.type;
    const finishMatch = filters.finish === "all" || p.finish.includes(filters.finish);
    const installMatch = filters.installation === "all" || p.installation === filters.installation;
    const priceMatch = filters.price === "all" || 
      (filters.price === "low" && parseFloat(p.price.replace('$', '')) < 200) ||
      (filters.price === "mid" && parseFloat(p.price.replace('$', '')) <= 500) ||
      (filters.price === "high" && parseFloat(p.price.replace('$', '')) > 500);
    return typeMatch && finishMatch && installMatch && priceMatch;
  });

  const handleAddToCart = (product, e) => {
    e?.stopPropagation();
    const price = parseFloat(product.price.replace('$', ''));
    
    addToCart({
      id: product.id,
      name: product.title,
      price: price,
      image: product.images[0],
      series: product.type,
      finish: product.material
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
      <div className="relative w-full h-[80vh] overflow-hidden">
        <img src={heroImage} alt="Showers" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 bg-gradient-to-t from-black/70 to-transparent">
          <div className="absolute inset-0 bg-black/30"></div>

          <p className="text-sm md:text-lg mb-2 tracking-widest">BATHROOM SHOWER SYSTEMS</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">SHOWERS</h1>
          <p className="text-lg max-w-2xl">Premium shower systems for luxury bathing experience</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6 text-gray-600 text-sm flex items-center gap-1">
        <span className="hover:text-gray-900 cursor-pointer">Home</span><FiChevronRight />
        <span className="hover:text-gray-900 cursor-pointer">Products</span><FiChevronRight />
        <span className="font-semibold text-gray-900">Showers</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8 mb-16">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-6">
            <div className="flex items-center gap-2 mb-6"><FiFilter /><h3 className="text-xl font-bold">Filters</h3></div>
            
            <div className="space-y-6">
              {["Product Type", "Finish", "Installation", "Price"].map((filterType) => (
                <div key={filterType}>
                  <label className="block text-sm font-medium text-gray-700 mb-3">{filterType}</label>
                  <div className="space-y-2">
                    {filterType === "Product Type" && ["all", "Shower Trays", "Shower Screens", "Shower Columns", "Shower Heads", "Thermostatic Mixers", "Complete Systems", "Accessories"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, type: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.type === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.type === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Types" : option}
                      </button>
                    ))}
                    {filterType === "Finish" && ["all", "Chrome", "White Matte", "Black Matte", "Transparent", "Brushed", "Brushed Nickel"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, finish: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.finish === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.finish === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Finishes" : option}
                      </button>
                    ))}
                    {filterType === "Installation" && ["all", "Wall-mounted", "Floor-mounted", "Built-in", "Ceiling-mounted"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, installation: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.installation === option ? "bg-blue-50 text-gray-900 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.installation === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Installations" : option}
                      </button>
                    ))}
                    {filterType === "Price" && ["all", "low", "mid", "high"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, price: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.price === option ? "bg-blue-50 text-gray-900 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.price === option ? "opacity-100" : "opacity-0"}`} />
                        {option === "all" ? "All Prices" : option === "low" ? "Under $200" : option === "mid" ? "$200-$500" : "Over $500"}
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{filteredProducts.length} Shower Products</h2>
            <p className="text-gray-600">Premium shower systems and components</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, idx) => (
              <div key={product.id} data-aos="fade-up" data-aos-delay={idx * 50} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                
                <div className="relative overflow-hidden h-56">
                  <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" onClick={() => setModalProduct(product)} />
                  <div className={`absolute top-3 left-3 ${product.type === "Shower Trays" ? "bg-gray-900" : product.type === "Shower Screens" ? "bg-gray-900" : product.type === "Shower Columns" ? "bg--gray-900" : "bg-gray-900"} text-white  bg-gray-900 px-3 py-1 rounded-full text-xs font-medium`}>
                    {product.type.split(' ')[0]}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                    {product.price}
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="mb-3 cursor-pointer" onClick={() => setModalProduct(product)}>
                    <h3 className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors mb-1">{product.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">{product.installation}</div>
                      <div className="px-2 py-1 rounded-full text-xs bg-blue-100 text-gray-900">
                        <FiDroplet className="inline mr-1" size={10} /> {product.technical.split(' ')[0]}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{product.material} • {product.finish}</p>
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
                      onClick={(e) => handleAddToCart(product, e)}
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
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${modalProduct.type === "Shower Trays" ? "bg-blue-100 text-blue-700" : modalProduct.type === "Shower Screens" ? "bg-green-100 text-green-700" : modalProduct.type === "Shower Columns" ? "bg-purple-100 text-purple-700" : "bg-amber-100 text-amber-700"}`}>
                    {modalProduct.type}
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
                    <div className="flex items-center gap-2">
                      <FiDroplet className="text-blue-600" />
                      <div>
                        <h4 className="font-semibold text-blue-800">Technical Specifications</h4>
                        <p className="text-sm text-blue-600">{modalProduct.technical}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Product Details</h3>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {["Material", "Dimensions", "Installation", "Finish", "Type"].map((key) => (
                    <div key={key} className="bg-white p-3 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">{key}</p>
                      <p className="font-medium text-gray-900 text-sm">{modalProduct[key.toLowerCase()] || modalProduct.type}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {modalProduct.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white p-2 rounded-lg">
                        <FiCheck className="text-green-500" size={12} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Installation Guide</h4>
                  <div className="bg-white p-3 rounded-lg text-sm text-gray-700">
                    <p>• Requires professional installation</p>
                    <p>• Follow manufacturer guidelines</p>
                    <p>• Ensure proper waterproofing</p>
                    <p>• Check water pressure compatibility</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button 
                    className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 flex items-center justify-center gap-2 text-sm" 
                    onClick={(e) => handleAddToCart(modalProduct, e)}
                  >
                    <FiShoppingCart size={16} /> Add to Cart
                  </button>
                  <button className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-xl font-medium hover:bg-blue-50 text-sm">
                    Download Specs
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

export default Showers;