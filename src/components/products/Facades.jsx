import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiChevronRight, FiFilter, FiCheck, FiShoppingCart, FiEye, FiShield, FiDroplet, FiThermometer, FiX } from "react-icons/fi";
import { useCart } from "../cart/CartContext";
import { Link } from "react-router-dom";

// Import local images
import facade1 from "../../assets/facade (8).jpg";
import facade2 from "../../assets/facade (1).avif";
import facade3 from "../../assets/facade (3).jpg";
import facade4 from "../../assets/facade (7).jpg";
import facade5 from "../../assets/facade (5).jpg";
import facade6 from "../../assets/facade (6).jpg";
import facade7 from "../../assets/facade (4).jpg";
import facade8 from "../../assets/facade (2).jpg";
import facadeHero from "../../assets/facade (1).jpg";

const facadeProducts = [
  { id: 1, title: "Ceramic Panel", type: "Panels", material: "Ceramic", finish: "Matte White", dimensions: "120 x 60 x 1.2 cm", installation: "Adhered", weight: "15kg", waterAbsorption: "0.5%", fireRating: "A1", price: "$80/m²", sku: "FP-1001", features: ["Low absorption", "Weather proof", "Easy install"], images: [facade1] },
  { id: 2, title: "Stone Panel", type: "Panels", material: "Natural Stone", finish: "Natural Beige", dimensions: "150 x 50 x 2 cm", installation: "Anchored", weight: "25kg", waterAbsorption: "1%", fireRating: "A2", price: "$120/m²", sku: "FP-2001", features: ["Natural look", "Durable", "Unique pattern"], images: [facade2] },
  { id: 3, title: "Ventilated Façade System", type: "Systems", material: "Composite", finish: "Gray Matte", dimensions: "200 x 100 x 2.5 cm", installation: "Ventilated", weight: "20kg", waterAbsorption: "0.8%", fireRating: "A2", price: "$250/m²", sku: "FP-3001", features: ["Thermal insulation", "Air gap", "Energy saving"], images: [facade3] },
  { id: 4, title: "Decorative Wall Cladding", type: "Cladding", material: "Porcelain", finish: "Textured White", dimensions: "100 x 50 x 1.5 cm", installation: "Adhered", weight: "12kg", waterAbsorption: "0.6%", fireRating: "A1", price: "$90/m²", sku: "FP-4001", features: ["Decorative", "Easy clean", "UV resistant"], images: [facade4] },
  { id: 5, title: "Large Format Porcelain Panel", type: "Panels", material: "Porcelain", finish: "Black Matt", dimensions: "300 x 150 x 1 cm", installation: "Mechanical", weight: "30kg", waterAbsorption: "0.3%", fireRating: "A1", price: "$150/m²", sku: "FP-5001", features: ["Large format", "Modern look", "Low maintenance"], images: [facade5] },
  { id: 6, title: "Composite Façade Panel", type: "Panels", material: "Composite", finish: "Wood Effect", dimensions: "120 x 60 x 2 cm", installation: "Ventilated", weight: "18kg", waterAbsorption: "0.4%", fireRating: "A2", price: "$110/m²", sku: "FP-6001", features: ["Wood effect", "Lightweight", "Weather proof"], images: [facade6] },
  { id: 7, title: "Stone Cladding System", type: "Systems", material: "Natural Stone", finish: "Sandstone", dimensions: "60 x 40 x 3 cm", installation: "Adhered", weight: "35kg", waterAbsorption: "1.2%", fireRating: "A2", price: "$180/m²", sku: "FP-7001", features: ["Natural stone", "Rustic look", "Durable"], images: [facade7] },
  { id: 8, title: "Metallic Facade Panel", type: "Panels", material: "Metal Composite", finish: "Brushed Aluminum", dimensions: "100 x 100 x 0.8 cm", installation: "Mechanical", weight: "8kg", waterAbsorption: "0%", fireRating: "A1", price: "$140/m²", sku: "FP-8001", features: ["Modern", "Lightweight", "Corrosion proof"], images: [facade8] },
];

