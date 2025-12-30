import React, { useState } from "react";

const storesData = [
  {
    id: 1,
    name: "Luxury Fashion",
    category: "Fashion",
    location: "Paris",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Tech Flagship",
    category: "Electronics",
    location: "New York",
    img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Bookstore Cafe",
    category: "Books",
    location: "London",
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Lifestyle Store",
    category: "Home",
    location: "Tokyo",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Sports Retail",
    category: "Sports",
    location: "Los Angeles",
    img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Jewelry Boutique",
    category: "Luxury",
    location: "Paris",
    img: "https://images.unsplash.com/photo-1590649887896-6c8e6668407f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Concept Store",
    category: "Fashion",
    location: "New York",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Art Supplies",
    category: "Art",
    location: "London",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Gourmet Market",
    category: "Food",
    location: "Tokyo",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Music Store",
    category: "Entertainment",
    location: "Los Angeles",
    img: "https://images.unsplash.com/photo-1525207770211-44b3f2a8a7e1?auto=format&fit=crop&w=800&q=80",
  },
];

const StoresList = () => {
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const locations = [
    "All",
    "Paris",
    "New York",
    "London",
    "Tokyo",
    "Los Angeles",
  ];

  const filteredStores = storesData.filter((store) => {
    const matchesSearch = store.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLocation =
      selectedLocation === "All" || store.location === selectedLocation;

    return matchesSearch && matchesLocation;
  });

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 lg:px-14">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-widest uppercase mb-4 text-gray-900">
          Retail Stores
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Engaging retail spaces designed to create memorable shopping
          experiences and showcase products effectively.
        </p>
      </div>

      {/* Search + Location Filters */}
      <div className="grid grid-cols-1 md:grid-cols-[30%_70%] pb-6">
        {/* Search */}
        <div className="flex items-center pt-6">
         
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition"
          />
        </div>

        {/* Location Buttons */}
        <div className="flex flex-col items-end">
          <h4 className="text-sm font-bold uppercase tracking-widest mb-3 text-gray-700">
            Search by location
          </h4>
          <div className="flex flex-wrap gap-3">
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setSelectedLocation(loc)}
                className={`px-6 py-2 text-xs font-bold uppercase tracking-widest border transition ${
                  selectedLocation === loc
                    ? "bg-black text-white border-black"
                    : "border-gray-300 text-gray-600 hover:border-black"
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>
      </div>
      <hr className="text-gray-100 mb-14" />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStores.map((store) => (
          <div key={store.id} className="group cursor-pointer">
            <div className="overflow-hidden aspect-[4/3] bg-gray-100">
              <div
                className="w-full h-full bg-center bg-cover transform group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${store.img})` }}
              />
            </div>

            <div className="mt-4 border-l-2 border-transparent group-hover:border-black pl-4 transition-all">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">
                {store.category} · {store.location}
              </p>
              <h3 className="text-lg font-medium text-gray-900">
                {store.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredStores.length === 0 && (
        <p className="text-center text-gray-400 mt-16 uppercase tracking-widest text-sm">
          No stores found
        </p>
      )}
    </section>
  );
};

export default StoresList;
