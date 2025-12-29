import React, { useState } from "react";

const healthProjectsData = [
  {
    id: 1,
    name: "General Hospital",
    category: "Hospital",
    location: "Boston",
    img: "https://images.unsplash.com/photo-1516549655669-df565bc2d4d3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Children's Clinic",
    category: "Pediatrics",
    location: "London",
    img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Cardiac Center",
    category: "Specialized",
    location: "Cleveland",
    img: "https://images.unsplash.com/photo-1586773860418-dc22f8b874bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Mental Health",
    category: "Psychiatric",
    location: "Zurich",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Rehabilitation",
    category: "Therapy",
    location: "Singapore",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Cancer Institute",
    category: "Oncology",
    location: "Boston",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Maternity Wing",
    category: "Obstetrics",
    location: "London",
    img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Orthopedic Center",
    category: "Specialized",
    location: "Cleveland",
    img: "https://images.unsplash.com/photo-1516549655669-df565bc2d4d3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Geriatric Care",
    category: "Elderly",
    location: "Zurich",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Dental Clinic",
    category: "Dentistry",
    location: "Singapore",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
  },
];

const HealthProjectsList = () => {
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const locations = [
    "All",
    "Boston",
    "London",
    "Cleveland",
    "Zurich",
    "Singapore",
  ];

  const filteredHealthProjects = healthProjectsData.filter((project) => {
    const matchesSearch = project.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLocation =
      selectedLocation === "All" || project.location === selectedLocation;

    return matchesSearch && matchesLocation;
  });

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 lg:px-14">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-widest uppercase mb-4 text-gray-900">
          Healthcare Facilities
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Healing environments designed with patient comfort, medical
          efficiency, and advanced technology in mind.
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
        {filteredHealthProjects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="overflow-hidden aspect-[4/3] bg-gray-100">
              <div
                className="w-full h-full bg-center bg-cover transform group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${project.img})` }}
              />
            </div>

            <div className="mt-4 border-l-2 border-transparent group-hover:border-black pl-4 transition-all">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">
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
      {filteredHealthProjects.length === 0 && (
        <p className="text-center text-gray-400 mt-16 uppercase tracking-widest text-sm">
          No health projects found
        </p>
      )}
    </section>
  );
};

export default HealthProjectsList;
