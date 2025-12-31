import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiChevronRight, FiX, FiFilter, FiCheck, FiShoppingCart, FiEye, FiDroplet } from "react-icons/fi";
import { useCart } from "../cart/CartContext";
import { Link } from "react-router-dom";

// Import images from assets folder
import sanitary1 from "../../assets/sanitory (1).avif";
import sanitary2 from "../../assets/sanitory (1).jpg";
import sanitary3 from "../../assets/sanitory (6).jpg";
import sanitary4 from "../../assets/sanitory (2).jpg";
import sanitary5 from "../../assets/sanitory (2).webp";
import sanitary6 from "../../assets/sanitory (7).jpg";
import sanitary7 from "../../assets/sanitory (5).jpg";
import sanitary8 from "../../assets/sanitory (4).jpg";
import heroImage from "../../assets/sanitory (1).jpg";

const products = [
  { id: 1, title: "Wall-Hung Toilet", type: "Toilets", installation: "Wall-mounted", style: "Modern", finish: "White", material: "Vitreous China", dimensions: "50x35x40 cm", waterEfficiency: "4.5L", rating: "A++", price: "$450", sku: "WH-1001", description: "Sleek wall-hung toilet with soft-close seat.", features: ["Soft-close", "Rimless", "Quick-release"], images: [sanitary1] },
  { id: 2, title: "Floor Bidet", type: "Bidets", installation: "Floor-standing", style: "Classic", finish: "White", material: "Porcelain", dimensions: "55x35x40 cm", waterEfficiency: "4L", rating: "A+", price: "$380", sku: "FB-2001", description: "Elegant floor-standing bidet.", features: ["Overflow", "Easy clean", "Standard"], images: [sanitary2] },
  { id: 3, title: "Back-to-Wall Toilet", type: "Toilets", installation: "Back-to-wall", style: "Modern", finish: "Black", material: "Vitreous China", dimensions: "48x36x39 cm", waterEfficiency: "4.5L", rating: "A++", price: "$420", sku: "BTW-3001", description: "Compact back-to-wall toilet.", features: ["Concealed", "Space saving", "Quiet"], images: [sanitary3] },
  { id: 4, title: "Commercial Urinal", type: "Urinals", installation: "Wall-mounted", style: "Modern", finish: "White", material: "Ceramic", dimensions: "35x30x55 cm", waterEfficiency: "2L", rating: "A+++", price: "$250", sku: "UR-4001", description: "Hygienic urinal for spaces.", features: ["Water saving", "Auto flush", "Durable"], images: [sanitary4] },
  { id: 5, title: "Smart Toilet", type: "Toilets", installation: "Floor-standing", style: "Modern", finish: "Chrome", material: "Ceramic", dimensions: "52x38x42 cm", waterEfficiency: "3.5L", rating: "A+++", price: "$850", sku: "ST-5001", description: "Advanced smart toilet.", features: ["Bidet", "Seat warmer", "Auto"], images: [sanitary5] },
  { id: 6, title: "Concealed Cistern", type: "Cisterns", installation: "In-wall", style: "Modern", finish: "White", material: "Plastic", dimensions: "80x20x30 cm", waterEfficiency: "6L", rating: "A++", price: "$180", sku: "CC-6001", description: "High-efficiency cistern.", features: ["Dual flush", "Quiet", "Adjustable"], images: [sanitary6] },
  { id: 7, title: "Wall Bidet", type: "Bidets", installation: "Wall-mounted", style: "Modern", finish: "White", material: "Vitreous China", dimensions: "45x32x38 cm", waterEfficiency: "3.8L", rating: "A+", price: "$320", sku: "WB-7001", description: "Space-saving wall bidet.", features: ["Wall hung", "Rimless", "Modern"], images: [sanitary7] },
  { id: 8, title: "Toilet Seat Set", type: "Accessories", installation: "Universal", style: "Modern", finish: "Soft-close", material: "Plastic", dimensions: "Varies", waterEfficiency: "N/A", rating: "N/A", price: "$65", sku: "TS-8001", description: "Premium soft-close seat.", features: ["Soft-close", "Quick release", "Antibacterial"], images: [sanitary8] },
];

