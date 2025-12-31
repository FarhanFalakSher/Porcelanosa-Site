import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiChevronRight, FiFilter, FiCheck, FiShoppingCart, FiEye, FiPackage, FiX, FiTool } from "react-icons/fi";
import { useCart } from "../cart/CartContext";
import { Link } from "react-router-dom";

// Import local images
import kitchen1 from "../../assets/kitchen (1).jpg";
import kitchen2 from "../../assets/kitchen (2).jpg";
import kitchen3 from "../../assets/kitchen (3).jpg";
import kitchen4 from "../../assets/kitchen (5).jpg";
import kitchen5 from "../../assets/kitchen (6).jpg";
import kitchen6 from "../../assets/kitchen (4).jpg";
import kitchen7 from "../../assets/kitchen (7).jpg";
import kitchen8 from "../../assets/kitchen (8).jpg";
import kitchenHero from "../../assets/kitchen (1).jpg";

const kitchenProducts = [
  { id: 1, title: "Wall-Mounted Kitchen Cabinet", type: "Cabinets", mounting: "Wall-mounted", material: "Lacquered Wood", finish: "White Gloss", dimensions: "80 x 35 x 60 cm", configuration: "Modular", price: "$600", sku: "KC-1001", features: ["Soft-close", "Adjustable shelves", "Easy install"], images: [kitchen1] },
  { id: 2, title: "Granite Countertop", type: "Countertops", mounting: "Countertop", material: "Granite", finish: "Polished Black", dimensions: "200 x 60 x 3 cm", configuration: "Single Piece", price: "$450", sku: "CT-2001", features: ["Heat resistant", "Stain proof", "Easy clean"], images: [kitchen2] },
  { id: 3, title: "Kitchen Island Modular", type: "Islands", mounting: "Floor-standing", material: "Stone & Wood", finish: "Natural Wood", dimensions: "150 x 80 x 90 cm", configuration: "Modular", price: "$1,200", sku: "KI-3001", features: ["Storage space", "Breakfast bar", "Wheel option"], images: [kitchen3] },
  { id: 4, title: "Integrated Sink & Accessories", type: "Sinks", mounting: "Under-counter", material: "Composite Stone", finish: "Matte Gray", dimensions: "100 x 50 x 20 cm", configuration: "Standard", price: "$350", sku: "IS-4001", features: ["Integrated", "Stainless", "Easy clean"], images: [kitchen4] },
  { id: 5, title: "Floor-Standing Cabinet Set", type: "Cabinets", mounting: "Floor-standing", material: "Solid Wood", finish: "Oak", dimensions: "Various sizes", configuration: "Modular Set", price: "$950", sku: "FC-5001", features: ["Complete set", "Soft-close", "Adjustable"], images: [kitchen5] },
  { id: 6, title: "Quartz Countertop", type: "Countertops", mounting: "Countertop", material: "Quartz", finish: "Polished White", dimensions: "250 x 65 x 3 cm", configuration: "Custom Cut", price: "$680", sku: "QC-6001", features: ["Non-porous", "Durable", "Hygienic"], images: [kitchen6] },
  { id: 7, title: "Kitchen Hardware Set", type: "Hardware", mounting: "Universal", material: "Stainless Steel", finish: "Brushed Nickel", dimensions: "Various", configuration: "Complete Set", price: "$220", sku: "KH-7001", features: ["Handles", "Hinges", "Drawer slides"], images: [kitchen7] },
  { id: 8, title: "Peninsula Kitchen Unit", type: "Islands", mounting: "Floor-standing", material: "Wood & Stone", finish: "Gray Matt", dimensions: "180 x 90 x 90 cm", configuration: "Modular", price: "$1,500", sku: "PK-8001", features: ["Peninsula design", "Storage", "Seating area"], images: [kitchen8] },
];

