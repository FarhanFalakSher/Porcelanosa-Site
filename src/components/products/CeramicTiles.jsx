import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiChevronRight, FiX, FiFilter, FiGrid, FiList, FiStar, FiShoppingCart, FiCheck, FiEye } from "react-icons/fi";
import { useCart } from "../cart/CartContext"; // ADD THIS IMPORT
import { Link } from "react-router-dom"; // ADD THIS IMPORT

const products = [
  { id: 1, name: "Classic White", type: "Wall", finish: "Gloss", texture: "Smooth", size: "30x60 cm", waterAbsorption: "6%", color: "White", price: 24.99, popularity: 4.8, image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&fit=crop", installedImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&fit=crop", features: ["Easy cleaning", "Scratch resistant", "Water resistant"] },
  { id: 2, name: "Beige Pattern", type: "Floor", finish: "Matte", texture: "Textured", size: "45x45 cm", waterAbsorption: "7%", color: "Beige", price: 29.99, popularity: 4.5, image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&fit=crop", installedImage: "https://images.unsplash.com/photo-1600566752371-bb4b3b6d19a8?w=800&fit=crop", features: ["Anti-slip", "Durable", "Stain resistant"] },
  { id: 3, name: "Decorative Mosaic", type: "Wall", finish: "Gloss", texture: "Patterned", size: "30x30 cm", waterAbsorption: "6%", color: "Multi", price: 34.99, popularity: 4.9, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&fit=crop", installedImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&fit=crop", features: ["Decorative", "Easy installation", "UV resistant"] },
  { id: 4, name: "Stone Beige", type: "Floor", finish: "Matte", texture: "Stone-like", size: "60x60 cm", waterAbsorption: "7%", color: "Light Beige", price: 27.99, popularity: 4.7, image: "https://images.unsplash.com/photo-1564436872-f6d41138b2b6?w=800&fit=crop", installedImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&fit=crop", features: ["Natural look", "High durability", "Easy maintenance"] },
  { id: 5, name: "Ocean Blue", type: "Wall", finish: "Gloss", texture: "Smooth", size: "25x50 cm", waterAbsorption: "6%", color: "Blue", price: 31.99, popularity: 4.6, image: "https://images.unsplash.com/photo-1586114667256-8c50e6d6c7d3?w=800&fit=crop", installedImage: "https://images.unsplash.com/photo-1600566752371-bb4b3b6d19a8?w=800&fit=crop", features: ["Bright finish", "Mold resistant", "Easy cleaning"] },
  { id: 6, name: "Terracotta", type: "Floor", finish: "Matte", texture: "Textured", size: "40x40 cm", waterAbsorption: "8%", color: "Red", price: 26.99, popularity: 4.4, image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&fit=crop", installedImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&fit=crop", features: ["Traditional look", "Warm tone", "Easy maintenance"] },
  { id: 7, name: "Geometric Pattern", type: "Wall", finish: "Matte", texture: "Patterned", size: "20x60 cm", waterAbsorption: "6%", color: "Gray/White", price: 36.99, popularity: 4.8, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&fit=crop", installedImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&fit=crop", features: ["Modern design", "Pattern variety", "Easy cleaning"] },
  { id: 8, name: "Slate Gray", type: "Floor", finish: "Matte", texture: "Stone-like", size: "50x50 cm", waterAbsorption: "7%", color: "Gray", price: 28.99, popularity: 4.7, image: "https://images.unsplash.com/photo-1564436872-f6d41138b2b6?w=800&fit=crop", installedImage: "https://images.unsplash.com/photo-1600566752371-bb4b3b6d19a8?w=800&fit=crop", features: ["Contemporary", "Scratch resistant", "Easy to clean"] },
];

const CeramicTiles = () => {
  const [modalProduct, setModalProduct] = useState(null);
  const [filters, setFilters] = useState({ type: "all", finish: "all", texture: "all", price: "all" });
  const [sortBy, setSortBy] = useState("popularity");
  const [viewMode, setViewMode] = useState("grid");
  const [roomPreview, setRoomPreview] = useState("bathroom");
  
  // USE CARTCONTEXT INSTEAD OF LOCAL STATE
  const { addToCart, cartCount } = useCart(); // ADD THIS

  useEffect(() => { AOS.init({ duration: 800, easing: "ease-in-out", once: true }); }, []);

  const filteredProducts = products.filter((p) => {
    const typeMatch = filters.type === "all" || p.type.toLowerCase() === filters.type.toLowerCase();
    const finishMatch = filters.finish === "all" || p.finish.toLowerCase() === filters.finish.toLowerCase();
    const textureMatch = filters.texture === "all" || p.texture.toLowerCase() === filters.texture.toLowerCase();
    const priceMatch = filters.price === "all" || (filters.price === "low" && p.price < 30) || (filters.price === "medium" && p.price >= 30 && p.price < 35) || (filters.price === "high" && p.price >= 35);
    return typeMatch && finishMatch && textureMatch && priceMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "popularity") return b.popularity - a.popularity;
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return a.id - b.id;
  });

  // UPDATE ADD TO CART FUNCTION TO USE CONTEXT
  const handleAddToCart = (product, e) => {
    e?.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      series: product.type, // Map "type" to "series" for CartContext
      finish: product.finish
    });
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Floating Cart Button - UPDATED WITH LINK */}
      <div className="fixed top-6 right-6 z-40">
        <Link to="/cart" className="relative">
          <button className="bg-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105">
            <FiShoppingCart className="text-gray-900 text-2xl" />
            {cartCount > 0 && ( // USE cartCount FROM CONTEXT
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </Link>
      </div>

      {/* Hero Banner */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1920&fit=crop" alt="Ceramic Tiles" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
          <p className="text-sm md:text-lg mb-2 tracking-widest">VERSATILE & AFFORDABLE</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">CERAMIC TILES</h1>
          <p className="text-lg md:text-xl max-w-2xl">Perfect blend of beauty, durability, and value</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6 text-gray-600 text-sm flex items-center gap-1">
        <span className="hover:text-gray-900 cursor-pointer">Home</span><FiChevronRight />
        <span className="hover:text-gray-900 cursor-pointer">Products</span><FiChevronRight />
        <span className="font-semibold text-gray-900">Ceramic Tiles</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8 mb-16">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-6">
            <div className="flex items-center gap-2 mb-6"><FiFilter className="text-gray-700" /><h3 className="text-xl font-bold text-gray-900">Filters</h3></div>
            
            <div className="space-y-6">
              {["Type", "Finish", "Texture", "Price"].map((filterType) => (
                <div key={filterType}>
                  <label className="block text-sm font-medium text-gray-700 mb-3">{filterType}</label>
                  <div className="space-y-2">
                    {filterType === "Type" && ["all", "Wall", "Floor", "Decorative"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, type: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.type === option ? "bg-gray-900 text-white" : "hover:bg-gray-100"}`}>
                        <FiCheck className={`mr-2 ${filters.type === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Types" : `${option} Tiles`}
                      </button>
                    ))}
                    {filterType === "Finish" && ["all", "Gloss", "Matte"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, finish: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.finish === option ? "bg-gray-900 text-white" : "hover:bg-gray-100"}`}>
                        <FiCheck className={`mr-2 ${filters.finish === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Finishes" : option}
                      </button>
                    ))}
                    {filterType === "Texture" && ["all", "Smooth", "Textured", "Patterned", "Stone-like"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, texture: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.texture === option ? "bg-gray-900 text-white" : "hover:bg-gray-100"}`}>
                        <FiCheck className={`mr-2 ${filters.texture === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Textures" : option}
                      </button>
                    ))}
                    {filterType === "Price" && ["all", "low", "medium", "high"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, price: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.price === option ? "bg-gray-900 text-white" : "hover:bg-gray-100"}`}>
                        <FiCheck className={`mr-2 ${filters.price === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Prices" : option === "low" ? "Under $30" : option === "medium" ? "$30-$35" : "Over $35"}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gray-900" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="popularity">Popularity</option><option value="price">Price: Low to High</option><option value="name">Name: A-Z</option><option value="novelty">Novelty</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:w-3/4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{sortedProducts.length} Ceramic Tiles</h2>
              <p className="text-gray-600">High water absorption, easy to cut and install</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-sm text-gray-600 hidden md:block">View:</p>
              <div className="flex gap-2">
                <button onClick={() => setViewMode("grid")} className={`p-3 rounded-lg ${viewMode === "grid" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700"}`}>
                  <FiGrid size={20} />
                </button>
                <button onClick={() => setViewMode("list")} className={`p-3 rounded-lg ${viewMode === "list" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700"}`}>
                  <FiList size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
            {sortedProducts.map((product, idx) => (
              <div key={product.id} data-aos="fade-up" data-aos-delay={idx * 50} className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group ${viewMode === "list" ? "flex" : ""}`}>
                
                <div className={`relative overflow-hidden ${viewMode === "list" ? "w-1/3" : "h-56"}`}>
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer" onClick={() => setModalProduct(product)} />
                  <div className={`absolute top-3 left-3 ${product.type === "Wall" ? "bg-gray-900" : product.type === "Floor" ? "bg-green-500" : "bg-purple-500"} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                    {product.type}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                    ${product.price.toFixed(2)}
                  </div>
                </div>
                
                <div className={`p-6 ${viewMode === "list" ? "w-2/3" : ""}`}>
                  <div className="flex justify-between items-start mb-3">
                    <div className="cursor-pointer" onClick={() => setModalProduct(product)}>
                      <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">{product.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <FiStar key={i} className={`w-4 h-4 ${i < Math.floor(product.popularity) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">{product.popularity}</span>
                      </div>
                    </div>
                    <span className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                      {product.size}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 cursor-pointer hover:text-gray-900 transition-colors" onClick={() => setModalProduct(product)}>
                    {product.color} • {product.finish} • {product.texture}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {product.features.slice(0, 2).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <FiCheck className="text-green-500" />
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
          <div className="bg-white rounded-2xl max-w-6xl w-full relative overflow-hidden max-h-[90vh] overflow-y-auto">
            <button className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors" onClick={() => setModalProduct(null)}>
              <FiX size={24} />
            </button>
            
            <div className="grid md:grid-cols-2">
              <div className="p-8 space-y-6">
                <div>
                  <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-3 ${modalProduct.type === "Wall" ? "bg-blue-100 text-blue-700" : modalProduct.type === "Floor" ? "bg-green-100 text-green-700" : "bg-purple-100 text-purple-700"}`}>
                    {modalProduct.type} Tile
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{modalProduct.name}</h2>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FiStar key={i} className={`w-5 h-5 ${i < Math.floor(modalProduct.popularity) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                        ))}
                      </div>
                      <span className="text-lg font-semibold">{modalProduct.popularity}</span>
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">${modalProduct.price.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-xl">
                    <img src={modalProduct.image} alt={modalProduct.name} className="w-full h-64 object-cover" />
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-3">Apply Room Preview</h4>
                    <div className="flex gap-3 mb-4">
                      {["bathroom", "kitchen", "living"].map(room => (
                        <button 
                          key={room} 
                          onClick={() => setRoomPreview(room)} 
                          className={`px-4 py-2 rounded-lg capitalize ${roomPreview === room ? "bg-gray-900 text-white" : "bg-white text-gray-700 border hover:bg-gray-100"}`}
                        >
                          {room}
                        </button>
                      ))}
                    </div>
                    <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                      Preview in {roomPreview.charAt(0).toUpperCase() + roomPreview.slice(1)}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {["Type", "Finish", "Texture", "Size", "Color", "Water Absorption"].map((key) => (
                    <div key={key} className="bg-white p-4 rounded-xl">
                      <p className="text-sm text-gray-500 mb-1">{key}</p>
                      <p className="font-medium text-gray-900">{modalProduct[key.toLowerCase().replace(/ /g, "")]}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {modalProduct.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-lg">
                        <FiCheck className="text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2"
                    onClick={(e) => handleAddToCart(modalProduct, e)} // UPDATED HANDLER
                  >
                    <FiShoppingCart /> Add to Cart
                  </button>
                  <button className="flex-1 border-2 border-gray-900 text-gray-900 py-4 rounded-xl font-medium hover:bg-gray-50 transition-colors">
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

export default CeramicTiles;