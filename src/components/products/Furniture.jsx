import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiChevronRight, FiFilter, FiCheck, FiShoppingCart, FiEye, FiPackage, FiX } from "react-icons/fi";
import { useCart } from "../cart/CartContext";
import { Link } from "react-router-dom";

// Import local images
import furniture1 from "../../assets/furniture (3).webp";
import furniture2 from "../../assets/furniture (2).webp";
import furniture3 from "../../assets/furniture (10).webp";
import furniture4 from "../../assets/furniture (4).jpg";
import furniture5 from "../../assets/furniture (5).jpg";
import furniture6 from "../../assets/furniture (9).jpg";
import furniture7 from "../../assets/furniture (7).jpg";
import furniture8 from "../../assets/furniture (12).jpg";
import furnitureHero from "../../assets/furniture (1).avif";

const furnitureProducts = [
  { id: 1, title: "Wall-Mounted Vanity Unit", type: "Vanity Units", mounting: "Wall-mounted", material: "Lacquered Wood", finish: "White Gloss", dimensions: "120 x 50 x 60 cm", drawers: 3, shelves: 2, price: "$850", sku: "VM-1001", features: ["Soft-close drawers", "Water resistant", "Integrated sink"], images: [furniture1] },
  { id: 2, title: "Floor-Standing Cabinet", type: "Cabinets", mounting: "Floor-standing", material: "Solid Wood", finish: "Matte Oak", dimensions: "80 x 45 x 100 cm", drawers: 2, shelves: 3, price: "$650", sku: "FC-2001", features: ["Durable wood", "Easy assembly", "Adjustable shelves"], images: [furniture2] },
  { id: 3, title: "Mirror with Integrated Storage", type: "Mirrors", mounting: "Wall-mounted", material: "Lacquered Wood", finish: "Black Matt", dimensions: "100 x 5 x 70 cm", drawers: 0, shelves: 2, price: "$400", sku: "MS-3001", features: ["LED lighting", "Hidden storage", "Anti-fog"], images: [furniture3] },
  { id: 4, title: "Tall Storage Cabinet", type: "Storage Units", mounting: "Floor-standing", material: "Engineered Wood", finish: "Matte Gray", dimensions: "50 x 40 x 180 cm", drawers: 4, shelves: 5, price: "$720", sku: "TS-4001", features: ["Tall design", "Multiple compartments", "Easy access"], images: [furniture4] },
  { id: 5, title: "Double Vanity Unit", type: "Vanity Units", mounting: "Floor-standing", material: "Marble & Wood", finish: "Carrara Marble", dimensions: "180 x 60 x 90 cm", drawers: 6, shelves: 4, price: "$1,200", sku: "DV-5001", features: ["Double sink", "Marble top", "Ample storage"], images: [furniture5] },
  { id: 6, title: "Bathroom Shelf Set", type: "Accessory Furniture", mounting: "Wall-mounted", material: "Glass & Metal", finish: "Chrome", dimensions: "Various sizes", drawers: 0, shelves: 3, price: "$180", sku: "BS-6001", features: ["Glass shelves", "Chrome frame", "Modern design"], images: [furniture6] },
  { id: 7, title: "Towel Unit Cabinet", type: "Accessory Furniture", mounting: "Wall-mounted", material: "Metal & Wood", finish: "Brushed Nickel", dimensions: "60 x 20 x 80 cm", drawers: 1, shelves: 2, price: "$320", sku: "TU-7001", features: ["Towel bars", "Heated rail", "Storage space"], images: [furniture7] },
  { id: 8, title: "Medicine Cabinet", type: "Mirrors", mounting: "Wall-mounted", material: "Lacquered Wood", finish: "White Matt", dimensions: "70 x 15 x 50 cm", drawers: 2, shelves: 3, price: "$280", sku: "MC-8001", features: ["Recessed", "Lockable", "Adjustable"], images: [furniture8] },
];