const KitchenSystems = () => {
  const [modalProduct, setModalProduct] = useState(null);
  const [filters, setFilters] = useState({ type: "all", material: "all", configuration: "all", price: "all" });
  
  const { addToCart, cartCount } = useCart();

  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  const filteredProducts = kitchenProducts.filter((p) => {
    const typeMatch = filters.type === "all" || p.type === filters.type;
    const materialMatch = filters.material === "all" || p.material.includes(filters.material);
    const configMatch = filters.configuration === "all" || p.configuration.includes(filters.configuration);
    const priceMatch = filters.price === "all" || 
      (filters.price === "low" && parseFloat(p.price.replace('$', '').replace(',', '')) < 500) ||
      (filters.price === "mid" && parseFloat(p.price.replace('$', '').replace(',', '')) <= 1000) ||
      (filters.price === "high" && parseFloat(p.price.replace('$', '').replace(',', '')) > 1000);
    return typeMatch && materialMatch && configMatch && priceMatch;
  });

  const handleAddToCart = (product, e) => {
    e?.stopPropagation();
    const price = parseFloat(product.price.replace('$', '').replace(',', ''));
    
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

      <div className="relative w-full h-[80vh] overflow-hidden">
        <img src={kitchenHero} alt="Kitchen Systems" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 bg-gradient-to-t from-black/70 to-transparent">
          <div className="absolute inset-0 bg-black/30"></div>

          <p className="text-sm md:text-lg mb-2 tracking-widest">MODULAR KITCHEN SOLUTIONS</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">KITCHEN SYSTEMS</h1>
          <p className="text-lg max-w-2xl">Complete modular kitchen systems and components</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6 text-gray-600 text-sm flex items-center gap-1">
        <span className="hover:text-gray-900 cursor-pointer">Home</span><FiChevronRight />
        <span className="hover:text-gray-900 cursor-pointer">Products</span><FiChevronRight />
        <span className="font-semibold text-gray-900">Kitchen Systems</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8 mb-16">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-6">
            <div className="flex items-center gap-2 mb-6"><FiFilter /><h3 className="text-xl font-bold">Filters</h3></div>
            
            <div className="space-y-6">
              {["Product Type", "Material", "Configuration", "Price"].map((filterType) => (
                <div key={filterType}>
                  <label className="block text-sm font-medium text-gray-700 mb-3">{filterType}</label>
                  <div className="space-y-2">
                    {filterType === "Product Type" && ["all", "Cabinets", "Countertops", "Islands", "Sinks", "Hardware"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, type: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.type === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.type === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Types" : option}
                      </button>
                    ))}
                    {filterType === "Material" && ["all", "Wood", "Lacquer", "Granite", "Stone", "Quartz", "Composite", "Stainless"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, material: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.material === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.material === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Materials" : option}
                      </button>
                    ))}
                    {filterType === "Configuration" && ["all", "Modular", "Single Piece", "Standard", "Custom Cut", "Complete Set"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, configuration: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.configuration === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.configuration === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Configs" : option}
                      </button>
                    ))}
                    {filterType === "Price" && ["all", "low", "mid", "high"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, price: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.price === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.price === option ? "opacity-100" : "opacity-0"}`} />
                        {option === "all" ? "All Prices" : option === "low" ? "Under $500" : option === "mid" ? "$500-$1,000" : "Over $1,000"}
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{filteredProducts.length} Kitchen System Items</h2>
            <p className="text-gray-600">Complete modular kitchen solutions and components</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, idx) => (
              <div key={product.id} data-aos="fade-up" data-aos-delay={idx * 50} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                
                <div className="relative overflow-hidden h-56">
                  <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" onClick={() => setModalProduct(product)} />
                  <div className={`absolute top-3 left-3 ${product.type === "Cabinets" ? "bg-gray-900" : product.type === "Countertops" ? "bg-gray-900" : product.type === "Islands" ? "bg-gray-900" : product.type === "Sinks" ? "bg-gray-900" : "bg-gray-900"} text-white px-3 py-1 rounded-full text-xs font-medium`}>
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
                      <div className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">{product.mounting}</div>
                      <div className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                        {product.configuration}
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
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${modalProduct.type === "Cabinets" ? "bg-blue-100 text-blue-700" : modalProduct.type === "Countertops" ? "bg-green-100 text-gray-900" : modalProduct.type === "Islands" ? "bg-purple-100 text-purple-700" : modalProduct.type === "Sinks" ? "bg-amber-100 text-amber-700" : "bg-gray-900 text-white"}`}>
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
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <FiTool className="text-gray-900" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Configuration: {modalProduct.configuration}</p>
                        <p className="text-xs text-gray-900">Mounting: {modalProduct.mounting}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Specifications</h3>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {["Material", "Dimensions", "Mounting", "Finish", "Configuration", "Type"].map((key) => (
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
                        <FiCheck className="text-green-500" size={12} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Installation & Configuration</h4>
                  <div className="bg-white p-3 rounded-lg text-sm text-gray-700">
                    <p>• Professional installation recommended</p>
                    <p>• Modular components for flexible layouts</p>
                    <p>• Follow assembly diagrams</p>
                    <p>• Ensure level surface and proper support</p>
                    <p>• Installation service available</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button 
                    className="flex-1 bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-blue-700 flex items-center justify-center gap-2 text-sm" 
                    onClick={(e) => handleAddToCart(modalProduct, e)}
                  >
                    <FiShoppingCart size={16} /> Add to Cart
                  </button>
                  <button className="flex-1 border border-gray-900 text-blue-600 py-3 rounded-xl font-medium hover:bg-blue-50 text-sm">
                    Layout Diagram
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

export default KitchenSystems;