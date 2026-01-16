import React from "react";
import { FiChevronRight, FiUsers, FiTool, FiBook, FiBriefcase, FiCheck, FiArrowRight, FiAward } from "react-icons/fi";

const ProfessionalArchitectsSection = () => {
  const offerings = [
    { title: "Design Inspiration", desc: "Global architectural references, trend insights, and creative inspiration." },
    { title: "Premium Materials", desc: "High-performance ceramic, porcelain, and architectural surfaces." },
    { title: "Custom Solutions", desc: "Tailor-made materials and systems adapted to project requirements." },
    { title: "Sustainable Products", desc: "Eco-efficient materials supporting sustainable architecture." },
  ];

  const resources = [
    { title: "Technical Datasheets", desc: "Detailed PDFs with performance, compliance, and specifications.", icon: <FiBook /> },
    { title: "CAD / BIM Files", desc: "Revit, AutoCAD, and 3D files for seamless project integration.", icon: <FiTool /> },
    { title: "Installation Guides", desc: "Professional manuals for correct system application.", icon: <FiCheck /> },
  ];

  const projects = [
    { title: "Luxury Hotels", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800" },
    { title: "Commercial Buildings", image: "https://images.unsplash.com/photo-1487956382158-bb926046304a?w=800" },
    { title: "High-End Residences", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800" },
  ];

  return (
    <div className="bg-white">
      {/* ENHANCED HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80"
            alt="Architectural Design"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <div className="mb-6 animate-fade-in">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <FiAward className="text-blue-300" />
              <p className="text-sm tracking-widest uppercase font-medium">
                Architects & Urban Planners
              </p>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-blue-300">Architecture</span>
            <span className="block text-3xl md:text-4xl mt-3">Solutions</span>
          </h1>

          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Empowering architects with design freedom, technical precision, and
            dedicated project support worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group flex items-center justify-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105">
              Explore Architectural Program
              <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
            </button>

            <button className="group flex items-center justify-center gap-3 border-2 border-white text-white px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition-all backdrop-blur-sm transform hover:-translate-y-1">
              Contact Team
            </button>
          </div>
        </div>
      </section>

      {/* INTRO WITH DECORATION */}
      <section className="relative max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-400 rounded-full"></div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our professional architectural program is designed to support
          architects, designers, and planners with advanced materials,
          specialized tools, and expert guidance throughout every phase of a
          project.
        </p>
      </section>

      {/* ENHANCED OFFERINGS */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          What We Offer <span className="text-blue-600">Architects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((item, i) => (
            <div
              key={i}
              className="group p-6 border-2 border-gray-100 rounded-xl hover:border-blue-400 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center bg-white"
            >
              <div className="text-2xl mb-4">{"🎨🏗️⚙️🌿".split("")[i]}</div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ENHANCED WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why <span className="text-blue-600">Architects Choose Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 border border-gray-200 rounded-xl text-center hover:shadow-2xl transition-all hover:-translate-y-2 group">
            <FiUsers className="mx-auto mb-4 text-3xl text-blue-600 group-hover:scale-110 transition-transform" />
            <p className="text-gray-600">
              Long-term collaboration with dedicated architectural specialists.
            </p>
          </div>

          <div className="p-8 border border-gray-200 rounded-xl text-center hover:shadow-2xl transition-all hover:-translate-y-2 group">
            <FiTool className="mx-auto mb-4 text-3xl text-blue-600 group-hover:scale-110 transition-transform" />
            <p className="text-gray-600">
              Advanced technical support and professional documentation.
            </p>
          </div>

          <div className="p-8 border border-gray-200 rounded-xl text-center hover:shadow-2xl transition-all hover:-translate-y-2 group">
            <FiBriefcase className="mx-auto mb-4 text-3xl text-blue-600 group-hover:scale-110 transition-transform" />
            <p className="text-gray-600">
              Experience across residential, commercial, and large-scale
              developments.
            </p>
          </div>
        </div>
      </section>

      {/* ENHANCED TOOLS & RESOURCES */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Professional <span className="text-blue-600">Tools & Resources</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((item, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-blue-100 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative text-3xl p-4 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-all">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENHANCED PROJECT SUPPORT */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Dedicated <span className="text-blue-600">Project Support</span>
            </h2>

            <p className="text-gray-600 mb-8">
              Our specialized team supports architectural projects at every
              stage, from concept development to execution.
            </p>

            <ul className="space-y-4">
              <li className="group flex items-center gap-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all shadow-sm">
                <FiUsers className="text-blue-600" />
                <span>Dedicated project advisors</span>
              </li>

              <li className="group flex items-center gap-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all shadow-sm">
                <FiCheck className="text-blue-600" />
                <span>Custom material selection</span>
              </li>

              <li className="group flex items-center gap-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all shadow-sm">
                <FiBriefcase className="text-blue-600" />
                <span>Large-scale project coordination</span>
              </li>
            </ul>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1487956382158-bb926046304a?w=900"
              alt="Project Support"
              className="rounded-xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl">
              <div className="text-2xl font-bold text-blue-600">45+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* ENHANCED CASE STUDIES */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Real <span className="text-blue-600">Architectural Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <button className="flex items-center text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details <FiArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENHANCED CTA */}
      <section className="relative py-12">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6">
              Partner with Our <span className="text-blue-600">Professional Team</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our architectural specialists or request technical
              documentation for your next project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group flex items-center justify-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-black transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Contact Professional Team
                <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-all transform hover:-translate-y-1">
                Request Technical Info
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalArchitectsSection;