import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import {
  FiChevronRight,
  FiTool,
  FiUsers,
  FiTruck,
  FiShield,
  FiCheck,
  FiAward,
  FiPhone,
  FiMail,
  FiMapPin,
  FiBook,
  FiClipboard
} from "react-icons/fi";

const PorcelanosaContractors = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }, []);

  const constructionSolutions = [
    { 
      name: "Facades Systems", 
      desc: "Premium external cladding solutions with weather-resistant finishes.", 
      icon: "🏗️", 
      color: "from-amber-600 to-amber-500", 
      badge: "Premium",
      aosDelay: "100"
    },
    { 
      name: "Flooring Systems", 
      desc: "Durable flooring solutions for residential and commercial applications.", 
      icon: "🧱", 
      color: "from-blue-700 to-blue-600", 
      badge: "Durable",
      aosDelay: "200"
    },
    { 
      name: "Structural Surfaces", 
      desc: "High-performance surfaces for walls, countertops, and structural elements.", 
      icon: "🏢", 
      color: "from-emerald-600 to-emerald-500", 
      badge: "Structural",
      aosDelay: "300"
    },
  ];

  const technicalSupport = [
    { 
      icon: <FiBook />, 
      title: "Installation Manuals", 
      desc: "Step-by-step guides for smooth application and installation.", 
      aosDelay: "100"
    },
    { 
      icon: <FiUsers />, 
      title: "On-Site Guidance", 
      desc: "Technical experts available for site visits and project consultation.", 
      aosDelay: "200"
    },
    { 
      icon: <FiTool />, 
      title: "Technical Consultations", 
      desc: "One-on-one consultations for complex installation scenarios.", 
      aosDelay: "300"
    },
  ];

  const performanceFeatures = [
    { icon: "🌧️", title: "Weather Resistance", desc: "Materials tested against extreme weather conditions", aosDelay: "100" },
    { icon: "🔥", title: "Fire Safety", desc: "Fire-resistant materials meeting international standards", aosDelay: "200" },
    { icon: "⚖️", title: "Load Capacity", desc: "Engineered for structural integrity and load-bearing", aosDelay: "300" },
    { icon: "🛡️", title: "Material Resistance", desc: "Resistant to wear, impact, and environmental factors", aosDelay: "400" },
  ];

  const trainingPrograms = [
    { title: "Installer Training", desc: "Hands-on training for certified application techniques", icon: "🎓" },
    { title: "Certification Programs", desc: "Official installer certification for Porcelanosa systems", icon: "🏅" },
    { title: "Application Systems", desc: "Training on specialized application tools and methods", icon: "🛠️" },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div className="relative min-h-[70vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-24 flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <div className="mb-8" data-aos="fade-down">
              <div className="flex items-center justify-center space-x-4">
                <div className="h-px w-12 bg-white"></div>
                <span className="text-sm tracking-[0.3em] font-semibold text-white uppercase">BUILDERS & CONTRACTORS</span>
                <div className="h-px w-12 bg-white"></div>
              </div>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-8" data-aos="fade-up">
              <span className="block">Construction Solutions</span>
              <span className="block text-4xl font-light text-white mt-3">For Professional Builders</span>
            </h1>
            <p className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Help construction companies with installation, durability, and execution through expert guidance and premium materials.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center" data-aos="fade-up" data-aos-delay="300">
              <button className="group px-5 py-2 bg-white text-gray-900 font-bold rounded-xl  transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 mx-auto sm:mx-0 transform hover:-translate-y-1">
                Download Installation Guides
                <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-5 py-2 border-2 border-white  text-white hover:bg-white hover:text-gray-900  font-bold rounded-xl  transition-all duration-300 mx-auto sm:mx-0 transform hover:-translate-y-1">
                Contact Technical Team
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 -mt-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20" data-aos="fade-up">
          {[
            { value: "25K+", label: "Contractors", color: "bg-amber-600" },
            { value: "48h", label: "Avg Response", color: "bg-blue-700" },
            { value: "95%", label: "Satisfaction", color: "bg-emerald-600" },
            { value: "150+", label: "Training Sessions", color: "bg-slate-700" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:border-[#4d83cf] hover:shadow-xl hover:-translate-y-1 duration-300 text-center"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className={`w-14 h-14 ${stat.color} rounded-xl flex items-center justify-center text-white text-2xl mx-auto mb-4`}>
                {stat.value.includes("K") ? "👷" : stat.value.includes("h") ? "⏱️" : stat.value.includes("%") ? "⭐" : "📚"}
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Construction Solutions */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6" data-aos="fade-up">Construction Solutions</h2>
          <p className="text-slate-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Specialized systems for professional construction applications
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {constructionSolutions.map((solution, idx) => (
            <div
              key={idx}
              className="group bg-white p-10 rounded-2xl border border-slate-200 hover:border-[#4a8dc8] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center"
              data-aos="fade-up"
              data-aos-delay={solution.aosDelay}
            >
              <div className="text-3xl mb-8">{solution.icon}</div>
              <span className="inline-block px-5 py-2 bg-amber-50 text-[#15295F] text-sm font-bold rounded-full mb-6">
                {solution.badge}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-5">{solution.name}</h3>
              <p className="text-slate-600 mb-8">{solution.desc}</p>
              <button className="text-[#15295F] font-bold hover:text-blue-400 transition-colors duration-300">
                View Technical Specs →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Support */}
      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16" data-aos="fade-up">Technical Support</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalSupport.map((support, idx) => (
              <div
                key={idx}
                className="bg-white p-10 rounded-2xl border border-gray-400 hover:border-[#6488cb] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center"
                data-aos="fade-up"
                data-aos-delay={support.aosDelay}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-8">
                  {support.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{support.title}</h3>
                <p className="text-slate-600">{support.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance & Safety */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-6">
        <h3 className="text-3xl font-bold text-center text-slate-900 mb-12" data-aos="fade-up">Performance & Safety Features</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {performanceFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="text-center p-8 bg-white rounded-2xl border border-slate-200 hover:border-[#6488cb] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
              data-aos="zoom-in"
              data-aos-delay={feature.aosDelay}
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h4>
              <p className="text-slate-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Training & Certification */}
      <div className=" bg-white py-6 text-gray-900 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16" data-aos="fade-up">Training & Certification</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {trainingPrograms.map((program, idx) => (
              <div
                key={idx}
                className="p-10 bg-white/10 backdrop-blur-sm rounded-xl border border-gray-400 hover:border-blue-400 transition-all duration-500 transform hover:-translate-y-2"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <div className="text-3xl mb-8">{program.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                <p className="text-gray">{program.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="group inline-flex items-center justify-center gap-3 bg-white text-gray-900 border-2 px-5 py-2 rounded-xl font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-2xl transform hover:-translate-y-1">
              <FiAward className="text-xl" />
              Enroll in Certification
              <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-6">
        <div className="bg-white rounded-xl p-12 text-gray-900 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-8">Elevate Your Construction Business</h2>
          <p className="text-gray-900 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Access premium solutions, certified training, and dedicated technical support for your construction projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-white text-gray-900 border-2 px-5 py-2 rounded-xl font-bold hover:bg-gray-900 hover:text-white transition-all duration-300  transform hover:-translate-y-1">
              Download Installation Guides
            </button>
            <button className="group border-2 hover:bg-gray-900 hover:text-white px-5 py-2 rounded-xl font-bold  transition-all duration-300 transform hover:-translate-y-1">
              Contact Technical Team
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "📞", label: "Technical Hotline", value: "+34 964 35 95 00" },
              { icon: "📧", label: "Email Support", value: "@porcelanosa.com" },
              { icon: "🏢", label: "Training Centers", value: "Global Locations" },
              { icon: "⏰", label: "Response Time", value: "24-48 Hours" },
            ].map((contact, idx) => (
              <div key={idx} className="p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow hover:shadow-2xl hover:-translate-y-1 duration-300">
                <div className="text-3xl mb-4">{contact.icon}</div>
                <div className=" mb-2">{contact.label}</div>
                <div className="font-bold">{contact.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorcelanosaContractors;