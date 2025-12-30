import React, { useState } from "react";

const companiesData = [
  {
    id: 1,
    name: "Tech Nexus",
    category: "Tech Office",
    location: "Silicon Valley",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Finance Hub",
    category: "Banking",
    location: "London",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Creative Studio",
    category: "Agency",
    location: "New York",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Bio Labs",
    category: "Research",
    location: "Boston",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Legal Chambers",
    category: "Law Firm",
    location: "Washington",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Startup Space",
    category: "Co-working",
    location: "Silicon Valley",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Media Center",
    category: "Broadcasting",
    location: "London",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Ad Agency",
    category: "Marketing",
    location: "New York",
    img: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Pharma HQ",
    category: "Healthcare",
    location: "Boston",
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Government Office",
    category: "Public Sector",
    location: "Washington",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
  },
];

const CompaniesList = () => {
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const locations = [
    "All",
    "Silicon Valley",
    "London",
    "New York",
    "Boston",
    "Washington",
  ];

  const filteredCompanies = companiesData.filter((company) => {
    const matchesSearch = company.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLocation =
      selectedLocation === "All" || company.location === selectedLocation;

    return matchesSearch && matchesLocation;
  });

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 lg:px-14">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-widest uppercase mb-4 text-gray-900">
          Office Spaces
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Transformative workspaces designed to enhance productivity,
          collaboration, and employee wellbeing.
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
        {filteredCompanies.map((company) => (
          <div key={company.id} className="group cursor-pointer">
            <div className="overflow-hidden aspect-[4/3] bg-gray-100">
              <div
                className="w-full h-full bg-center bg-cover transform group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${company.img})` }}
              />
            </div>

            <div className="mt-4 border-l-2 border-transparent group-hover:border-black pl-4 transition-all">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">
                {company.category} · {company.location}
              </p>
              <h3 className="text-lg font-medium text-gray-900">
                {company.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredCompanies.length === 0 && (
        <p className="text-center text-gray-400 mt-16 uppercase tracking-widest text-sm">
          No companies found
        </p>
      )}
    </section>
  );
};

export default CompaniesList;