const Furniture = () => {
  const [modalProduct, setModalProduct] = useState(null);
  const [filters, setFilters] = useState({ type: "all", mounting: "all", material: "all", price: "all" });
  
  const { addToCart, cartCount } = useCart();

  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  const filteredProducts = furnitureProducts.filter((p) => {
    const typeMatch = filters.type === "all" || p.type === filters.type;
    const mountingMatch = filters.mounting === "all" || p.mounting === filters.mounting;
    const materialMatch = filters.material === "all" || p.material.includes(filters.material);
    const priceMatch = filters.price === "all" || 
      (filters.price === "low" && parseFloat(p.price.replace('$', '').replace(',', '')) < 500) ||
      (filters.price === "mid" && parseFloat(p.price.replace('$', '').replace(',', '')) <= 800) ||
      (filters.price === "high" && parseFloat(p.price.replace('$', '').replace(',', '')) > 800);
    return typeMatch && mountingMatch && materialMatch && priceMatch;
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
        <img src={furnitureHero} alt="Bathroom Furniture" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 bg-gradient-to-t from-black/70 to-transparent">
          <div className="absolute inset-0 bg-black/30"></div>

          <p className="text-sm md:text-lg mb-2 tracking-widest">BATHROOM STORAGE SOLUTIONS</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">FURNITURE</h1>
          <p className="text-lg max-w-2xl">Premium bathroom furniture for storage and style</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6 text-gray-600 text-sm flex items-center gap-1">
        <span className="hover:text-gray-900 cursor-pointer">Home</span><FiChevronRight />
        <span className="hover:text-gray-900 cursor-pointer">Products</span><FiChevronRight />
        <span className="font-semibold text-gray-900">Furniture</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8 mb-16">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-6">
            <div className="flex items-center gap-2 mb-6"><FiFilter /><h3 className="text-xl font-bold">Filters</h3></div>
            
            <div className="space-y-6">
              {["Product Type", "Mounting", "Material", "Price"].map((filterType) => (
                <div key={filterType}>
                  <label className="block text-sm font-medium text-gray-700 mb-3">{filterType}</label>
                  <div className="space-y-2">
                    {filterType === "Product Type" && ["all", "Vanity Units", "Cabinets", "Mirrors", "Storage Units", "Accessory Furniture"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, type: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.type === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.type === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Types" : option}
                      </button>
                    ))}
                    {filterType === "Mounting" && ["all", "Wall-mounted", "Floor-standing"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, mounting: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.mounting === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.mounting === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Mountings" : option}
                      </button>
                    ))}
                    {filterType === "Material" && ["all", "Wood", "Lacquered", "Marble", "Glass", "Metal"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, material: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.material === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.material === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Materials" : option}
                      </button>
                    ))}
                    {filterType === "Price" && ["all", "low", "mid", "high"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, price: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.price === option ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.price === option ? "opacity-100" : "opacity-0"}`} />
                        {option === "all" ? "All Prices" : option === "low" ? "Under $500" : option === "mid" ? "$500-$800" : "Over $800"}
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{filteredProducts.length} Furniture Items</h2>
            <p className="text-gray-600">Premium bathroom storage and vanity solutions</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, idx) => (
              <div key={product.id} data-aos="fade-up" data-aos-delay={idx * 50} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                
                <div className="relative overflow-hidden h-56">
                  <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" onClick={() => setModalProduct(product)} />
                  <div className={`absolute top-3 left-3 ${product.type === "Vanity Units" ? "bg-gray-900" : product.type === "Cabinets" ? "bg-gray-900" : product.type === "Mirrors" ? "bg-gray-900" : "bg-gray-900"} text-white px-3 py-1 rounded-full text-xs font-medium`}>
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
                      <div className="px-2 py-1 rounded-full text-xs bg-blue-100 text-gray-900 flex items-center gap-1">
                        <FiPackage size={10} /> {product.drawers} drawers
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{product.dimensions}</p>
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
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${modalProduct.type === "Vanity Units" ? "bg-blue-100 text-blue-700" : modalProduct.type === "Cabinets" ? "bg-green-100 text-green-700" : modalProduct.type === "Mirrors" ? "bg-purple-100 text-purple-700" : "bg-amber-100 text-amber-700"}`}>
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
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <FiPackage className="text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-blue-800">Storage</p>
                          <p className="text-xs text-blue-600">{modalProduct.drawers} drawers, {modalProduct.shelves} shelves</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">M</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-blue-800">Mounting</p>
                          <p className="text-xs text-blue-600">{modalProduct.mounting}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Specifications</h3>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {["Material", "Dimensions", "Mounting", "Finish", "Drawers", "Shelves"].map((key) => (
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
                  <h4 className="font-semibold text-gray-900 mb-2">Installation Guide</h4>
                  <div className="bg-white p-3 rounded-lg text-sm text-gray-700">
                    <p>• Professional installation recommended</p>
                    <p>• Wall mounting requires secure studs</p>
                    <p>• Ensure level surface for floor units</p>
                    <p>• Follow assembly instructions</p>
                    <p>• Installation kit included</p>
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
                    Assembly Guide
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

export default Furniture;