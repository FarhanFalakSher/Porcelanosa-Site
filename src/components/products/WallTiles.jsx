import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiChevronRight, FiX, FiFilter, FiGrid, FiList, FiCheck, FiShoppingCart, FiEye, FiDroplet, FiSun } from "react-icons/fi";
import { useCart } from "../cart/CartContext";
import { Link } from "react-router-dom";

// Import images from assets folder
import wall1 from "../../assets/img (7).avif";
import wall2 from "../../assets/wall (7).jpg";
import wall3 from "../../assets/wall (2).jpg";
import wall4 from "../../assets/wall (8).jpg";
import wall5 from "../../assets/wall (6).jpg";
import wall6 from "../../assets/wall (5).jpg";
import wall7 from "../../assets/wall (1).jpg";
import wall8 from "../../assets/wall (4).jpg";
import heroImage from "../../assets/wall (9).jpg";

const products = [
  { id: 1, name: "Classic Porcelain Wall", material: "Porcelain", finish: "Gloss", size: "30x90 cm", waterResistance: "High", cleaning: "Easy cleaning with mild detergent", bestFor: "Bathroom walls", color: "White", price: "$28.99/m²", popularity: 4.7, image: wall1, installedImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&fit=crop", features: ["Mold resistant", "Easy maintenance", "High durability"] },
  { id: 2, name: "Ceramic Pattern Wall", material: "Ceramic", finish: "Matte", size: "59.6x150 cm", waterResistance: "Moderate", cleaning: "Wipe with damp cloth", bestFor: "Kitchen splashback", color: "Beige", price: "$22.99/m²", popularity: 4.5, image: wall2, installedImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&fit=crop", features: ["Heat resistant", "Easy to clean", "Scratch resistant"] },
  { id: 3, name: "Natural Stone Effect", material: "Natural Stone/Wood", finish: "Textured", size: "30x90 cm", waterResistance: "High", cleaning: "Gentle brush or damp cloth", bestFor: "Feature walls", color: "Sandstone", price: "$35.99/m²", popularity: 4.8, image: wall3, installedImage: "https://images.unsplash.com/photo-1600566752371-bb4b3b6d19a8?w=800&fit=crop", features: ["Natural appearance", "Unique texture", "Easy installation"] },
  { id: 4, name: "Glossy Ceramic Wall", material: "Ceramic", finish: "Gloss", size: "30x60 cm", waterResistance: "Moderate", cleaning: "Easy wipe", bestFor: "Bathroom walls", color: "White", price: "$19.99/m²", popularity: 4.4, image: wall4, installedImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&fit=crop", features: ["Reflective surface", "Stain resistant", "Water resistant"] },
  { id: 5, name: "Subway White", material: "Porcelain", finish: "Gloss", size: "15x30 cm", waterResistance: "High", cleaning: "Mild detergent", bestFor: "Kitchen walls", color: "White", price: "$26.99/m²", popularity: 4.6, image: wall5, installedImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&fit=crop", features: ["Classic design", "Easy to clean", "Timeless look"] },
  { id: 6, name: "Herringbone Pattern", material: "Ceramic", finish: "Matte", size: "20x90 cm", waterResistance: "Moderate", cleaning: "Damp cloth", bestFor: "Feature walls", color: "Gray", price: "$31.99/m²", popularity: 4.7, image: wall6, installedImage: "https://images.unsplash.com/photo-1600566752371-bb4b3b6d19a8?w=800&fit=crop", features: ["Modern pattern", "Easy maintenance", "Durable"] },
  { id: 7, name: "Wood Effect Wall", material: "Natural Stone/Wood", finish: "Textured", size: "25x75 cm", waterResistance: "High", cleaning: "Soft cloth", bestFor: "Accent walls", color: "Brown", price: "$38.99/m²", popularity: 4.9, image: wall7, installedImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&fit=crop", features: ["Wood-like texture", "Warm appearance", "Easy to clean"] },
  { id: 8, name: "Metallic Gloss", material: "Porcelain", finish: "Gloss", size: "30x60 cm", waterResistance: "High", cleaning: "Glass cleaner", bestFor: "Modern bathrooms", color: "Silver", price: "$42.99/m²", popularity: 4.8, image: wall8, installedImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&fit=crop", features: ["Metallic finish", "Modern look", "Easy maintenance"] },
];

const finishGuide = [
  { type: "Gloss", desc: "Reflective, easy to clean, enhances light", icon: "✨" },
  { type: "Matte", desc: "Non-reflective, hides imperfections", icon: "🌫️" },
  { type: "Textured", desc: "Tactile surface, slip-resistant", icon: "🌄" },
];

const WallTiles = () => {
  const [modalProduct, setModalProduct] = useState(null);
  const [filters, setFilters] = useState({ material: "all", finish: "all", bestFor: "all" });
  const [sortBy, setSortBy] = useState("popularity");
  const [viewMode, setViewMode] = useState("grid");
  
  const { addToCart, cartCount } = useCart();

  useEffect(() => { AOS.init({ duration: 800, easing: "ease-in-out", once: true }); }, []);

  const filteredProducts = products.filter((p) => {
    const materialMatch = filters.material === "all" || p.material === filters.material;
    const finishMatch = filters.finish === "all" || p.finish === filters.finish;
    const bestForMatch = filters.bestFor === "all" || p.bestFor.toLowerCase() === filters.bestFor.toLowerCase();
    return materialMatch && finishMatch && bestForMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "popularity") return b.popularity - a.popularity;
    if (sortBy === "price") return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return a.id - b.id;
  });

  const handleAddToCart = (product, e) => {
    e?.stopPropagation();
    const price = parseFloat(product.price.replace('$', '').replace('/m²', ''));
    
    addToCart({
      id: product.id,
      name: product.name,
      price: price,
      image: product.image,
      series: product.material,
      finish: product.finish
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
              <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </Link>
      </div>

      {/* Hero Banner */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <img src={heroImage} alt="Wall Tiles" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
          <div className="absolute inset-0 bg-black/30"></div>

          <p className="text-sm md:text-lg mb-2 tracking-widest">VERTICAL SURFACES</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">WALL TILES</h1>
          <p className="text-lg md:text-xl max-w-2xl">Transform your walls with style and durability</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6 text-gray-600 text-sm flex items-center gap-1">
        <span className="hover:text-gray-900 cursor-pointer">Home</span><FiChevronRight />
        <span className="hover:text-gray-900 cursor-pointer">Products</span><FiChevronRight />
        <span className="font-semibold text-gray-900">Wall Tiles</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8 mb-16">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-6">
            <div className="flex items-center gap-2 mb-6"><FiFilter className="text-gray-700" /><h3 className="text-xl font-bold text-gray-900">Filters</h3></div>
            
            <div className="space-y-6">
              {["Material", "Finish", "Best For"].map((filterType) => (
                <div key={filterType}>
                  <label className="block text-sm font-medium text-gray-700 mb-3">{filterType}</label>
                  <div className="space-y-2">
                    {filterType === "Material" && ["all", "Porcelain", "Ceramic", "Natural Stone/Wood"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, material: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg transition-all ${filters.material === option ? "bg-blue-50 text-gray-900 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.material === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Materials" : option}
                      </button>
                    ))}
                    {filterType === "Finish" && ["all", "Gloss", "Matte", "Textured"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, finish: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg transition-all ${filters.finish === option ? "bg-blue-50 text-gray-900 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.finish === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Finishes" : option}
                      </button>
                    ))}
                    {filterType === "Best For" && ["all", "Bathroom walls", "Kitchen splashback", "Feature walls", "Accent walls", "Kitchen walls", "Modern bathrooms"].map(option => (
                      <button key={option} onClick={() => setFilters({...filters, bestFor: option})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg transition-all ${filters.bestFor === option ? "bg-blue-50 text-gray-900 border border-blue-200" : "hover:bg-gray-50"}`}>
                        <FiCheck className={`mr-2 ${filters.bestFor === option ? "opacity-100" : "opacity-0"}`} />{option === "all" ? "All Uses" : option}
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

              {/* Finish Guide */}
              <div className="pt-6 border-t">
                <h4 className="font-semibold text-gray-900 mb-4">Finish Guide</h4>
                <div className="space-y-3">
                  {finishGuide.map(finish => (
                    <div key={finish.type} className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{finish.icon}</span>
                        <span className="font-medium text-gray-900">{finish.type}</span>
                      </div>
                      <p className="text-sm text-gray-600">{finish.desc}</p>
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
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{sortedProducts.length} Wall Tiles</h2>
              <p className="text-gray-600">Perfect for vertical surfaces with enhanced water resistance</p>
            </div>
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
                  <div className={`absolute top-3 left-3 ${product.material === "Porcelain" ? "bg-gray-900" : product.material === "Ceramic" ? "bg-green-500" : "bg-amber-600"} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                    {product.material}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                    {product.price}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
                    {product.finish}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="cursor-pointer" onClick={() => setModalProduct(product)}>
                      <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">{product.name}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${product.waterResistance === "High" ? "bg-blue-100 text-gray-900" : "bg-yellow-100 text-gray-900"}`}>
                          <FiDroplet className="w-3 h-3" /> {product.waterResistance}
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                          {product.size}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-600 mb-2 cursor-pointer hover:text-gray-900 transition-colors" onClick={() => setModalProduct(product)}>
                      {product.color} • {product.finish} Finish
                    </p>
                    <div className="bg-blue-50 px-3 py-2 rounded-lg">
                      <p className="text-sm font-medium text-gray-900">Best for: <span className="font-normal">{product.bestFor}</span></p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mb-4">
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
          <div className="bg-white rounded-2xl max-w-6xl w-full relative overflow-hidden max-h-[90vh] overflow-y-auto">
            <button className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors" onClick={() => setModalProduct(null)}>
              <FiX size={24} />
            </button>
            
            <div className="grid md:grid-cols-2">
              <div className="p-8 space-y-6">
                <div>
                  <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-3 ${modalProduct.material === "Porcelain" ? "bg-blue-100 text-blue-700" : modalProduct.material === "Ceramic" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                    {modalProduct.material}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{modalProduct.name}</h2>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-bold text-gray-900">{modalProduct.price}</div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100">
                      <FiSun className="text-yellow-500" />
                      <span className="font-medium">{modalProduct.finish} Finish</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-xl">
                    <img src={modalProduct.image} alt={modalProduct.name} className="w-full h-64 object-cover" />
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <FiDroplet className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800">Water Resistance: {modalProduct.waterResistance}</h4>
                        <p className="text-sm text-blue-600">{modalProduct.cleaning}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {["Material", "Finish", "Size", "Color", "Best For", "Water Resistance"].map((key) => (
                    <div key={key} className="bg-white p-4 rounded-xl">
                      <p className="text-sm text-gray-500 mb-1">{key}</p>
                      <p className="font-medium text-gray-900">{modalProduct[key.toLowerCase().replace(/ /g, "")]}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Finish Guide</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {finishGuide.map(finish => (
                      <div key={finish.type} className={`text-center p-3 rounded-lg ${modalProduct.finish === finish.type ? "bg-blue-100 border-2 border-blue-300" : "bg-white border"}`}>
                        <div className="text-2xl mb-2">{finish.icon}</div>
                        <p className="font-medium text-gray-900 text-sm">{finish.type}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button 
                    className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2" 
                    onClick={(e) => handleAddToCart(modalProduct, e)}
                  >
                    <FiShoppingCart /> Add to Cart
                  </button>
                  <button className="flex-1 border-2 border-blue-600 text-blue-600 py-4 rounded-xl font-medium hover:bg-blue-50 transition-colors">
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

export default WallTiles;