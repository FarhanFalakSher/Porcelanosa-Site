import React from "react";
import {
  FiChevronRight,
  FiUsers,
  FiTool,
  FiBook,
  FiBriefcase,
  FiCheck,
} from "react-icons/fi";

const ProfessionalArchitectsSection = () => {
  const offerings = [
    {
      title: "Design Inspiration",
      desc: "Global architectural references, trend insights, and creative inspiration.",
    },
    {
      title: "Premium Materials",
      desc: "High-performance ceramic, porcelain, and architectural surfaces.",
    },
    {
      title: "Custom Solutions",
      desc: "Tailor-made materials and systems adapted to project requirements.",
    },
    {
      title: "Sustainable Products",
      desc: "Eco-efficient materials supporting sustainable architecture.",
    },
  ];

  const resources = [
    {
      title: "Technical Datasheets",
      desc: "Detailed PDFs with performance, compliance, and specifications.",
      icon: <FiBook />,
    },
    {
      title: "CAD / BIM Files",
      desc: "Revit, AutoCAD, and 3D files for seamless project integration.",
      icon: <FiTool />,
    },
    {
      title: "Installation Guides",
      desc: "Professional manuals for correct system application.",
      icon: <FiCheck />,
    },
  ];

  const projects = [
    {
      title: "Luxury Hotels",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
    },
    {
      title: "Commercial Buildings",
      image:
        "https://images.unsplash.com/photo-1487956382158-bb926046304a?w=800",
    },
    {
      title: "High-End Residences",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80"
            alt="Architectural Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-white/60"></div>
              <p className="text-sm tracking-[0.3em] uppercase text-white/90 font-medium">
                Architects & Urban Planners
              </p>
              <div className="h-px w-12 bg-white/60"></div>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Professional Architecture
            <span className="block text-3xl md:text-4xl  mt-4">
              Solutions
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Empowering architects with design freedom, technical precision, and
            dedicated project support worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="group inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-5 py-2 rounded-lg font-2xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Explore Architectural Program
              <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="group inline-flex items-center justify-center gap-3 border-2 border-white text-white px-5 py-2 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-1">
              Contact Team
            </button>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          What We Offer Architects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((item, i) => (
            <div
              key={i}
              className="group p-8 border border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-xl transition-all text-center"
            >
              <h3 className="font-bold text-xl mb-4 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TOOLS & RESOURCES */}
      <section className="bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Tools & Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((item, i) => (
              <div
                key={i}
                className="group bg-white p-10 rounded-xl hover:shadow-xl transition-all text-center"
              >
                <div className="text-3xl mb-8 mx-auto w-16 h-16 rounded-xl flex items-center justify-center bg-gray-300 transition-all duration-300 group-hover:bg-blue-50 group-hover:text-blue-400">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl mb-4 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT SUPPORT */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Dedicated Project Support
            </h2>

            <p className="text-gray-600 text-lg mb-10">
              Our specialized team supports architectural projects at every
              stage, from concept development to execution.
            </p>

            <ul className="space-y-6">
              <li className="group flex items-center gap-4 px-5 py-3 rounded-xl bg-blue-50 hover:bg-gray-900 transition-all duration-300">
                <div className="px-2 py-2 rounded-xl bg-blue-400 text-white transition-all duration-300 group-hover:bg-white group-hover:text-gray-900">
                  <FiUsers />
                </div>
                <span className="font-medium text-gray-800 group-hover:text-white transition-colors duration-300">
                  Dedicated project advisors
                </span>
              </li>

              <li className="group flex items-center gap-4 px-5 py-3 rounded-xl bg-blue-50 hover:bg-gray-900 transition-all duration-300">
                <div className="px-2 py-2 rounded-xl bg-blue-400 text-white transition-all duration-300 group-hover:bg-white group-hover:text-gray-900">
                  <FiCheck />
                </div>
                <span className="font-medium text-gray-800 group-hover:text-white transition-colors duration-300">
                  Custom material selection
                </span>
              </li>

              <li className="group flex items-center gap-4 px-5 py-3 rounded-xl bg-blue-50 hover:bg-gray-900 transition-all duration-300">
                <div className="px-2 py-2 rounded-xl bg-blue-400 text-white transition-all duration-300 group-hover:bg-white group-hover:text-gray-900">
                  <FiBriefcase />
                </div>
                <span className="font-medium text-black group-hover:text-white transition-colors duration-300">
                  Large-scale project coordination
                </span>
              </li>
            </ul>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1487956382158-bb926046304a?w=900"
              alt="Project Support"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Real Architectural Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl h-80"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="absolute bottom-6 left-6 text-xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 text-gray-900 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">
            Partner with Our Professional Team
          </h2>
          <p className="text-lg text-gray-900 mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact our architectural specialists or request technical
            documentation for your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-gray-900 px-5 py-2 border-2 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg transform hover:-translate-y-1">
              Contact Professional Team
            </button>
            <button className="border-2 px-5 py-2 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              Request Technical Info
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalArchitectsSection;
