import React, { useState } from "react";
import { FiChevronRight, FiCheck, FiShoppingCart, FiEye, FiPackage, FiThermometer, FiDroplet, FiTool, FiX } from "react-icons/fi";
import { useCart } from "../cart/CartContext";
import { Link } from "react-router-dom";

const technicalProducts = [
  { id: 1, title: "High-Strength Adhesive", type: "Adhesive", material: "Chemical", application: "Wall & Floor", price: "$25", sku: "TM-1001", features: ["Waterproof", "Thermal resistant"], dimensions: "1L Tube", coverage: "2-3 m²", weight: "1.2kg", temp: "120°C", water: "Class D", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&fit=crop", comp: "Polymer", install: "Guide" },
  { id: 2, title: "Sealant Waterproofing Kit", type: "Sealant", material: "Polyurethane", application: "Outdoor/Indoor", price: "$40", sku: "TM-2001", features: ["UV-resistant", "Flexible"], dimensions: "500ml Kit", coverage: "5-8 m²", weight: "0.9kg", temp: "-30 to 80°C", water: "Waterproof", img: "https://images.unsplash.com/photo-1591453089546-4c3d5cbec7c9?w=800&fit=crop", comp: "Two-Part", install: "Guide" },
  { id: 3, title: "Metal Profile Support", type: "Profile", material: "Aluminum", application: "Façade", price: "$30", sku: "TM-3001", features: ["Corrosion-proof", "High strength"], dimensions: "2m Length", coverage: "N/A", weight: "2.5kg", temp: "N/A", water: "Corrosion", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&fit=crop", comp: "Alloy", install: "Hardware" },
  { id: 4, title: "Drainage System Kit", type: "Drainage", material: "PVC", application: "Terrace", price: "$80", sku: "TM-4001", features: ["High flow", "UV resistant"], dimensions: "1m² Set", coverage: "1 m²", weight: "3.8kg", temp: "-20 to 60°C", water: "Drainage", img: "https://images.unsplash.com/photo-1591453089546-4c3d5cbec7c9?w=800&fit=crop", comp: "Polymer+Steel", install: "Guide" },
  { id: 5, title: "Epoxy Mortar Mix", type: "Adhesive", material: "Epoxy", application: "Industrial", price: "$65", sku: "TM-5001", features: ["Chemical proof", "High strength"], dimensions: "5kg Kit", coverage: "1.5 m²", weight: "5.5kg", temp: "150°C", water: "Waterproof", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&fit=crop", comp: "Two-Part", install: "Mix guide" },
  { id: 6, title: "Acoustic Sealant", type: "Sealant", material: "Acrylic", application: "Interior", price: "$28", sku: "TM-6001", features: ["Sound proof", "Fire rated"], dimensions: "300ml", coverage: "3-4 m²", weight: "0.5kg", temp: "100°C", water: "Moisture", img: "https://images.unsplash.com/photo-1591453089546-4c3d5cbec7c9?w=800&fit=crop", comp: "Polymer", install: "Caulk gun" },
  { id: 7, title: "Stainless Bracket", type: "Profile", material: "Steel", application: "Structural", price: "$45", sku: "TM-7001", features: ["Rust proof", "Heavy duty"], dimensions: "30x30x2cm", coverage: "N/A", weight: "1.8kg", temp: "N/A", water: "Rust proof", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&fit=crop", comp: "304 Grade", install: "Hardware" },
  { id: 8, title: "Roof Membrane", type: "Drainage", material: "Polymer", application: "Roof", price: "$120", sku: "TM-8001", features: ["Self-adhesive", "Puncture proof"], dimensions: "10x1m Roll", coverage: "10 m²", weight: "12kg", temp: "-40 to 100°C", water: "Waterproof", img: "https://images.unsplash.com/photo-1591453089546-4c3d5cbec7c9?w=800&fit=crop", comp: "Bituminous", install: "Roll" },
];

const TechnicalMaterials = () => {
  const [modalProduct, setModalProduct] = useState(null);
  const [filters, setFilters] = useState({ type: "all", material: "all", price: "all" });
  const { addToCart, cartCount } = useCart();

  const filteredProducts = technicalProducts.filter(p => {
    const typeMatch = filters.type === "all" || p.type === filters.type;
    const materialMatch = filters.material === "all" || p.material.toLowerCase().includes(filters.material);
    const priceMatch = filters.price === "all" || 
      (filters.price === "low" && parseFloat(p.price.slice(1)) < 40) ||
      (filters.price === "mid" && parseFloat(p.price.slice(1)) <= 80) ||
      (filters.price === "high" && parseFloat(p.price.slice(1)) > 80);
    return typeMatch && materialMatch && priceMatch;
  });

  const handleAddToCart = (product, e) => {
    e?.stopPropagation();
    e?.preventDefault();
    
    console.log('Technical: Adding to cart:', product);
    
    // Prepare product data for cart
    const cartProduct = {
      id: product.id,
      title: product.title,
      price: product.price, // Pass as string, CartContext will convert
      image: product.img,
      material: product.material,
      type: product.type,
      application: product.application,
      sku: product.sku,
      unit: 'each' // Technical materials are sold per item
    };
    
    console.log('Technical: Prepared cart product:', cartProduct);
    
    addToCart(cartProduct);
    
    alert(`${product.title} added to cart!`);
  };

  const FilterButton = ({ label, value, current, onClick }) => (
    <button onClick={() => onClick(value)} className={`flex items-center w-full px-3 py-2 rounded-lg text-left transition-colors ${current === value ? "bg-gradient-to-r from-blue-50 to-blue-100/50 text-blue-700 border border-blue-200 shadow-sm" : "hover:bg-gray-50"}`}>
      <FiCheck className={`mr-2 transition-opacity ${current === value ? "opacity-100" : "opacity-0"}`} />{label}
    </button>
  );

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
        <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&fit=crop" alt="Technical Materials" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 bg-gradient-to-t from-black/70 to-transparent">
          <p className="text-sm md:text-lg mb-2 tracking-widest">CONSTRUCTION ESSENTIALS</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">TECHNICAL MATERIALS</h1>
          <p className="text-lg max-w-2xl">Professional construction materials for building projects</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6 text-gray-600 text-sm flex items-center gap-1">
        <span className="hover:text-gray-900 cursor-pointer">Home</span>
        <FiChevronRight className="text-gray-400" />
        <span className="hover:text-gray-900 cursor-pointer">Products</span>
        <FiChevronRight className="text-gray-400" />
        <span className="font-semibold text-gray-900">Technical</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8 mb-16">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-6">
            <h3 className="text-xl font-bold mb-6">Filters</h3>
            <div className="space-y-6">
              {["Type", "Material", "Price"].map((filterType) => (
                <div key={filterType}>
                  <label className="block text-sm font-medium text-gray-700 mb-3">{filterType}</label>
                  <div className="space-y-2">
                    {filterType === "Type" && ["all", "Adhesive", "Sealant", "Profile", "Drainage"].map(opt => (
                      <FilterButton key={opt} label={opt === "all" ? "All Types" : opt} value={opt} current={filters.type} onClick={v => setFilters({...filters, type: v})} />
                    ))}
                    {filterType === "Material" && ["all", "Chemical", "Polyurethane", "Aluminum", "Epoxy", "Steel", "Polymer"].map(opt => (
                      <FilterButton key={opt} label={opt === "all" ? "All Materials" : opt} value={opt} current={filters.material} onClick={v => setFilters({...filters, material: v})} />
                    ))}
                    {filterType === "Price" && ["all", "low", "mid", "high"].map(opt => (
                      <FilterButton key={opt} label={opt === "all" ? "All Prices" : opt === "low" ? "Under $40" : opt === "mid" ? "$40-$80" : "Over $80"} value={opt} current={filters.price} onClick={v => setFilters({...filters, price: v})} />
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{filteredProducts.length} Technical Products</h2>
            <p className="text-gray-600">Professional construction materials — functional, often hidden from view</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, idx) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden h-56">
                  <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" onClick={() => setModalProduct(product)} />
                  <div className={`absolute top-3 left-3 ${product.type === "Adhesive" ? "bg-gray-900" : product.type === "Sealant" ? "bg-gray-900" : product.type === "Profile" ? "bg-gray-900" : "bg-gray-900"} text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm bg-opacity-90`}>
                    {product.type}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900 shadow-sm">
                    {product.price}
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="mb-3 cursor-pointer" onClick={() => setModalProduct(product)}>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">{product.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-900">{product.material}</div>
                      <div className="px-2 py-1 rounded-full text-xs bg-blue-100 text-gray-900">{product.application}</div>
                    </div>
                    <p className="text-sm text-gray-900 mb-2">{product.dimensions} • {product.coverage}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.features.slice(0,2).map((f,i) => (
                      <div key={i} className="flex items-center gap-1 text-sm">
                        <FiCheck className="text-gray-900 flex-shrink-0" size={12} />
                        <span className="text-gray-700 truncate">{f}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <button onClick={(e) => handleAddToCart(product, e)} className="flex-1 bg-gray-900 text-white py-2.5 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-1 text-sm">
                      <FiShoppingCart size={14} /> Add
                    </button>
                    <button onClick={() => setModalProduct(product)} className="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-xl font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-1 text-sm">
                      <FiEye size={14} /> Views
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
            <button onClick={() => setModalProduct(null)} className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
              <FiX size={20} />
            </button>
            
            <div className="grid md:grid-cols-2">
              <div className="p-6 space-y-4">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${modalProduct.type === "Adhesive" ? "bg-blue-100 text-blue-700" : modalProduct.type === "Sealant" ? "bg-green-100 text-green-700" : modalProduct.type === "Profile" ? "bg-amber-100 text-amber-700" : "bg-purple-100 text-gray-900"}`}>
                    {modalProduct.type}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{modalProduct.title}</h2>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-xl font-bold text-gray-900">{modalProduct.price}</div>
                    <div className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">{modalProduct.sku}</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-xl">
                    <img src={modalProduct.img} alt={modalProduct.title} className="w-full h-64 object-cover" />
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100/30 p-4 rounded-xl">
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        {icon: <FiPackage className="text-gray-900" />, label: "Weight", value: modalProduct.weight},
                        {icon: <FiThermometer className="text-gray-900" />, label: "Temperature", value: modalProduct.temp},
                        {icon: <FiDroplet className="text-gray-900" />, label: "Water", value: modalProduct.water}
                      ].map((item,i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mb-1 shadow-sm">
                            {item.icon}
                          </div>
                          <p className="text-xs font-medium text-gray-800">{item.label}</p>
                          <p className="text-sm font-bold text-gray-900">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {["Material", "Composition", "Dimensions", "Coverage", "Application", "Installation"].map(key => (
                    <div key={key} className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-xs text-gray-500 mb-1">{key}</p>
                      <p className="font-medium text-gray-900 text-sm">
                        {modalProduct[key.toLowerCase()]}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {modalProduct.features.map((f,i) => (
                      <div key={i} className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm">
                        <FiCheck className="text-gray-900 flex-shrink-0" size={12} />
                        <span className="text-gray-700 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Technical Data</h4>
                  <div className="bg-white p-3 rounded-lg text-sm text-gray-700 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <p className="font-medium">Weight: <span className="font-normal">{modalProduct.weight}</span></p>
                        <p className="font-medium">Temperature: <span className="font-normal">{modalProduct.temp}</span></p>
                        <p className="font-medium">Water: <span className="font-normal">{modalProduct.water}</span></p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Composition: <span className="font-normal">{modalProduct.comp}</span></p>
                        <p className="font-medium">Coverage: <span className="font-normal">{modalProduct.coverage}</span></p>
                        <p className="font-medium">Installation: <span className="font-normal">{modalProduct.install}</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button onClick={(e) => handleAddToCart(modalProduct, e)} className="flex-1 bg-gradient-to-r from-gray-600 to-gray-900 text-white py-3 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                    <FiShoppingCart size={16} /> Add to Cart
                  </button>
                  <button className="flex-1 border border-gray-900 text-gray-900 py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors text-sm flex items-center justify-center gap-2">
                    <FiTool size={16} /> Installation Guide
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

export default TechnicalMaterials;