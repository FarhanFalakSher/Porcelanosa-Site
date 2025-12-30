import React from "react";
import { FiChevronRight, FiUsers, FiTool, FiBook, FiBriefcase, FiCheck } from "react-icons/fi";

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
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
    },
    {
      title: "Commercial Buildings",
      image: "https://images.unsplash.com/photo-1487956382158-bb926046304a?w=800",
    },
    {
      title: "High-End Residences",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800",
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
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Professional Architecture
            <span className="block text-3xl md:text-5xl font-light mt-4">Solutions</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Empowering architects with design freedom, technical precision, and dedicated project support worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="group inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 mx-auto sm:mx-0">
              Explore Architectural Program
              <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="group inline-flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-1 mx-auto sm:mx-0">
              Contact Team
            </button>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          What We Offer Architects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((item, i) => (
            <div
              key={i}
              className="group p-8 border border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center"
            >
              <h3 className="font-bold text-xl text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TOOLS & RESOURCES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Tools & Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((item, i) => (
              <div
                key={i}
                className="group bg-white p-10 rounded-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center"
              >
                <div className="text-4xl text-blue-700 mb-8 mx-auto w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT SUPPORT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Dedicated Project Support
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Our specialized team supports architectural projects at every stage, from concept development to execution.
            </p>

            <ul className="space-y-6">
              <li className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                <div className="p-3 bg-blue-600 text-white rounded-xl">
                  <FiUsers />
                </div>
                <span className="font-medium text-gray-800">Dedicated project advisors</span>
              </li>
              <li className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                <div className="p-3 bg-blue-600 text-white rounded-xl">
                  <FiCheck />
                </div>
                <span className="font-medium text-gray-800">Custom material selection</span>
              </li>
              <li className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                <div className="p-3 bg-blue-600 text-white rounded-xl">
                  <FiBriefcase />
                </div>
                <span className="font-medium text-gray-800">Large-scale project coordination</span>
              </li>
            </ul>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1487956382158-bb926046304a?w=900"
              alt="Project Support"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-700 text-white px-8 py-4 rounded-2xl shadow-2xl">
              <div className="text-center">
                <div className="text-2xl font-bold">970+</div>
                <div className="text-sm">Global Stores</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-gray-900 py-20 text-white">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">
            Partner with Our Professional Team
          </h2>
          <p className="text-lg text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact our architectural specialists or request technical documentation for your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-medium hover:bg-blue-100 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
              Contact Professional Team
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
              Request Technical Info
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalArchitectsSection;