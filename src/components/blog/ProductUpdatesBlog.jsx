import React, { useState } from "react";

// Offline images
import heroImage from "../../assets/product-hero.jpg";
import collection1 from "../../assets/product-collection1.jpg";
import collection2 from "../../assets/product-collection2.jpg";

// Sample product updates data
const productUpdatesData = [
  {
    id: 1,
    name: "Elegant Porcelain Tile",
    type: "Tile",
    material: "Porcelain",
    collection: "Modern Classics",
    heroImage: collection1,
    description:
      "New collection with refined textures and premium finishes, ideal for modern interiors.",
    pdf: "/assets/catalog1.pdf",
  },
  {
    id: 2,
    name: "Luxury Wood Finish Tile",
    type: "Tile",
    material: "Ceramic",
    collection: "Wood Elegance",
    heroImage: collection2,
    description:
      "Updated finish with improved durability and realistic wood textures for a natural look.",
    pdf: "/assets/catalog2.pdf",
  },
];

export default function ProductUpdatesBlog() {
  const [filters, setFilters] = useState({
    type: "All",
    material: "All",
    collection: "All",
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredProducts = productUpdatesData.filter((product) => {
    return (
      (filters.type === "All" || product.type === filters.type) &&
      (filters.material === "All" || product.material === filters.material) &&
      (filters.collection === "All" || product.collection === filters.collection)
    );
  });

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[87vh]">
        <img
          src={heroImage}
          alt="Product Updates"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-wide">
              Product Updates
            </h1>
            <p className="mt-4 text-white/80 max-w-xl text-lg">
              Discover our latest products, collections, and technical improvements.
            </p>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="mx-auto max-w-7xl px-5 py-8 flex flex-wrap gap-4 items-center justify-between">
        <h2 className="text-2xl font-semibold">Explore Products</h2>
        <div className="flex gap-4 flex-wrap">
          <select
            name="type"
            className="border px-5 py-2 rounded-xl text-sm"
            onChange={handleFilterChange}
          >
            <option>All</option>
            <option>Tile</option>
            <option>Flooring</option>
            <option>Wall Panel</option>
          </select>
          <select
            name="material"
            className="border px-5 py-2 rounded-xl text-sm"
            onChange={handleFilterChange}
          >
            <option>All</option>
            <option>Porcelain</option>
            <option>Ceramic</option>
            <option>Marble</option>
          </select>
          <select
            name="collection"
            className="border px-4 py-2 rounded-xl text-sm"
            onChange={handleFilterChange}
          >
            <option>All</option>
            <option>Modern Classics</option>
            <option>Wood Elegance</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mx-auto max-w-7xl px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-500"
          >
            <img
              src={product.heroImage}
              alt={product.name}
              className="h-64 w-full object-cover hover:scale-105 hover:opacity-80 transition duration-700"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900">{product.name}</h3>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <div className="mt-4 flex flex-wrap gap-4">
                <button className="px-5 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition">
                  View Product
                </button>
                <a
                  href={product.pdf}
                  download
                  className="px-5 py-2 border border-gray-900 text-gray-900 rounded-xl hover:bg-gray-900 hover:text-white transition"
                >
                  Download Catalog
                </a>
                <button className="px-5 py-2 border border-gray-900 text-gray-900 rounded-xl hover:bg-gray-900 hover:text-white transition">
                  Find Store
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