const Facades = () => {
  const [modalProduct, setModalProduct] = useState(null);
  const [filters, setFilters] = useState({ material: "all", installation: "all", type: "all", price: "all" });
  const { addToCart, cartCount } = useCart();

  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  const filteredProducts = facadeProducts.filter((p) => {
    const materialMatch = filters.material === "all" || p.material.includes(filters.material);
    const installMatch = filters.installation === "all" || p.installation === filters.installation;
    const typeMatch = filters.type === "all" || p.type === filters.type;
    const priceMatch = filters.price === "all" || 
      (filters.price === "low" && parseFloat(p.price.replace('$', '').replace('/m²', '')) < 100) ||
      (filters.price === "mid" && parseFloat(p.price.replace('$', '').replace('/m²', '')) <= 150) ||
      (filters.price === "high" && parseFloat(p.price.replace('$', '').replace('/m²', '')) > 150);
    return materialMatch && installMatch && typeMatch && priceMatch;
  });

  const handleAddToCart = (product, e) => {
    e?.stopPropagation();
    e?.preventDefault();
    
    console.log('Facades: Adding to cart:', product); // Debug log
    
    // Prepare product data for cart
    const cartProduct = {
      id: product.id,
      title: product.title,
      price: product.price, // Pass as string, CartContext will convert
      image: product.images[0],
      material: product.material,
      type: product.finish, // Use 'finish' as type
      sku: product.sku,
      unit: '/m²'
    };
    
    console.log('Facades: Prepared cart product:', cartProduct); // Debug log
    
    addToCart(cartProduct);
    
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Floating Cart Button */}
      <Link to="/cart" className="fixed top-6 right-6 z-40">
        <div className="relative">
          <button className="bg-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105">
            <FiShoppingCart className="text-gray-900 text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </Link>

      <div className="relative w-full h-[80vh] overflow-hidden">
        <img src={facadeHero} alt="Facades" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 bg-gradient-to-t from-black/70 to-transparent">
          <div className="absolute inset-0 bg-black/20"></div>

          <p className="text-sm md:text-lg mb-2 tracking-widest">ARCHITECTURAL EXTERIORS</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">FACADES</h1>
          <p className="text-lg max-w-2xl">External building cladding and panels for architectural design</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 text-gray-600 text-sm flex items-center gap-1">
        <span className="hover:text-gray-900 cursor-pointer">Home</span><FiChevronRight />
        <span className="hover:text-gray-900 cursor-pointer">Products</span><FiChevronRight />
        <span className="font-semibold text-gray-900">Facades</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8 mb-16">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-6">
            <div className="flex items-center gap-2 mb-6"><FiFilter /><h3 className="text-xl font-bold">Filters</h3></div>
            
            <div className="space-y-6">
              {["Material", "Installation", "Product Type", "Price"].map((filterType) => (
                <div key={filterType}>
                  <label className="block text-sm font-medium text-gray-700 mb-3">{filterType}</label>
                  <div className="space-y-2">
                    {filterType === "Material" && ["all", "Ceramic", "Porcelain", "Natural Stone", "Composite", "Metal"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, material: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.material === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.material === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Materials" : option}
                      </button>
                    ))}
                    {filterType === "Installation" && ["all", "Adhered", "Anchored", "Ventilated", "Mechanical"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, installation: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.installation === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.installation === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Installations" : option}
                      </button>
                    ))}
                    {filterType === "Product Type" && ["all", "Panels", "Systems", "Cladding"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, type: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.type === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.type === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Types" : option}
                      </button>
                    ))}
                    {filterType === "Price" && ["all", "low", "mid", "high"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, price: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.price === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.price === option ? "opacity-100" : "opacity-0"}`} />
                        {option === "all" ? "All Prices" : option === "low" ? "Under $100/m²" : option === "mid" ? "$100-$150/m²" : "Over $150/m²"}
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{filteredProducts.length} Facade Products</h2>
            <p className="text-gray-600">Architectural cladding and panel systems for exteriors</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, idx) => (
              <div key={product.id} data-aos="fade-up" data-aos-delay={idx * 50} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                
                <div className="relative overflow-hidden h-56">
                  
                  <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" onClick={() => setModalProduct(product)} />
                  
                  <div className={`absolute top-3 left-3 ${product.material === "Ceramic" || product.material === "Porcelain" ? "bg-gray-900" : product.material === "Natural Stone" ? "bg-gray-900" : product.material === "Composite" ? "bg-gray-900" : "bg-gray-900"} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                    {product.material}
                  </div>
                  
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                    {product.price}
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="mb-3 cursor-pointer" onClick={() => setModalProduct(product)}>
                    <h3 className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors mb-1">{product.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">{product.type}</div>
                      <div className="px-2 py-1 rounded-full text-xs bg-blue-100 text-gray-900">
                        {product.installation}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{product.dimensions}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.features.slice(0, 2).map((feature, i) => (
                      <div key={i} className="flex items-center gap-1 text-sm">
                        <FiCheck className="text-gray-900" size={12} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gray-900 text-white py-2.5 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-1 text-sm" onClick={(e) => handleAddToCart(product, e)}>
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
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${modalProduct.material === "Ceramic" || modalProduct.material === "Porcelain" ? "bg-blue-100 text-blue-700" : modalProduct.material === "Natural Stone" ? "bg-green-100 text-green-700" : modalProduct.material === "Composite" ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-700"}`}>
                    {modalProduct.material}
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
                    <div className="grid grid-cols-3 gap-3">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                          <FiShield className="text-gray-900" />
                        </div>
                        <p className="text-xs font-medium text-blue-800">Fire Rating</p>
                        <p className="text-sm font-bold text-gray-900">{modalProduct.fireRating}</p>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                          <FiDroplet className="text-gray-900" />
                        </div>
                        <p className="text-xs font-medium text-gray-800">Water Absorb</p>
                        <p className="text-sm font-bold text-gray-900">{modalProduct.waterAbsorption}</p>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                          <FiThermometer className="text-gray-900" />
                        </div>
                        <p className="text-xs font-medium text-gray-900">Weight</p>
                        <p className="text-sm font-bold text-gray-900">{modalProduct.weight}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {["Material", "Dimensions", "Finish", "Installation", "Type", "Weight"].map((key) => (
                    <div key={key} className="bg-white p-3 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">{key}</p>
                      <p className="font-medium text-gray-900 text-sm">{modalProduct[key.toLowerCase()]}</p>
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
                  <h4 className="font-semibold text-gray-900 mb-2">Technical Data</h4>
                  <div className="bg-white p-3 rounded-lg text-sm text-gray-700">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="font-medium">Water Absorption: <span className="font-normal">{modalProduct.waterAbsorption}</span></p>
                        <p className="font-medium">Fire Rating: <span className="font-normal">{modalProduct.fireRating}</span></p>
                      </div>
                      <div>
                        <p className="font-medium">Weight: <span className="font-normal">{modalProduct.weight}</span></p>
                        <p className="font-medium">Installation: <span className="font-normal">{modalProduct.installation}</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-blue-700 flex items-center justify-center gap-2 text-sm" onClick={(e) => handleAddToCart(modalProduct, e)}>
                    <FiShoppingCart size={16} /> Add to Cart
                  </button>
                  <button className="flex-1 border border-gray-900 text-blue-600 py-3 rounded-xl font-medium hover:bg-blue-50 text-sm">
                    Tech Specs PDF
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

export default Facades;