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
  FiPlay,
  FiArrowRight,
  FiAward,
  FiStar
} from "react-icons/fi";

// Import images from assets
import heroImage from "../../assets/hero.jpg";
import bathroomImg from "../../assets/bathroom.jpg";
import kitchenImg from "../../assets/kitchen.jpg";
import livingRoomImg from "../../assets/living room.jpg";
import bedroomImg from "../../assets/bedroom.jpg";

const InteriorDesignProgram = () => {
  const designSolutions = [
    { title: "Bathroom Concepts", desc: "Modern, minimalist, and luxury bathroom inspirations.", icon: "🚿" },
    { title: "Kitchen Concepts", desc: "Innovative kitchen layouts and functional designs.", icon: "🍳" },
    { title: "Living Spaces", desc: "Stylish living rooms, lounges, and multi-purpose spaces.", icon: "🛋️" },
    { title: "Wall & Flooring", desc: "Harmonious combinations of surfaces, textures, and colors.", icon: "🏠" },
  ];

  const benefits = [
    { title: "Exclusive Collections", icon: <FiBook />, stat: "500+ Designs" },
    { title: "Sample Ordering", icon: <FiShoppingBag />, stat: "Free Shipping" },
    { title: "Showroom Visits", icon: <FiCamera />, stat: "VIP Access" },
    { title: "Design Consultations", icon: <FiTool />, stat: "1-on-1 Support" },
  ];

  const digitalTools = [
    { title: "Mood Boards", icon: <FiPenTool />, desc: "Create visual design concepts", count: "50+ Templates" },
    { title: "Finish Selectors", icon: <FiLayers />, desc: "Compare materials & textures", count: "200+ Options" },
    { title: "Color Matching", icon: <FiGlobe />, desc: "Perfect color coordination", count: "1000+ Palettes" },
  ];

  const gallery = [
    { img: bathroomImg, label: "Luxury Bathroom", category: "Bathroom", location: "Paris, France" },
    { img: kitchenImg, label: "Modern Kitchen", category: "Kitchen", location: "London, UK" },
    { img: livingRoomImg, label: "Living Room", category: "Living", location: "New York, USA" },
    { img: bedroomImg, label: "Bedroom Decor", category: "Bedroom", location: "Milan, Italy" },
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Interior Design" className="w-full h-full object-cover scale-110" />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        <div className="relative text-center text-white max-w-5xl px-4">
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30">
              <FiStar className="text-blue-300" />
              <p className="text-sm tracking-widest uppercase font-medium">INTERIOR DESIGNERS & DECORATORS</p>
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block">Interior Design</span>
            <span className="block text-3xl md:text-4xl mt-3"><span className="text-blue-300">Excellence</span> Redefined</span>
          </h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Transform spaces with <span className="text-white font-semibold">premium products</span>, exclusive digital tools, and dedicated designer support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1">
              Join Design Program <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="group flex items-center justify-center gap-3 border-2 border-white/30 text-white px-6 py-4 rounded-xl font-medium hover:bg-white/10 transition-all backdrop-blur-sm transform hover:-translate-y-1">
              <FiPlay className="mr-2" /> Watch Demo
            </button>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {["45+ Years", "150 Countries", "970 Stores", "8 Brands"].map((stat, i) => (
              <div key={i} className="text-center p-4">
                <div className="text-2xl font-bold text-blue-300 mb-2">{stat.split(" ")[0]}</div>
                <div className="text-sm text-gray-300">{stat.split(" ")[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN SOLUTIONS */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Design Solutions</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600">Comprehensive interior solutions for every space</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {designSolutions.map((item, idx) => (
            <div key={idx} className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 text-center">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
              <button className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center text-sm text-blue-600">
                Explore <FiArrowRight className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* INSPIRATION GALLERY */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Inspiration <span className="text-blue-600">Gallery</span></h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600">Curated spaces from global projects</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl h-72 shadow-lg hover:shadow-2xl transition-all">
                <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs mb-2">{item.category}</div>
                  <h3 className="text-lg font-bold mb-1">{item.label}</h3>
                  <p className="text-gray-300 text-sm mb-2">{item.location}</p>
                  <button className="flex items-center text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project <FiArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGNER BENEFITS */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Designer <span className="text-blue-600">Benefits</span></h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600">Exclusive advantages for professionals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 text-center">
                <div className="inline-flex p-3 rounded-lg bg-blue-50 text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600">{item.title}</h3>
                <div className="text-sm font-semibold text-blue-500">{item.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL TOOLS */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Digital <span className="text-blue-600">Tools</span></h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600">Innovative tools for modern workflows</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {digitalTools.map((item, idx) => (
              <div key={idx} className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 text-center">
                <div className="text-3xl text-blue-600 mb-4">{item.icon}</div>
                <div className="mb-3"><span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold">{item.count}</span></div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-blue-600">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <button className="w-full group/tool inline-flex items-center justify-center gap-2 bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-black transition-all">
                  Access Tool <FiArrowRight className="opacity-0 group-hover/tool:opacity-100 transition-opacity" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="inline-flex p-3 rounded-xl bg-blue-50 mb-6"><FiAward className="text-2xl text-blue-600" /></div>
            <h2 className="text-3xl font-bold mb-6">Book a <span className="text-blue-600">Showroom Visit</span></h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">Connect with our design specialists for personalized guidance and exclusive project support.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="group flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1">
                Book Showroom Visit <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-3 border-2 border-gray-300 text-gray-800 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-all transform hover:-translate-y-1">
                <FiUsers /> Get Design Assistance
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-gray-100">
              {["150+ Countries", "970+ Stores", "50K+ Products", "8 Brands"].map((stat, i) => (
                <div key={i} className="text-center p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{stat.split(" ")[0]}</div>
                  <div className="text-gray-600 text-sm">{stat.split(" ")[1]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteriorDesignProgram;