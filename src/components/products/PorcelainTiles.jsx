// PorcelainTiles.jsx
import React, { useState } from "react";
import { FiChevronRight, FiX, FiCheck, FiFilter, FiGrid, FiList, FiDownload, FiShoppingCart, FiEye } from "react-icons/fi";
import { useCart } from "../cart/CartContext";

// Import images from assets folder
import heroImage from "../../assets/porclein (1).jpg";
import product1 from "../../assets/porclein (9).jpg";
import product2 from "../../assets/porclein (6).jpg";
import product3 from "../../assets/porclein (4).jpg";
import product4 from "../../assets/porclein (8).jpg";
import product5 from "../../assets/porclein (3).jpg";
import product6 from "../../assets/porclein (5).jpg";
import product7 from "../../assets/porclein (2).jpg";
import product8 from "../../assets/porclein (7).jpg";

const products = [
  { id: 1, name: "Toscano", series: "BONE", finish: "Polished", application: "Floor & Wall", size: "60x60 cm", slipResistance: "R10", thickness: "10 mm", rectifiedEdge: "Yes", waterAbsorption: "<0.5%", color: "White Marble", image: product1, installedImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w-800&auto=format&fit=crop", price: 89 },
  { id: 2, name: "Limestone", series: "BONE", finish: "Matte", application: "Floor", size: "120x120 cm", slipResistance: "R11", thickness: "12 mm", rectifiedEdge: "No", waterAbsorption: "<0.5%", color: "Light Beige", image: product2, installedImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop", price: 120 },
  { id: 3, name: "Marmol Crema", series: "MARFIL", finish: "Polished", application: "Floor & Wall", size: "80x80 cm", slipResistance: "R10", thickness: "10 mm", rectifiedEdge: "Yes", waterAbsorption: "<0.5%", color: "Cream", image: product3, installedImage: "https://images.unsplash.com/photo-1600566752371-bb4b3b6d19a8?w=800&auto=format&fit=crop", price: 95 },
  { id: 4, name: "Wood Effect", series: "BONE", finish: "Natural", application: "Floor", size: "20x120 cm", slipResistance: "R10", thickness: "9 mm", rectifiedEdge: "Yes", waterAbsorption: "<0.5%", color: "Oak Brown", image: product4, installedImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop", price: 75 },
  { id: 5, name: "Grey Stone", series: "STONE", finish: "Matte", application: "Floor", size: "60x60 cm", slipResistance: "R11", thickness: "10 mm", rectifiedEdge: "Yes", waterAbsorption: "<0.5%", color: "Grey", image: product5, installedImage: "https://images.unsplash.com/photo-1600566752371-bb4b3b6d19a8?w=800&auto=format&fit=crop", price: 82 },
  { id: 6, name: "Beige Marble", series: "MARFIL", finish: "Polished", application: "Floor & Wall", size: "80x80 cm", slipResistance: "R10", thickness: "10 mm", rectifiedEdge: "Yes", waterAbsorption: "<0.5%", color: "Beige", image: product6, installedImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop", price: 105 },
  { id: 7, name: "Travertine", series: "STONE", finish: "Natural", application: "Wall", size: "60x120 cm", slipResistance: "R10", thickness: "9 mm", rectifiedEdge: "Yes", waterAbsorption: "<0.5%", color: "Sand", image: product7, installedImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop", price: 110 },
  { id: 8, name: "Black Slate", series: "STONE", finish: "Matte", application: "Floor & Wall", size: "60x60 cm", slipResistance: "R11", thickness: "10 mm", rectifiedEdge: "Yes", waterAbsorption: "<0.5%", color: "Black", image: product8, installedImage: "https://images.unsplash.com/photo-1600566752371-bb4b3b6d19a8?w=800&auto=format&fit=crop", price: 98 },
];

const PorcelainTiles = () => {
  const [modalProduct, setModalProduct] = useState(null);
  const [filters, setFilters] = useState({ series: "all", finish: "all", application: "all", size: "all" });
  const [sortBy, setSortBy] = useState("novelty");
  const [viewMode, setViewMode] = useState("grid");
  
  const { addToCart, cartCount } = useCart();

  const filteredProducts = products.filter(p => {
    const seriesMatch = filters.series === "all" || p.series === filters.series;
    const finishMatch = filters.finish === "all" || p.finish.toLowerCase() === filters.finish;
    const appMatch = filters.application === "all" || p.application.toLowerCase() === filters.application.toLowerCase();
    const sizeMatch = filters.size === "all" || p.size === filters.size;
    return seriesMatch && finishMatch && appMatch && sizeMatch;
  });

  const handleAddToCart = (product, e) => {
    e?.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      series: product.series,
      finish: product.finish
    });
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-6 right-6 z-40">
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
      </div>

      <div className="relative w-full h-[80vh] overflow-hidden ">
        <img src={heroImage} alt="Porcelain Tiles" className="w-full h-full bg-black/80 object-cover brightness-90" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute inset-0 bg-black/20"></div>

          <p className="text-sm md:text-lg mb-2 tracking-widest">PREMIUM FLOORING</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">PORCELAIN TILES</h1>
          <p className="text-lg md:text-xl max-w-2xl">Luxury, durability, and timeless elegance for every space</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 text-gray-600 text-sm flex items-center gap-1">
        <span className="hover:text-gray-900 cursor-pointer">Home</span>
        <FiChevronRight />
        <span className="hover:text-gray-900 cursor-pointer">Products</span>
        <FiChevronRight />
        <span className="font-semibold text-gray-900">Porcelain Tiles</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8 mb-16">
        <div className="lg:w-1/4">
          <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-6">
            <div className="flex items-center gap-2 mb-6">
              <FiFilter className="text-gray-700" />
              <h3 className="text-xl font-bold text-gray-900">Filters</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Series</label>
                <div className="flex flex-wrap gap-2">
                  {["all", "BONE", "MARFIL", "STONE"].map(series => (
                    <button key={series} onClick={() => setFilters({...filters, series})} className={`px-4 py-2 rounded-full text-sm font-medium ${filters.series === series ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                      {series === "all" ? "All Series" : series}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Finish</label>
                <div className="space-y-2">
                  {["all", "polished", "matte", "natural"].map(finish => (
                    <button key={finish} onClick={() => setFilters({...filters, finish})} className={`flex items-center w-full text-left px-3 py-2 rounded-lg ${filters.finish === finish ? "bg-gray-900 text-white" : "hover:bg-gray-100"}`}>
                      <FiCheck className={`mr-2 ${filters.finish === finish ? "opacity-100" : "opacity-0"}`} />
                      {finish === "all" ? "All Finishes" : finish.charAt(0).toUpperCase() + finish.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gray-900" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="novelty">Novelty</option>
                  <option value="name">Name (A-Z)</option>
                  <option value="size">Size</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-3/4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">{filteredProducts.length} Products Found</h2>
            <div className="flex gap-2">
              <button onClick={() => setViewMode("grid")} className={`p-3 rounded-lg ${viewMode === "grid" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700"}`}>
                <FiGrid size={20} />
              </button>
              <button onClick={() => setViewMode("list")} className={`p-3 rounded-lg ${viewMode === "list" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700"}`}>
                <FiList size={20} />
              </button>
            </div>
          </div>

          <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
            {filteredProducts.map((product, idx) => (
              <div key={product.id} className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group ${viewMode === "list" ? "flex" : ""}`}>
                
                <div className={`relative overflow-hidden ${viewMode === "list" ? "w-1/3" : "h-64"}`}>
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {product.series}
                  </div>
                  <div className="absolute top-3 left-3 bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ${product.price}
                  </div>
                </div>
                
                <div className={`p-6 ${viewMode === "list" ? "w-2/3" : ""}`}>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                    <span className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">{product.size}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.color} • {product.finish} Finish</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm text-gray-700">{product.application}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                      <span className="text-sm text-gray-700">{product.slipResistance}</span>
                    </div>
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

      {modalProduct && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-5xl w-full relative overflow-hidden max-h-[90vh] overflow-y-auto">
            <button className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white" onClick={() => setModalProduct(null)}>
              <FiX size={24} />
            </button>
            
            <div className="grid md:grid-cols-2">
              <div className="p-8 space-y-6">
                <div>
                  <span className="inline-block bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium mb-3">{modalProduct.series}</span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{modalProduct.name}</h2>
                  <p className="text-gray-600 text-lg">{modalProduct.color}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">${modalProduct.price}</span>
                    <span className="text-gray-500">per m²</span>
                  </div>
                </div>
                
                <img src={modalProduct.image} alt={modalProduct.name} className="w-full h-64 object-cover rounded-xl shadow-lg" />
                <img src={modalProduct.installedImage} alt="Installed" className="w-full h-64 object-cover rounded-xl shadow-lg" />
              </div>
              
              <div className="bg-gray-50 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Finish", "Application", "Size", "Slip Resistance", "Thickness", "Rectified Edge", "Water Absorption"].map((key) => (
                    <div key={key} className="bg-white p-4 rounded-xl">
                      <p className="text-sm text-gray-500 mb-1">{key}</p>
                      <p className="font-medium text-gray-900">{modalProduct[key.toLowerCase().replace(/ /g, "")]}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex gap-4">
                  <button onClick={(e) => handleAddToCart(modalProduct, e)} className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2">
                    <FiShoppingCart /> Add to Cart
                  </button>
                  <button className="flex-1 border-2 border-gray-900 text-gray-900 py-4 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <FiDownload /> Catalog
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

export default PorcelainTiles;