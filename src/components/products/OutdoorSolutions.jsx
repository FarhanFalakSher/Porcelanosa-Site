import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiChevronRight, FiFilter, FiCheck, FiShoppingCart, FiEye, FiShield, FiDroplet, FiThermometer, FiX } from "react-icons/fi";
import { useCart } from "../cart/CartContext";
import { Link } from "react-router-dom";

const outdoorProducts = [
  { id: 1, title: "Porcelain Outdoor Tile", type: "Tile", material: "Porcelain", finish: "Textured Gray", dimensions: "60 x 60 x 2 cm", installation: "Adhered", weight: "18kg", waterResistance: "Waterproof", durability: "Frost & UV Resistant", price: "$50/m²", sku: "OT-1001", features: ["Anti-slip", "Weather proof", "Easy install"], images: ["https://images.unsplash.com/photo-1621370547872-6b1e6ab6eb06?w=800&fit=crop"] },
  { id: 2, title: "Wooden Decking Plank", type: "Deck", material: "Wood", finish: "Natural Oak", dimensions: "200 x 20 x 2.5 cm", installation: "Mechanical", weight: "12kg", waterResistance: "Water-resistant", durability: "Weather & Slip Resistant", price: "$35/m²", sku: "OD-2001", features: ["Natural look", "Anti-slip", "Easy maintain"], images: ["https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&fit=crop"] },
  { id: 3, title: "Outdoor Storage Cabinet", type: "Furniture", material: "Composite", finish: "Anthracite", dimensions: "80 x 40 x 90 cm", installation: "Assembly", weight: "45kg", waterResistance: "Waterproof", durability: "UV & Water Resistant", price: "$450", sku: "OF-3001", features: ["Weather proof", "Secure storage", "Easy assembly"], images: ["https://images.unsplash.com/photo-1616137422495-d1e71e0c6f53?w=800&fit=crop"] },
  { id: 4, title: "Swimming Pool Tile", type: "Tile", material: "Stone", finish: "Beige Textured", dimensions: "100 x 50 x 2 cm", installation: "Adhered", weight: "22kg", waterResistance: "Waterproof", durability: "Slip & Frost Proof", price: "$90/m²", sku: "OP-4001", features: ["Anti-slip", "Chemical resistant", "Pool safe"], images: ["https://images.unsplash.com/photo-1545324412-515787f389c9?w=800&fit=crop"] },
  { id: 5, title: "Composite Decking Board", type: "Deck", material: "Composite", finish: "Wood Effect", dimensions: "300 x 15 x 2 cm", installation: "Mechanical", weight: "10kg", waterResistance: "Waterproof", durability: "No Rot & Fade", price: "$65/m²", sku: "OC-5001", features: ["No maintenance", "Splinter free", "Long warranty"], images: ["https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&fit=crop"] },
  { id: 6, title: "Patio Paving Slab", type: "Tile", material: "Concrete", finish: "Charcoal", dimensions: "60 x 60 x 4 cm", installation: "Loose Lay", weight: "35kg", waterResistance: "Permeable", durability: "Freeze-Thaw", price: "$40/m²", sku: "OP-6001", features: ["Permeable", "Heavy duty", "Modern finish"], images: ["https://images.unsplash.com/photo-1621370547872-6b1e6ab6eb06?w=800&fit=crop"] },
  { id: 7, title: "Outdoor Planter Box", type: "Furniture", material: "Wood", finish: "Cedar", dimensions: "120 x 40 x 50 cm", installation: "Assembly", weight: "28kg", waterResistance: "Treated", durability: "Rot Resistant", price: "$220", sku: "OF-7001", features: ["Raised bed", "Natural wood", "Drainage"], images: ["https://images.unsplash.com/photo-1616137422495-d1e71e0c6f53?w=800&fit=crop"] },
  { id: 8, title: "Pool Coping Stone", type: "Tile", material: "Natural Stone", finish: "Travertine", dimensions: "100 x 30 x 5 cm", installation: "Adhered", weight: "42kg", waterResistance: "Waterproof", durability: "Non-slip", price: "$120/m²", sku: "OP-8001", features: ["Non-slip", "Heat resistant", "Elegant finish"], images: ["https://images.unsplash.com/photo-1545324412-515787f389c9?w=800&fit=crop"] },
];