const Sanitaryware = () => {
  const [modalProduct, setModalProduct] = useState(null);
  const [filters, setFilters] = useState({ type: "all", installation: "all", price: "all" });
  const [activeImage, setActiveImage] = useState(0);
  
  const { addToCart, cartCount } = useCart();

  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  const filteredProducts = products.filter((p) => {
    const typeMatch = filters.type === "all" || p.type === filters.type;
    const installMatch = filters.installation === "all" || p.installation === filters.installation;
    const priceMatch = filters.price === "all" || (filters.price === "low" && parseFloat(p.price.replace('$', '')) < 300) || (filters.price === "mid" && parseFloat(p.price.replace('$', '')) <= 500) || (filters.price === "high" && parseFloat(p.price.replace('$', '')) > 500);
    return typeMatch && installMatch && priceMatch;
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

      {/* Hero */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <img src={heroImage} alt="Sanitaryware" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 bg-gradient-to-t from-black/70 to-transparent">
          <div className="absolute inset-0 bg-black/20"></div>

          <p className="text-sm md:text-lg mb-2 tracking-widest">BATHROOM ESSENTIALS</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">SANITARYWARE</h1>
          <p className="text-lg max-w-2xl">Premium bathroom fixtures</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6 text-gray-600 text-sm flex items-center gap-1">
        <span className="hover:text-gray-900 cursor-pointer">Home</span><FiChevronRight />
        <span className="hover:text-gray-900 cursor-pointer">Products</span><FiChevronRight />
        <span className="font-semibold text-gray-900">Sanitaryware</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8 mb-16">
        {/* Filters */}
        <div className="lg:w-1/4">
          <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-6">
            <div className="flex items-center gap-2 mb-6"><FiFilter /><h3 className="text-xl font-bold">Filters</h3></div>
            
            <div className="space-y-6">
              {["Type", "Installation", "Price"].map((filterType) => (
                <div key={filterType}>
                  <label className="block text-sm font-medium text-gray-700 mb-3">{filterType}</label>
                  <div className="space-y-2">
                    {filterType === "Type" && ["all", "Toilets", "Bidets", "Urinals", "Cisterns", "Accessories"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, type: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.type === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.type === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Types" : option}
                      </button>
                    ))}
                    {filterType === "Installation" && ["all", "Wall-mounted", "Floor-standing", "Back-to-wall", "In-wall", "Universal"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, installation: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.installation === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.installation === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All" : option}
                      </button>
                    ))}
                    {filterType === "Price" && ["all", "low", "mid", "high"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, price: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.price === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.price === option ? "opacity-100" : "opacity-0"}`} />
                        {option === "all" ? "All Prices" : option === "low" ? "Under $300" : option === "mid" ? "$300-$500" : "Over $500"}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <div className="pt-6 border-t">
                <div className="flex items-center gap-2 mb-4"><FiDroplet className="text-blue-600" /><h4 className="font-semibold">Water Efficiency</h4></div>
                <div className="space-y-2">
                  {["A+++ (Best)", "A++ (Excellent)", "A+ (Very Good)"].map((rating, idx) => (
                    <div key={rating} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">{rating}</span>
                      <div className="flex">{[...Array(3)].map((_, i) => (<div key={i} className={`w-3 h-3 rounded-full mx-0.5 ${i < 3 - idx ? "bg-green-500" : "bg-gray-300"}`}></div>))}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:w-3/4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{filteredProducts.length} Sanitary Products</h2>
            <p className="text-gray-600">Premium bathroom fixtures</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, idx) => (
              <div key={product.id} data-aos="fade-up" data-aos-delay={idx * 50} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                
                <div className="relative overflow-hidden h-56">
                  <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" onClick={() => setModalProduct(product)} />
                  <div className={`absolute top-3 left-3 ${product.type === "Toilets" ? "bg-blue-500" : product.type === "Bidets" ? "bg-green-500" : product.type === "Urinals" ? "bg-purple-500" : "bg-amber-500"} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                    {product.type}
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
                      <div className={`px-2 py-1 rounded-full text-xs ${product.rating === "A+++" ? "bg-green-100 text-green-700" : product.rating === "A++" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"}`}>
                        {product.rating}
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
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${modalProduct.type === "Toilets" ? "bg-blue-100 text-blue-700" : modalProduct.type === "Bidets" ? "bg-green-100 text-green-700" : "bg-purple-100 text-purple-700"}`}>
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
                      <FiDroplet className="text-gray-900" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Water Efficiency: {modalProduct.waterEfficiency}</h4>
                        <p className="text-sm text-gray-900">Rating: {modalProduct.rating}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Specifications</h3>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {["Material", "Dimensions", "Installation", "Style", "Finish", "Water"].map((key) => (
                    <div key={key} className="bg-white p-3 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">{key}</p>
                      <p className="font-medium text-gray-900 text-sm">{modalProduct[key.toLowerCase().replace(/ /g, "")] || modalProduct.waterEfficiency}</p>
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
                
                <div className="flex gap-3">
                  <button 
                    className="flex-1 bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-blue-700 flex items-center justify-center gap-2 text-sm" 
                    onClick={(e) => handleAddToCart(modalProduct, e)}
                  >
                    <FiShoppingCart size={16} /> Add to Cart
                  </button>
                  <button className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-xl font-medium hover:bg-blue-50 text-sm">
                    Request Quote
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

export default Sanitaryware;