import React from "react";
import {
  FiChevronRight,
  FiBook,
  FiTool,
  FiCamera,
  FiShoppingBag,
  FiPenTool,
  FiLayers,
  FiGlobe,
  FiUsers,
} from "react-icons/fi";

// Import images from assets
import heroImage from "../../assets/hero.jpg";
import bathroomImg from "../../assets/bathroom.jpg";
import kitchenImg from "../../assets/kitchen.jpg";
import livingRoomImg from "../../assets/living room.jpg";
import bedroomImg from "../../assets/bedroom.jpg";

const InteriorDesignProgram = () => {
  const designSolutions = [
    {
      title: "Bathroom Concepts",
      desc: "Modern, minimalist, and luxury bathroom inspirations.",
    },
    {
      title: "Kitchen Concepts",
      desc: "Innovative kitchen layouts and functional designs.",
    },
    {
      title: "Living Spaces",
      desc: "Stylish living rooms, lounges, and multi-purpose spaces.",
    },
    {
      title: "Wall & Flooring",
      desc: "Harmonious combinations of surfaces, textures, and colors.",
    },
  ];

  const benefits = [
    { title: "Exclusive Collections", icon: <FiBook /> },
    { title: "Sample Ordering", icon: <FiShoppingBag /> },
    { title: "Showroom Visits", icon: <FiCamera /> },
    { title: "Design Consultations", icon: <FiTool /> },
  ];

  const digitalTools = [
    { title: "Mood Boards", icon: <FiPenTool /> },
    { title: "Finish Selectors", icon: <FiLayers /> },
    { title: "Color & Texture Matching", icon: <FiGlobe /> },
  ];

  const gallery = [
    { img: bathroomImg, label: "Luxury Bathroom", category: "Bathroom" },
    { img: kitchenImg, label: "Modern Kitchen", category: "Kitchen" },
    { img: livingRoomImg, label: "Living Room", category: "Living" },
    { img: bedroomImg, label: "Bedroom Decor", category: "Bedroom" },
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-black/90 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>

        <div className="relative text-center text-white max-w-4xl px-6">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-white"></div>
              <p className="text-sm tracking-[0.3em] uppercase font-medium text-white">
                INTERIOR DESIGNERS & DECORATORS
              </p>
              <div className="h-px w-12 bg-white"></div>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Interior Design
            <span className="block text-3xl md:text-4xl text-white mt-4">
              Solutions
            </span>
          </h1>

          <p className="text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed">
            Help designers create beautiful interiors using Porcelanosa's premium products
            with exclusive tools and dedicated support.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="group inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-5 py-2 rounded-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-gray-500/30 transform hover:-translate-y-1">
              Join Design Program
              <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="group inline-flex items-center justify-center gap-3 border-2 border-white text-white px-5 py-2 rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-1">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* DESIGN SOLUTIONS */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
          Design Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {designSolutions.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white p-10 border border-gray-400 rounded-xl hover:border-blue-400 hover:shadow-xl transition-all text-center"
            >
              <h3 className="font-bold text-xl mb-4 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INSPIRATION GALLERY */}
      <section className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
            Inspiration Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gallery.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl h-80"
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-sm text-white mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{item.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGNER BENEFITS */}
      <section className="max-w-7xl mx-auto px-6 py-4">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
          Designer Benefits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white p-10 rounded-xl border border-gray-400 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 bg-gray-300 transition-all duration-300 group-hover:bg-blue-50 group-hover:text-blue-400 rounded-xl flex items-center justify-center text-gray-900 text-2xl mx-auto mb-8">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* DIGITAL TOOLS */}
      <section className="bg-white py-6 text-gray-900 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16">
            Digital Tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {digitalTools.map((item, idx) => (
              <div
                key={idx}
                className="group p-10 bg-white rounded-2xl border border-gray-400 hover:border-blue-400 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="text-3xl mb-8 transition-colors duration-300 group-hover:text-blue-400 ">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-blue-400">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 bg-white text-gray-900 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">
            Book a Showroom Visit or Get Design Assistance
          </h2>
          <p className="text-xl text-gray-900 mb-12 max-w-2xl mx-auto leading-relaxed">
            Connect with our design specialists for personalized guidance and project support.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-white text-gray-900 border-2 px-5 py-2 rounded-xl font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-2xl transform hover:-translate-y">
              Book Showroom Visit
            </button>
            <button className="group bg-white px-5 py-2 border-2 rounded-xl font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:-translate-y">
              Get Design Assistance
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {["150+ Countries", "970+ Stores", "50K+ Products", "8 Companies"].map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 bg-white border backdrop-blur-sm rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3"
              >
                <div className="text-2xl font-bold mb-2">{stat.split(" ")[0]}</div>
                <div className="text-gray-900">{stat.split(" ")[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteriorDesignProgram;