const OutdoorSolutions = () => {
  const [modalProduct, setModalProduct] = useState(null);
  const [filters, setFilters] = useState({ material: "all", type: "all", price: "all" });
  const { addToCart, cartCount } = useCart();

  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  const filteredProducts = outdoorProducts.filter((p) => {
    const materialMatch = filters.material === "all" || p.material.includes(filters.material);
    const typeMatch = filters.type === "all" || p.type === filters.type;
    const priceMatch = filters.price === "all" || 
      (filters.price === "low" && parseFloat(p.price.replace('$', '').replace('/m²', '')) < 50) ||
      (filters.price === "mid" && parseFloat(p.price.replace('$', '').replace('/m²', '')) <= 100) ||
      (filters.price === "high" && parseFloat(p.price.replace('$', '').replace('/m²', '')) > 100);
    return materialMatch && typeMatch && priceMatch;
  });

  const handleAddToCart = (product, e) => {
    e?.stopPropagation();
    e?.preventDefault();
    
    console.log('Outdoor: Adding to cart:', product);
    
    // Prepare product data for cart
    const cartProduct = {
      id: product.id,
      title: product.title,
      price: product.price, // Pass as string, CartContext will convert
      image: product.images[0],
      material: product.material,
      type: product.type, // Use 'type' field for Outdoor products
      finish: product.finish,
      sku: product.sku,
      unit: product.price.includes('/m²') ? '/m²' : 'each'
    };
    
    console.log('Outdoor: Prepared cart product:', cartProduct);
    
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

      {/* Hero Banner */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1621370547872-6b1e6ab6eb06?w=1920&fit=crop" alt="Outdoor" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 bg-gradient-to-t from-black/70 to-transparent">
          <p className="text-sm md:text-lg mb-2 tracking-widest">EXTERIOR LANDSCAPING</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">OUTDOOR SOLUTIONS</h1>
          <p className="text-lg max-w-2xl">Durable materials for patios, terraces, and exterior landscaping</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6 text-gray-600 text-sm flex items-center gap-1">
        <span className="hover:text-gray-900 cursor-pointer">Home</span><FiChevronRight />
        <span className="hover:text-gray-900 cursor-pointer">Products</span><FiChevronRight />
        <span className="font-semibold text-gray-900">Outdoor</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8 mb-16">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-6">
            <div className="flex items-center gap-2 mb-6"><FiFilter /><h3 className="text-xl font-bold">Filters</h3></div>
            
            <div className="space-y-6">
              {["Material", "Product Type", "Price"].map((filterType) => (
                <div key={filterType}>
                  <label className="block text-sm font-medium text-gray-700 mb-3">{filterType}</label>
                  <div className="space-y-2">
                    {filterType === "Material" && ["all", "Porcelain", "Stone", "Wood", "Composite", "Concrete"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, material: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.material === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.material === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Materials" : option}
                      </button>
                    ))}
                    {filterType === "Product Type" && ["all", "Tile", "Deck", "Furniture"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, type: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.type === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.type === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Types" : option}
                      </button>
                    ))}
                    {filterType === "Price" && ["all", "low", "mid", "high"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, price: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.price === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.price === option ? "opacity-100" : "opacity-0"}`} />
                        {option === "all" ? "All Prices" : option === "low" ? "Under $50/m²" : option === "mid" ? "$50-$100/m²" : "Over $100/m²"}
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{filteredProducts.length} Outdoor Products</h2>
            <p className="text-gray-600">Durable and weather-resistant materials for outdoor spaces</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, idx) => (
              <div key={product.id} data-aos="fade-up" data-aos-delay={idx * 50} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                
                <div className="relative overflow-hidden h-56">
                  <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" onClick={() => setModalProduct(product)} />
                  <div className={`absolute top-3 left-3 ${product.material === "Porcelain" ? "bg-gray-900" : product.material === "Stone" ? "bg-gray-900" : product.material === "Wood" ? "bg-gray-900" : product.material === "Composite" ? "bg-gray-900" : "bg-gray-900"} text-white px-3 py-1 rounded-full text-xs font-medium`}>
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
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${modalProduct.material === "Porcelain" ? "bg-blue-100 text-blue-700" : modalProduct.material === "Stone" ? "bg-green-100 text-green-700" : modalProduct.material === "Wood" ? "bg-amber-100 text-amber-700" : modalProduct.material === "Composite" ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-700"}`}>
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
                        <p className="text-xs font-medium text-gray-900">Durability</p>
                        <p className="text-sm font-bold text-gray-900 text-center">{modalProduct.durability.split(' ')[0]}</p>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                          <FiDroplet className="text-gray-900" />
                        </div>
                        <p className="text-xs font-medium text-gray-900">Water</p>
                        <p className="text-sm font-bold text-gray-900">{modalProduct.waterResistance}</p>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                          <FiThermometer className="text-gray-900" />
                        </div>
                        <p className="text-xs font-medium text-gray-800">Weight</p>
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
                        <p className="font-medium">Water Resistance: <span className="font-normal">{modalProduct.waterResistance}</span></p>
                        <p className="font-medium">Durability: <span className="font-normal">{modalProduct.durability}</span></p>
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
                  <button className="flex-1 border border-gray-900 text-gray-900 py-3 rounded-xl font-medium hover:bg-blue-50 text-sm">
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

export default OutdoorSolutions;