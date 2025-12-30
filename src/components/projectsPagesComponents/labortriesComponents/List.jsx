import React, { useState } from "react";

const laboratoriesData = [
  {
    id: 1,
    name: "BioTech Research",
    category: "Biomedical",
    location: "Boston",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Quantum Labs",
    category: "Physics",
    location: "Zurich",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Clean Energy",
    category: "Chemistry",
    location: "Tokyo",
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Genome Center",
    category: "Genetics",
    location: "Singapore",
    img: "https://images.unsplash.com/photo-1560279966-8ff2f6c9268a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Material Science",
    category: "Engineering",
    location: "Berlin",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Pharma Research",
    category: "Pharmaceutical",
    location: "Boston",
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "AI Development",
    category: "Computer Science",
    location: "Zurich",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Environmental Lab",
    category: "Ecology",
    location: "Tokyo",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Neuroscience",
    category: "Medical",
    location: "Singapore",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Robotics Lab",
    category: "Engineering",
    location: "Berlin",
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
  },
];

const LabortriesList = () => {
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const locations = ["All", "Boston", "Zurich", "Tokyo", "Singapore", "Berlin"];

  const filteredLabs = laboratoriesData.filter((lab) => {
    const matchesSearch = lab.name.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      selectedLocation === "All" || lab.location === selectedLocation;

    return matchesSearch && matchesLocation;
  });

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 lg:px-14">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-widest uppercase mb-4 text-gray-900">
          Laboratory Facilities
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Advanced research environments equipped with cutting-edge technology
          for scientific discovery and innovation.
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
        {filteredLabs.map((lab) => (
          <div key={lab.id} className="group cursor-pointer">
            <div className="overflow-hidden aspect-[4/3] bg-gray-100">
              <div
                className="w-full h-full bg-center bg-cover transform group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${lab.img})` }}
              />
            </div>

            <div className="mt-4 border-l-2 border-transparent group-hover:border-black pl-4 transition-all">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">
                {lab.category} · {lab.location}
              </p>
              <h3 className="text-lg font-medium text-gray-900">{lab.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredLabs.length === 0 && (
        <p className="text-center text-gray-400 mt-16 uppercase tracking-widest text-sm">
          No laboratories found
        </p>
      )}
    </section>
  );
};

export default LabortriesList;
