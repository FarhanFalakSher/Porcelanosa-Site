import React, { useState } from "react";

const hotelsData = [
  {
    id: 1,
    name: "Royal Palace",
    category: "Luxury",
    location: "Dubai",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Urban Stay",
    category: "Boutique",
    location: "London",
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Metropolitan Suites",
    category: "Business",
    location: "New York",
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Chateau Belle",
    category: "Luxury",
    location: "Paris",
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Zen Retreat",
    category: "Boutique",
    location: "Tokyo",
    img: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Desert Oasis",
    category: "Resort",
    location: "Dubai",
    img: "https://images.unsplash.com/photo-1516496636080-14fb876e029d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Heritage Inn",
    category: "Boutique",
    location: "London",
    img: "https://images.unsplash.com/photo-1564501049418-3c27787f5e7c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Skyline Hotel",
    category: "Business",
    location: "New York",
    img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Riviera Grand",
    category: "Luxury",
    location: "Paris",
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Sakura Garden",
    category: "Resort",
    location: "Tokyo",
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
  },
];

const HotelsList = () => {
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const locations = ["All", "Dubai", "London", "New York", "Paris", "Tokyo"];

  const filteredHotels = hotelsData.filter((hotel) => {
    const matchesSearch = hotel.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLocation =
      selectedLocation === "All" || hotel.location === selectedLocation;

    return matchesSearch && matchesLocation;
  });

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 lg:px-14">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-widest uppercase mb-4 text-gray-900">
          Hotel Collection
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Discover exceptional hotels that combine luxury, comfort, and
          world-class amenities for the perfect stay.
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
        {filteredHotels.map((hotel) => (
          <div key={hotel.id} className="group cursor-pointer">
            <div className="overflow-hidden aspect-[4/3] bg-gray-100">
              <div
                className="w-full h-full bg-center bg-cover transform group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${hotel.img})` }}
              />
            </div>

            <div className="mt-4 border-l-2 border-transparent group-hover:border-black pl-4 transition-all">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">
                {hotel.category} · {hotel.location}
              </p>
              <h3 className="text-lg font-medium text-gray-900">
                {hotel.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredHotels.length === 0 && (
        <p className="text-center text-gray-400 mt-16 uppercase tracking-widest text-sm">
          No hotels found
        </p>
      )}
    </section>
  );
};

export default HotelsList;
