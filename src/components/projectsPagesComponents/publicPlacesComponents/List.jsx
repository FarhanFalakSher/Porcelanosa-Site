import React, { useState } from "react";

const publicPlacesData = [
  {
    id: 1,
    name: "Central Park Plaza",
    category: "Park",
    location: "New York",
    img: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "City Library",
    category: "Cultural",
    location: "London",
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Community Center",
    category: "Recreation",
    location: "Tokyo",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Waterfront Promenade",
    category: "Urban Design",
    location: "Singapore",
    img: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Public Museum",
    category: "Cultural",
    location: "Paris",
    img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Botanical Garden",
    category: "Park",
    location: "New York",
    img: "https://images.unsplash.com/photo-1415795854641-f4a487a0fdc8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Town Square",
    category: "Urban Design",
    location: "London",
    img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Playground Complex",
    category: "Recreation",
    location: "Tokyo",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Public Theater",
    category: "Cultural",
    location: "Singapore",
    img: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Skate Park",
    category: "Recreation",
    location: "Paris",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
  },
];

const PublicPlacesList = () => {
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const locations = [
    "All",
    "New York",
    "London",
    "Tokyo",
    "Singapore",
    "Paris",
  ];

  const filteredPlaces = publicPlacesData.filter((place) => {
    const matchesSearch = place.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLocation =
      selectedLocation === "All" || place.location === selectedLocation;

    return matchesSearch && matchesLocation;
  });

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 lg:px-14">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-widest uppercase mb-4 text-gray-900">
          Public Spaces
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Community-focused designs that create vibrant, accessible, and
          engaging environments for public use.
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
          <div className="flex flex-wrap  gap-3">
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
        {filteredPlaces.map((place) => (
          <div key={place.id} className="group cursor-pointer">
            <div className="overflow-hidden aspect-[4/3] bg-gray-100">
              <div
                className="w-full h-full bg-center bg-cover transform group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${place.img})` }}
              />
            </div>

            <div className="mt-4 border-l-2 border-transparent group-hover:border-black pl-4 transition-all">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">
                {place.category} · {place.location}
              </p>
              <h3 className="text-lg font-medium text-gray-900">
                {place.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredPlaces.length === 0 && (
        <p className="text-center text-gray-400 mt-16 uppercase tracking-widest text-sm">
          No public places found
        </p>
      )}
    </section>
  );
};

export default PublicPlacesList;
