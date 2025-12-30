import React, { useState } from "react";

const sportsFacilitiesData = [
  {
    id: 1,
    name: "Olympic Stadium",
    category: "Stadium",
    location: "Tokyo",
    img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Aquatics Center",
    category: "Swimming",
    location: "London",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Tennis Academy",
    category: "Tennis",
    location: "Melbourne",
    img: "https://images.unsplash.com/photo-1622279457486-62dcc4a43137?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Football Arena",
    category: "Football",
    location: "Madrid",
    img: "https://images.unsplash.com/photo-1626743995782-1bac3f5d8c5c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Basketball Center",
    category: "Basketball",
    location: "Los Angeles",
    img: "https://images.unsplash.com/photo-1544919982-b61976a0d7ed?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Athletics Track",
    category: "Track & Field",
    location: "Tokyo",
    img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Ice Hockey Rink",
    category: "Ice Sports",
    location: "London",
    img: "https://images.unsplash.com/photo-1543321269-9d86d3680e1c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Golf Course",
    category: "Golf",
    location: "Melbourne",
    img: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Boxing Gym",
    category: "Combat Sports",
    location: "Madrid",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Fitness Center",
    category: "Gym",
    location: "Los Angeles",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
  },
];

const SportsFacilitiesList = () => {
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const locations = [
    "All",
    "Tokyo",
    "London",
    "Melbourne",
    "Madrid",
    "Los Angeles",
  ];

  const filteredFacilities = sportsFacilitiesData.filter((facility) => {
    const matchesSearch = facility.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLocation =
      selectedLocation === "All" || facility.location === selectedLocation;

    return matchesSearch && matchesLocation;
  });

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 lg:px-14">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-widest uppercase mb-4 text-gray-900">
          Sports Facilities
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          State-of-the-art athletic venues designed for training, competition,
          and promoting active lifestyles.
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
        {filteredFacilities.map((facility) => (
          <div key={facility.id} className="group cursor-pointer">
            <div className="overflow-hidden aspect-[4/3] bg-gray-100">
              <div
                className="w-full h-full bg-center bg-cover transform group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${facility.img})` }}
              />
            </div>

            <div className="mt-4 border-l-2 border-transparent group-hover:border-black pl-4 transition-all">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">
                {facility.category} · {facility.location}
              </p>
              <h3 className="text-lg font-medium text-gray-900">
                {facility.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredFacilities.length === 0 && (
        <p className="text-center text-gray-400 mt-16 uppercase tracking-widest text-sm">
          No sports facilities found
        </p>
      )}
    </section>
  );
};

export default SportsFacilitiesList;
