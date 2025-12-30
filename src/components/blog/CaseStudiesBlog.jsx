import React, { useState } from "react";

// Offline images
import heroImage from "../../assets/case-hero.jpg";
import project1Img from "../../assets/case-project1.jpg";
import project2Img from "../../assets/case-project2.jpg";

// Sample case studies data
const caseStudiesData = [
  {
    id: 1,
    name: "Luxury Hotel Renovation",
    type: "Hotel",
    country: "Italy",
    sector: "Hospitality",
    heroImage: project1Img,
    overview: "Location: Milan, Architect: Studio Design",
    challenge: "Outdated interiors, low guest satisfaction",
    solution: "Modern tile and wood finishes, luxury bathroom upgrades",
    result: "Increased occupancy and guest satisfaction",
    products: ["Porcelain Tiles", "Wood Flooring", "Luxury Bathroom Collection"],
    pdf: "/assets/case1.pdf",
  },
  {
    id: 2,
    name: "Residential Modern Apartment",
    type: "Residential",
    country: "Spain",
    sector: "Residential",
    heroImage: project2Img,
    overview: "Location: Madrid, Architect: Home Design Co.",
    challenge: "Need for contemporary aesthetics with durability",
    solution: "High-end ceramic tiles and textured wall panels",
    result: "Modern, durable interiors with premium look",
    products: ["Ceramic Tiles", "Wall Panels", "Bathroom Collection"],
    pdf: "/assets/case2.pdf",
  },
];

export default function CaseStudiesBlog() {
  const [filters, setFilters] = useState({
    type: "All",
    country: "All",
    sector: "All",
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredCases = caseStudiesData.filter((project) => {
    return (
      (filters.type === "All" || project.type === filters.type) &&
      (filters.country === "All" || project.country === filters.country) &&
      (filters.sector === "All" || project.sector === filters.sector)
    );
  });

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[87vh]">
        <img
          src={heroImage}
          alt="Case Studies"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-wide">
              Case Studies
            </h1>
            <p className="mt-4 text-white/80 max-w-xl text-lg">
              Real-world projects showcasing Porcelanosa products.
            </p>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap gap-4 items-center justify-between">
        <h2 className="text-2xl font-semibold">Filter Projects</h2>
        <div className="flex gap-4 flex-wrap">
          <select
            name="type"
            className="border px-5 py-2 rounded-xl text-sm"
            onChange={handleFilterChange}
          >
            <option>All</option>
            <option>Hotel</option>
            <option>Residential</option>
            <option>Commercial</option>
          </select>
          <select
            name="country"
            className="border px-5 py-2 rounded-xl text-sm"
            onChange={handleFilterChange}
          >
            <option>All</option>
            <option>Italy</option>
            <option>Spain</option>
            <option>France</option>
          </select>
          <select
            name="sector"
            className="border px-5 py-2 rounded-xl text-sm"
            onChange={handleFilterChange}
          >
            <option>All</option>
            <option>Hospitality</option>
            <option>Residential</option>
            <option>Retail</option>
          </select>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="mx-auto max-w-7xl px-6 pb-20 space-y-16">
        {filteredCases.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:opacity-80 hover:shadow-2xl transition duration-500"
          >
            <img
              src={project.heroImage}
              alt={project.name}
              className="h-64 w-full object-cover hover:scale-105 transition duration-700"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900">{project.name}</h3>
              <p className="mt-2 text-gray-600">{project.overview}</p>

              {/* Challenge → Solution → Result */}
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Challenge:</strong> {project.challenge}
                </p>
                <p>
                  <strong>Solution:</strong> {project.solution}
                </p>
                <p>
                  <strong>Result:</strong> {project.result}
                </p>
              </div>

              {/* Products Used */}
              <div className="mt-4">
                <strong>Products Used:</strong>
                <ul className="list-disc list-inside text-gray-600">
                  {project.products.map((p, index) => (
                    <li key={index}>{p}</li>
                  ))}
                </ul>
              </div>

              {/* Download PDF */}
              <div className="mt-6">
                <a
                  href={project.pdf}
                  download
                  className="px-5 py-2 border border-gray-900 text-gray-900 rounded-xl hover:bg-gray-900 hover:text-white transition"
                >
                  Download Project PDF
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
