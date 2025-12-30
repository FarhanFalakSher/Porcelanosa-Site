import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiChevronRight, FiX, FiFilter, FiGrid, FiList, FiCheck, FiShoppingCart, FiEye, FiLayers, FiArrowUpRight } from "react-icons/fi";
import { useCart } from "../cart/CartContext"; // ADD THIS IMPORT
import { Link } from "react-router-dom"; // ADD THIS IMPORT

const products = [
  { id: 1, name: "XL Porcelain Tile", material: "Porcelain", size: "60x120 cm", thickness: "10 mm", rectified: "Yes", slipResistance: "R10", application: "Floor", price: "$45.99/m²", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&fit=crop", installedImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&fit=crop", features: ["Minimal grout", "Modern look", "Easy care"] },
  { id: 2, name: "XXL Ceramic Slab", material: "Ceramic", size: "120x180 cm", thickness: "12 mm", rectified: "Yes", slipResistance: "R11", application: "Floor & Wall", price: "$52.99/m²", image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&fit=crop", installedImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&fit=crop", features: ["Seamless", "Durable", "Scratch proof"] },
  { id: 3, name: "Kitchen Counter Slab", material: "Porcelain", size: "120x240 cm", thickness: "6 mm", rectified: "Yes", slipResistance: "R10", application: "Countertop", price: "$68.99/m²", image: "https://images.unsplash.com/photo-1586114667256-8c50e6d6c7d3?w=800&fit=crop", installedImage: "https://images.unsplash.com/photo-1600566752371-bb4b3b6d19a8?w=800&fit=crop", features: ["Heat proof", "Stain proof", "Easy clean"] },
  { id: 4, name: "Living Room Floor XXL", material: "Porcelain", size: "120x120 cm", thickness: "12 mm", rectified: "Yes", slipResistance: "R10", application: "Floor", price: "$49.99/m²", image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&fit=crop", installedImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&fit=crop", features: ["Spacious", "Easy install", "High strength"] },
  { id: 5, name: "Marble Effect Slab", material: "Porcelain", size: "160x320 cm", thickness: "12 mm", rectified: "Yes", slipResistance: "R10", application: "Wall", price: "$75.99/m²", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&fit=crop", installedImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&fit=crop", features: ["Marble effect", "Premium", "Unique"] },
  { id: 6, name: "Outdoor Porcelain Slab", material: "Porcelain", size: "60x120 cm", thickness: "20 mm", rectified: "Yes", slipResistance: "R11", application: "Outdoor Floor", price: "$58.99/m²", image: "https://images.unsplash.com/photo-1564436872-f6d41138b2b6?w=800&fit=crop", installedImage: "https://images.unsplash.com/photo-1600566752371-bb4b3b6d19a8?w=800&fit=crop", features: ["Weather proof", "Frost proof", "Anti-slip"] },
  { id: 7, name: "Bathroom Wall Slab", material: "Ceramic", size: "120x240 cm", thickness: "8 mm", rectified: "Yes", slipResistance: "R10", application: "Wall", price: "$55.99/m²", image: "https://images.unsplash.com/photo-1586114667256-8c50e6d6c7d3?w=800&fit=crop", installedImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&fit=crop", features: ["Water proof", "Mold proof", "Easy clean"] },
  { id: 8, name: "Commercial Grade XL", material: "Porcelain", size: "120x120 cm", thickness: "14 mm", rectified: "Yes", slipResistance: "R11", application: "Commercial Floor", price: "$62.99/m²", image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&fit=crop", installedImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&fit=crop", features: ["High traffic", "Industrial", "Long life"] },
];

const sizeComparison = [
  { name: "Standard", size: "30x60 cm", icon: "📏" },
  { name: "XL", size: "60x120 cm", icon: "📐" },
  { name: "XXL", size: "120x180+ cm", icon: "🚀" },
];

const installationTips = [
  "Ensure level substrate",
  "Use rectified edges",
  "Follow adhesive guide",
  "Allow expansion joints",
  "Professional install > 120cm"
];

const LargeFormat = () => {
  const [modalProduct, setModalProduct] = useState(null);
  const [filters, setFilters] = useState({ material: "all", application: "all", size: "all" });
  const [sortBy, setSortBy] = useState("popularity");
  const [viewMode, setViewMode] = useState("grid");
  
  // ADD CARTCONTEXT
  const { addToCart, cartCount } = useCart();

  useEffect(() => { AOS.init({ duration: 800, easing: "ease-in-out", once: true }); }, []);

  const filteredProducts = products.filter((p) => {
    const materialMatch = filters.material === "all" || p.material === filters.material;
    const appMatch = filters.application === "all" || p.application.toLowerCase() === filters.application.toLowerCase();
    const sizeMatch = filters.size === "all" || (filters.size === "xl" && p.size.includes("60")) || (filters.size === "xxl" && p.size.includes("120") && !p.size.includes("60")) || (filters.size === "ultra" && p.size.includes("160"));
    return materialMatch && appMatch && sizeMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "popularity") return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
    if (sortBy === "price") return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return a.id - b.id;
  });

  // UPDATE ADD TO CART FUNCTION
  const handleAddToCart = (product, e) => {
    e?.stopPropagation();
    // Extract numeric price from string (remove "$" and "/m²")
    const price = parseFloat(product.price.replace('$', '').replace('/m²', ''));
    
    addToCart({
      id: product.id,
      name: product.name,
      price: price,
      image: product.image,
      series: product.material, // Map "material" to "series" for CartContext
      finish: product.application // Map "application" to "finish" for CartContext
    });
    alert(`${product.name} added to cart!`);
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
      <div className="relative w-full h-[60vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1920&fit=crop" alt="Large Format Tiles" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
          <p className="text-sm md:text-lg mb-2 tracking-widest">MODERN XL & XXL TILES</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">LARGE FORMAT</h1>
          <p className="text-lg md:text-xl max-w-2xl">Seamless surfaces with minimal joints</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6 text-gray-600 text-sm flex items-center gap-1">
        <span className="hover:text-gray-900 cursor-pointer">Home</span><FiChevronRight />
        <span className="hover:text-gray-900 cursor-pointer">Products</span><FiChevronRight />
        <span className="font-semibold text-gray-900">Large Format</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8 mb-16">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-6">
            <div className="flex items-center gap-2 mb-6"><FiFilter className="text-gray-700" /><h3 className="text-xl font-bold text-gray-900">Filters</h3></div>
            
            <div className="space-y-6">
              {["Material", "Application", "Size"].map((filterType) => (
                <div key={filterType}>
                  <label className="block text-sm font-medium text-gray-700 mb-3">{filterType}</label>
                  <div className="space-y-2">
                    {filterType === "Material" && ["all", "Porcelain", "Ceramic"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, material: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg transition-all ${filters.material === option ? "bg-blue-50 text-gray-900 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.material === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Materials" : option}
                      </button>
                    ))}
                    {filterType === "Application" && ["all", "Floor", "Wall", "Countertop", "Outdoor Floor", "Commercial Floor"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, application: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg transition-all ${filters.application === option ? "bg-blue-50 text-gray-900 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.application === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Applications" : option}
                      </button>
                    ))}
                    {filterType === "Size" && ["all", "xl", "xxl", "ultra"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, size: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg transition-all ${filters.size === option ? "bg-blue-50 text-gray-900 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.size === option ? "opacity-100" : "opacity-0"}`} />
                        {option === "all" ? "All Sizes" : option === "xl" ? "XL (60×120)" : option === "xxl" ? "XXL (120×180)" : "Ultra (160×320+)"}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="popularity">Popularity</option><option value="price">Price: Low to High</option><option value="name">Name: A-Z</option>
                </select>
              </div>

              {/* Size Comparison Chart */}
              <div className="pt-6 border-t">
                <div className="flex items-center gap-2 mb-4"><h4 className="font-semibold text-gray-900">Size Comparison</h4></div>
                <div className="space-y-3">
                  {sizeComparison.map((item, idx) => (
                    <div key={item.name} className={`p-3 rounded-lg ${idx === 1 ? "bg-blue-50 border border-blue-200" : "bg-gray-50"}`}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2"><span className="text-xl">{item.icon}</span><span className="font-medium text-gray-900">{item.name}</span></div>
                        <span className="text-sm font-semibold text-gray-700">{item.size}</span>
                      </div>
                      <div className={`h-2 rounded-full ${idx === 0 ? "w-1/3 bg-gray-300" : idx === 1 ? "w-2/3 bg-blue-400" : "w-full bg-gray-800"}`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:w-3/4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div><h2 className="text-2xl font-bold text-gray-900 mb-2">{sortedProducts.length} Large Format Tiles</h2><p className="text-gray-600">Minimal joints for modern surfaces</p></div>
            <div className="flex items-center gap-3">
              <p className="text-sm text-gray-600 hidden md:block">View:</p>
              <div className="flex gap-2 bg-white p-1 rounded-xl border">
                <button onClick={() => setViewMode("grid")} className={`px-4 py-2 rounded-lg transition-colors ${viewMode === "grid" ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"}`}><FiGrid size={20} /></button>
                <button onClick={() => setViewMode("list")} className={`px-4 py-2 rounded-lg transition-colors ${viewMode === "list" ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"}`}><FiList size={20} /></button>
              </div>
            </div>
          </div>

          <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
            {sortedProducts.map((product, idx) => (
              <div key={product.id} data-aos="fade-up" data-aos-delay={idx * 50} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                
                <div className="relative overflow-hidden h-56">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" onClick={() => setModalProduct(product)} />
                  <div className={`absolute top-3 left-3 ${product.material === "Porcelain" ? "bg-gray-900" : "bg-green-500"} text-white px-3 py-1 rounded-full text-xs font-medium`}>{product.material}</div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">{product.price}</div>
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs">{product.size}</div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="cursor-pointer" onClick={() => setModalProduct(product)}>
                      <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">{product.name}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700"><FiLayers className="w-3 h-3" /> {product.thickness}</div>
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${product.slipResistance === "R11" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}><FiArrowUpRight className="w-3 h-3" /> {product.slipResistance}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-600 mb-2 cursor-pointer hover:text-gray-900 transition-colors" onClick={() => setModalProduct(product)}>{product.application} • Rectified: {product.rectified}</p>
                    <div className={`px-3 py-2 rounded-lg ${product.application === "Floor" ? "bg-blue-50 text-blue-800" : product.application === "Wall" ? "bg-green-50 text-green-800" : "bg-amber-50 text-amber-800"}`}>
                      <p className="text-sm font-medium">Best for: <span className="font-normal">{product.application}</span></p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mb-4">
                    {product.features.slice(0, 2).map((feature, i) => (<div key={i} className="flex items-center gap-2 text-sm"><FiCheck className="text-green-500" /><span className="text-gray-700">{feature}</span></div>))}
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
          <div className="bg-white rounded-2xl max-w-6xl w-full relative overflow-hidden max-h-[90vh] overflow-y-auto">
            <button className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors" onClick={() => setModalProduct(null)}><FiX size={24} /></button>
            
            <div className="grid md:grid-cols-2">
              <div className="p-8 space-y-6">
                <div>
                  <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-3 ${modalProduct.material === "Porcelain" ? "bg-blue-100 text-gray-900" : "bg-green-100 text-green-700"}`}>{modalProduct.material}</span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{modalProduct.name}</h2>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-bold text-gray-900">{modalProduct.price}</div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100"><span className="font-medium">{modalProduct.size}</span></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-xl"><img src={modalProduct.image} alt={modalProduct.name} className="w-full h-64 object-cover" /></div>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center"><FiLayers className="text-blue-600" /></div>
                      <div><h4 className="font-semibold text-gray-900">Specifications</h4><p className="text-sm text-gray-900">Thickness: {modalProduct.thickness} • Rectified: {modalProduct.rectified}</p></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Details</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {["Material", "Size", "Thickness", "Rectified Edge", "Slip Resistance", "Application"].map((key) => (
                    <div key={key} className="bg-white p-4 rounded-xl">
                      <p className="text-sm text-gray-500 mb-1">{key}</p>
                      <p className="font-medium text-gray-900">{modalProduct[key.toLowerCase().replace(/ /g, "")]}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2"><FiLayers /> Installation Tips</h4>
                  <div className="bg-white p-4 rounded-xl">
                    <ul className="space-y-2">
                      {installationTips.map((tip, i) => (<li key={i} className="flex items-start gap-2 text-sm text-gray-700"><FiCheck className="text-green-500 mt-0.5" />{tip}</li>))}
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Size Comparison</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {sizeComparison.map((item, idx) => (
                      <div key={item.name} className={`text-center p-3 rounded-lg ${modalProduct.size.includes(item.size.split(' ')[0]) ? "bg-blue-100 border-2 border-blue-300" : "bg-white border"}`}>
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                        <p className="text-xs text-gray-600">{item.size}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button 
                    className="flex-1 bg-gray-900 text-white py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2" 
                    onClick={(e) => handleAddToCart(modalProduct, e)} // UPDATED HANDLER
                  >
                    <FiShoppingCart /> Add to Cart
                  </button>
                  <button className="flex-1 border-2 border-blue-600 text-gray-900 py-4 rounded-xl font-medium hover:bg-blue-50 transition-colors">
                    Request Sample
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

export default LargeFormat;