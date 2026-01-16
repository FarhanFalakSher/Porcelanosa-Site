import React, { useState } from "react";

const projectsData = [
  {
    id: 1,
    name: "Villa Mediterráneo",
    category: "Modern",
    location: "Dubai",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Nordic Retreat",
    category: "Minimalist",
    location: "London",
    img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Urban Loft",
    category: "Industrial",
    location: "New York",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Sunset Estate",
    category: "Modern",
    location: "Paris",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Eco Glass House",
    category: "Minimalist",
    location: "Tokyo",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Modern Concrete Home",
    category: "Modern",
    location: "Dubai",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Minimal White Villa",
    category: "Minimalist",
    location: "London",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Industrial Brick House",
    category: "Industrial",
    location: "New York",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Luxury Hills Residence",
    category: "Modern",
    location: "Paris",
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Glass Forest Home",
    category: "Minimalist",
    location: "Tokyo",
    img: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=800&q=80",
  },
];

const HomeProjectsList = () => {
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const locations = ["All", "Dubai", "London", "New York", "Paris", "Tokyo"];

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch = project.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesLocation =
      selectedLocation === "All" || project.location === selectedLocation;
    return matchesSearch && matchesLocation;
  });

  return (
    <section className="py-16 max-w-7xl mx-auto px-6 lg:px-14">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-gray-900">
          Our Portfolio
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From luxury villas to urban apartments, discover how our materials
          transform spaces into stunning, livable homes.
        </p>
      </div>

      {/* Search + Location Filters */}
      <div className="grid grid-cols-1 md:grid-cols-[30%_70%] pb-6 gap-4">
        {/* Search */}
        <div className="flex items-center pt-6">
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 px-5 py-2 rounded-xl focus:outline-none focus:border-black transition"
          />
        </div>

        {/* Location Buttons */}
        <div className="flex flex-col items-end">
          <h4 className="text-md font-bold mb-3 text-gray-700">
            Search by location
          </h4>
          <div className="flex flex-wrap gap-3">
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setSelectedLocation(loc)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold border transition ${
                  selectedLocation === loc
                    ? "bg-black text-white border-black"
                    : "border-gray-300 text-gray-600 hover:border-black hover:bg-black/10"
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>
      </div>
      <hr className="mb-14 text-gray-100" />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg">
            {/* Project Image with opacity overlay */}
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-80 transition-opacity duration-500 rounded-2xl" />
            </div>

            {/* Text Reveal */}
            <div className="mt-4 border-l-2 border-transparent group-hover:border-black pl-4 transition-all">
              <p className="text-[15px] text-gray-600 font-bold mb-1">
                {project.category} · {project.location}
              </p>
              <h3 className="text-lg font-medium text-gray-900">
                {project.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-400 mt-16 uppercase tracking-widest text-sm">
          No projects found
        </p>
      )}
    </section>
  );
};

export default HomeProjectsList;
